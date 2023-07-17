import { create } from 'zustand'
import { PlayerStateType } from '@/models/player'
import * as factory from './factory'

type MethodsPlayer = {
  play: (payload: [number, number]) => void
  next: () => void
  load: () => Promise<void>
}
const initialState: PlayerStateType = {
  course: null,
  currentLessonIndex: 0,
  currentModuleIndex: 0,
  isLoading: true
}

const useStore = create<PlayerStateType & MethodsPlayer>(() => {
  return {
    ...initialState,
    play: (payload: [number, number]) => factory.onPlay(payload),
    next: () => factory.playNextVideo(),
    load: () => factory.loadInitialData()
  }
})

export { useStore }
