import { describe, it } from 'vitest'
import { player as reducer, play, next } from './player'
import { state } from '@/__mocks__/data/playerState'

const mockInitialState = state
describe('test slice reducer', () => {
  it('should be able to play from reducer action', () => {
    const state = reducer(mockInitialState, play([2, 1]))

    expect(state.currentModuleIndex).toEqual(2)
    expect(state.currentLessonIndex).toEqual(1)
  })
  it('should be able to play next video automatically', () => {
    const state = reducer(mockInitialState, next())

    expect(state.currentModuleIndex).toEqual(0)
    expect(state.currentLessonIndex).toEqual(1)
  })
  it('should be able to jump to the next module automatically', () => {
    const state = reducer(
      {
        ...mockInitialState,
        currentLessonIndex: 1
      },
      next()
    )

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(0)
  })

  it('should not update the current module and/or lesson index if there is no next lesson available', () => {
    const state = reducer(
      {
        ...mockInitialState,
        currentModuleIndex: 1,
        currentLessonIndex: 1
      },
      next()
    )

    expect(state.currentModuleIndex).toEqual(1)
    expect(state.currentLessonIndex).toEqual(1)
  })
})
