import '@testing-library/jest-dom'
import { describe, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import { Header } from '.'
import { state } from '@/__mocks__/data/playerState'


describe('<Header/>', () => {
  it('should render the Header component correctly', () => {
    render(<Header />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByText(/modulo/i)).toBeInTheDocument()
  })
})
