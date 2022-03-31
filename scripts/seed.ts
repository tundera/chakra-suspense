import task from 'tasuku'

import { db } from 'src/server/db'

async function runSeedTasks() {
  await task('Seed tasks', async ({ task }) => {
    await task.group((task) => [
      task('Seeding task 1', async () => {
        /** run first seeding task here */
      }),
      task('Seeding task 2', async () => {
        /** run next seeding task here */
      }),
      // ...etc
    ])
  })
}

async function main() {
  try {
    await runSeedTasks()
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
    process.exit(0)
  })
