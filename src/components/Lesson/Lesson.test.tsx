import '@testing-library/jest-dom'
import { describe, it, vi } from 'vitest'
import { screen, render } from '@testing-library/react'
import { Lesson } from '.'

const lessonMock = {
  title: 'test title',
  duration: '04:33',
  onPlay: vi.fn(),
  isCurrent: false
}
describe('Name of the group', () => {
  it('should render the component with data', () => {
    render(<Lesson {...lessonMock} />)
    const button = screen.getByRole('button', { name: /test title 04:33/i })
    expect(button).toHaveAttribute('data-active', 'false')
  })
  it('should render the component without data', () => {
    render(<Lesson {...lessonMock} isCurrent={true} />)
    const button = screen.getByRole('button', { name: /test title 04:33/i })
    expect(button).toHaveAttribute('data-active', 'true')
  })
  it('should match to snapshot', () => {
    const { container } = render(<Lesson {...lessonMock} isCurrent={true} />)
    expect(container).toMatchSnapshot()
  })
})
