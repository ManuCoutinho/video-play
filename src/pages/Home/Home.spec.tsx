import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { Home } from '.'

describe('<Home/>', () => {
  it('should render Home page correctly', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument()
  })
})
