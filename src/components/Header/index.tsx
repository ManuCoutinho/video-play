import { useEffect } from 'react'
import { useCurrentLesson } from '@/hooks/useCurrentLesson'
import { useStore } from '@/store'

export const Header: React.FC = () => {
  const { currentLesson, currentModule } = useCurrentLesson()
  const { isLoading } = useStore()
  useEffect(() => {
    document.title = `Video Play - Assistindo: ${currentLesson?.title}`
  }, [currentLesson])

  if (isLoading) {
    return (
      <h1 className='text-2xl font-semibold text-secondary'>Carregando...</h1>
    )
  }
  return (
    <div className='flex flex-col gap-1'>
      <h1 className='font-bold text-2xl text-info'>{currentLesson?.title}</h1>
      <span className='text-sm text-info'>Módulo {currentModule?.title}</span>
    </div>
  )
}
