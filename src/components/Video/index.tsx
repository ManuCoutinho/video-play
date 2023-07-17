import Player from 'react-player'
import { useAppDispatch, useAppSelector } from '@/store'
import { SpinnerGap } from '@phosphor-icons/react'
import { next } from '@/store/slices/player'
import { useCurrentLesson } from '@/hooks/useCurrentLesson'

export const Video: React.FC = () => {
  const dispatch = useAppDispatch()
  const { currentLesson } = useCurrentLesson()
  const isLoading = useAppSelector((state) => state.player.isLoading)

  function handlePlayNext() {
    dispatch(next())
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
