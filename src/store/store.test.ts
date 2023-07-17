import { describe, it } from 'vitest'
import { useStore as store } from '.'
import { state } from '@/__mocks__/data/playerState'

const { course: mockCourse } = state
const mockInitialState = store.getState()
describe('Zustand store', () => {
  beforeEach(() => store.setState(mockInitialState))
  it('should be able to play', () => {
    const { play } = store.getState()
    play([1, 2])
    const { currentLessonIndex, currentModuleIndex } = store.getState()
    expect(currentLessonIndex).toEqual(2)
    expect(currentModuleIndex).toEqual(1)
  })
  it('should be able to play next video automatically', () => {
    store.setState({ course: mockCourse })
    const { next } = store.getState()
    next()
    const { currentLessonIndex, currentModuleIndex } = store.getState()
    expect(currentLessonIndex).toEqual(1)
    expect(currentModuleIndex).toEqual(0)
  })
  it('should be able to jump to the next module automatically', () => {
    store.setState({ course: mockCourse })
    const { next } = store.getState()
    store.setState({ currentLessonIndex: 1 })
    next()
    const { currentLessonIndex, currentModuleIndex } = store.getState()
    expect(currentLessonIndex).toEqual(0)
    expect(currentModuleIndex).toEqual(1)
  })
  it('should not update the current module if there is no next lesson available', () => {
    store.setState({ course: mockCourse })
    const { next } = store.getState()
    store.setState({ currentLessonIndex: 1, currentModuleIndex: 1 })
    next()
    const { currentLessonIndex, currentModuleIndex } = store.getState()
    expect(currentLessonIndex).toEqual(1)
    expect(currentModuleIndex).toEqual(1)
  })
})
