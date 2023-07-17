import Player from 'react-player'
import { SpinnerGap } from '@phosphor-icons/react'
import { useCurrentLesson } from '@/hooks/useCurrentLesson'
import { useStore } from '@/store'

export const Video: React.FC = () => {
  const { currentLesson } = useCurrentLesson()
  const { isLoading, next } = useStore()

  function handlePlayNext() {
    next()
  }

  return (
    <div className='w-full bg-night aspect-video' aria-controls='player'>
      {isLoading ? (
        <div
          className='flex h-full items-center justify-center'
          role='status'
          aria-live='polite'
          aria-label='loading'
        >
          <SpinnerGap className='w-6 h-6 animate-spin' />
        </div>
      ) : (
        <Player
          data-testid='player'
          id='player'
          width='100%'
          height='100%'
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )
}
