import { useAppSelector } from "@/store"
import { next, useCurrentLesson } from "@/store/slices/player"
import { SpinnerGap } from "@phosphor-icons/react"
import Player from 'react-player'
import { useDispatch } from "react-redux"

export const Video: React.FC = () => {
  const dispatch = useDispatch()
  const { currentLesson } = useCurrentLesson()
  const isLoading = false

  function handlePlayNext(){
    dispatch(next())
  }
  
  return (
    <div className='w-full bg-night aspect-video' aria-controls="player">
      {isLoading ? (
        <div 
          className="flex h-full items-center justify-center" 
          role='status' 
          aria-live='polite' 
          aria-label='loading'>
          <SpinnerGap className="w-6 h-6 animate-spin" />
        </div>
      ):(
        <Player
          id='player'
          width='100%'
          height='100%'
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
         />
      )}
    </div>
  )
}