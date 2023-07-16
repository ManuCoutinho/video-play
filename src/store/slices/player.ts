import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { useAppSelector } from '..'
import { PlayerStateType } from '@/models/player'

const initialState: PlayerStateType = {
  course: null,
  currentLessonIndex: 0,
currentModuleIndex: 0
}
export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1
      const nextLesson = state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex]

      if (nextLesson){
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course?.modules[nextModuleIndex]

        if(nextModule) {
          state.currentModuleIndex = nextModuleIndex
          state.currentLessonIndex = 0
        }
      }
    }
  }
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions

export const useCurrentLesson = () => {
    const { currentLesson, currentModule } = useAppSelector((state) => {
      const { currentLessonIndex, currentModuleIndex, course } = state.player
      const currentModule = course?.modules[currentModuleIndex]
      const currentLesson = currentModule?.lessons[currentLessonIndex]
      return { currentLesson, currentModule }
    })
     return { currentLesson, currentModule }
}