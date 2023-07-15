import { createSlice } from '@reduxjs/toolkit'

const playerSlice = createSlice({
  name: '',
  initialState: {
    course: {
      modules: [
        {
          id: '1',
          title: 'title video',
          lessons: [
            {
              id: '1',
              title: 'title 1',
              duration: '00:23'
            },
            {
              id: '2',
              title: 'title 2',
              duration: '00:23'
            }
          ]
        }
      ]
    }
  },
  reducers: {}
})

export const player = playerSlice.reducer
