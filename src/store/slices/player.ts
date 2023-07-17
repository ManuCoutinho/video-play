import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PlayerStateType } from '@/models/player'
import { baseUrl } from '@/constants/baseUrl'

const initialState: PlayerStateType = {
  course: null,
  currentLessonIndex: 0,
  currentModuleIndex: 0,
  isLoading: true
}

export const loadCourse = createAsyncThunk('load/state', async () => {
  const controller = new AbortController()
  const signal = controller.signal
  const request = await fetch(`${baseUrl}/courses/1`, { signal })
    .then((res) => res.json())
    .finally(() => controller.abort())

  return request
})

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
      const nextLesson =
        state.course?.modules[state.currentModuleIndex].lessons[nextLessonIndex]

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1
        const nextModule = state.course?.modules[nextModuleIndex]

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex
          state.currentLessonIndex = 0
        }
      }
    }
  },
  extraReducers(builder) {
    builder.addCase(loadCourse.fulfilled, (state, action) => {
      state.course = action.payload
      state.isLoading = false
    })
    builder.addCase(loadCourse.pending, (state) => {
      state.isLoading = true
    })
  }
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions
