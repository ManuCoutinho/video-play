export type LessonProps = {
  title: string
  duration: string
  isCurrent?: boolean
  onPlay(): void
}
