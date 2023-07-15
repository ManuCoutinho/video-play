import { SpinnerGap } from "@phosphor-icons/react"
import Player from 'react-player'

export const Video: React.FC = () => {
  const isLoading = false

  function handlePlayNext(){
    console.log('next')
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
          url={`https://www.youtube.com/watch?v=`}
         />
      )}
    </div>
  )
}