// Use this to delete a user by their email
// Simply call this with:
// yarn ts-node --require tsconfig-paths/register ./cypress/support/delete-user.ts username@example.com
// and that user will get deleted

import { db } from 'src/server/db'

async function deleteUser(email: string) {
  if (!email) {
    throw new Error('email required for login')
  }
  if (!email.endsWith('@example.com')) {
    throw new Error('All test emails must end in @example.com')
  }

  await db.user.delete({ where: { email } })
}

deleteUser(process.argv[2])
