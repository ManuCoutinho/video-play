import '@testing-library/jest-dom'
import { describe, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import {Header} from '.'
describe('<Header/>', () => {
  it('should render the Header component correctly', () => {
    render(<Header/>)
    expect(screen.getByRole('heading', { name: /test/i})).toBeInTheDocument()
  });
  
});