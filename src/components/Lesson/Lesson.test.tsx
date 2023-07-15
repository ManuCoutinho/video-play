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
  it('should ', () => {
    render(<Lesson {...lessonMock} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})