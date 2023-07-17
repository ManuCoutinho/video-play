import { CourseType } from "./course"

export type PlayerStateType = {
  course: CourseType | null
  currentModuleIndex: number
  currentLessonIndex: number
  isLoading: boolean
}