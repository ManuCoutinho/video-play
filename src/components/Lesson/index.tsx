import { PlayCircle, Video } from '@phosphor-icons/react'
import { LessonProps} from './types'

export const Lesson: React.FC<LessonProps> = ({ title, duration, onPlay, isCurrent }) =>{

  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className='flex items-center gap-3 text-sm text-info data-[active=true]:text-emerald-400 enabled:hover:text-emerald-200'
    >
      {isCurrent ? (
        <PlayCircle size={32} weight='light' className='text-primary' />
      ) : (
        <Video size={32} weight='light' className='text-info' />
      )}
      <span>{title}</span>
      <span className='ml-auto font-mono text-xs text-secondary'>
        {duration}
      </span>
    </button>
  )
}