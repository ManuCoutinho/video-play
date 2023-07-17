import { create } from 'zustand'
import { PlayerStateType } from '@/models/player'
import { baseUrl } from '@/constants/baseUrl'

type MethodsPlayer = {
  play: (payload: [number, number]) => void
  next: () => void
  load: () => Promise<void>
}
const initialState: PlayerStateType = {
  course: null,
  currentLessonIndex: 0,
  currentModuleIndex: 0,
  isLoading: true
}

const useStore = create<PlayerStateType & MethodsPlayer>((set, get) => {
  return {
    ...initialState,
    play: (payload: [number, number]) => {
      const [moduleIndex, lessonIndex] = payload
      set({
        currentLessonIndex: lessonIndex,
        currentModuleIndex: moduleIndex
      })
    },
    next: () => {
      const { currentLessonIndex, currentModuleIndex, course } = get()
      const nextLessonIndex = currentLessonIndex + 1
      const nextLesson =
        course?.modules[currentModuleIndex].lessons[nextLessonIndex]

      if (nextLesson) {
        set({
          currentLessonIndex: nextLessonIndex
        })
      } else {
        const nextModuleIndex = currentModuleIndex + 1
        const nextModule = course?.modules[nextModuleIndex]
        if (nextModule) {
          set({
            currentModuleIndex: nextModuleIndex,
            currentLessonIndex: 0
          })
        }
      }
    },
    load: async () => {
      set({ isLoading: true })
      const controller = new AbortController()
      const signal = controller.signal
      await fetch(`${baseUrl}/courses/1`, { signal })
        .then((res) => res.json())
        .then((data) =>
          set({
            course: data,
            isLoading: false
          })
        )

      controller.abort()
    }
  }
})

export { useStore }
