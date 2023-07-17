import { useAppSelector } from '@/store'

export const useCurrentLesson = () => {
  const { currentLesson, currentModule } = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex, course } = state.player
    const currentModule = course?.modules[currentModuleIndex]
    const currentLesson = currentModule?.lessons[currentLessonIndex]
    return { currentLesson, currentModule }
  })
  return { currentLesson, currentModule }
}
