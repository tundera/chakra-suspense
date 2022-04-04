import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Home from 'src/pages'

test('home page renders correctly', () => {
  render(<Home />)

  expect(screen.getByRole('heading', { level: 1, name: /log in to your account/i })).toBeDefined()
  expect(screen.getByRole('textbox', { name: /email/i })).toBeDefined()
})
