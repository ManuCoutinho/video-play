import { useStore } from '@/store'

export const useCurrentLesson = () => {
  const { currentLesson, currentModule } = useStore((state) => {
    const { currentLessonIndex, currentModuleIndex, course } = state
    const currentModule = course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]
    return { currentLesson, currentModule }
  })
  return { currentLesson, currentModule }
}
