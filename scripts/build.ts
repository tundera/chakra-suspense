#!/usr/bin/env node

import { execa } from 'execa'

import { getErrorMessage } from 'catch-safe'

async function main() {
  try {
    await execa('yarn', ['prisma', 'generate'], {
      stdio: 'inherit',
      env: {
        NODE_ENV: 'production',
        DATABASE_URL: process.env.DATABASE_URL,
      },
    })
  } catch (err) {
    throw new Error(`Failed to generate Prisma schema: ${getErrorMessage(err)}`)
  }

  try {
    await execa('yarn', ['prisma', 'migrate', 'deploy'], {
      stdio: 'inherit',
      env: {
        NODE_ENV: 'production',
        DATABASE_URL: process.env.MIGRATE_DATABASE_URL,
      },
    })
  } catch (err) {
    throw new Error(`Failed to migrate Prisma schema: ${getErrorMessage(err)}`)
  }

  try {
    await execa('yarn', ['next', 'build'], {
      stdio: 'inherit',
    })
  } catch (err) {
    throw new Error(`Failed to build Next.js application: ${getErrorMessage(err)}`)
  }
}

main()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => {
    process.exit(0)
  })
