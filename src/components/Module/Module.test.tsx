import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, it } from 'vitest'
import {Module} from '.'

const moduleMock = {
  title: '',
  moduleIndex: 12,
  amountOfLesson: 44
}
describe('<Module/>', () => {
  it('should render Module correctly ', () => {
    render(<Module {...moduleMock} />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
 })