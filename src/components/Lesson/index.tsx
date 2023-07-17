import { PlayCircle, VideoCamera } from '@phosphor-icons/react'
import { LessonProps } from './types'

export const Lesson: React.FC<LessonProps> = ({
  title,
  duration,
  onPlay,
  isCurrent = false
}) => {
  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className='flex items-center gap-3 text-sm text-info data-[active=true]:text-emerald-300 enabled:hover:text-emerald-200 px-4 py-2'
    >
      {isCurrent ? (
        <PlayCircle weight='light' className='text-emerald-300 w-4 h-4' />
      ) : (
        <VideoCamera weight='light' className='text-primary w-4 h-4' />
      )}
      <span>{title}</span>
      <span className='ml-auto font-mono text-xs text-secondary'>
        {duration}
      </span>
    </button>
  )
}
