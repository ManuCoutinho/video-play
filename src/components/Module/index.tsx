import * as Collapsible from '@radix-ui/react-collapsible'
import { CaretDown } from '@phosphor-icons/react'
import {ModuleProps} from './types'
import { Lesson } from '../Lesson'
import { useAppSelector } from '@/store'
import { useDispatch } from 'react-redux'
import { play } from '@/store/slices/player'

export const Module: React.FC<ModuleProps> = ({ amountOfLesson, moduleIndex, title }) => {
  const { currentModuleIndex, currentLessonIndex } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player
    return { currentModuleIndex, currentLessonIndex }
  })
  const lessons = useAppSelector(state => state.player.course.modules[moduleIndex].lessons)
    const dispatch = useDispatch()


  return (
    <Collapsible.Root className='group' defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className='flex w-full items-center gap-4  bg-night p-4'>
        <div className='flex h-10 w-10 rounded-full justify-center items-center  bg-neutral-800 text-sm text-semibold'>
          {moduleIndex + 1}
        </div>
        <div className='flex flex-col gap-1 text-left'>
          <strong>{title}</strong>
          <span className='text-xs text-info flex justify-between'>
            {amountOfLesson} aulas{' '}
            <CaretDown
              weight='light'
              className='h-5 w-5 ml-auto text-zinc group-data-[state=open]:rotate-180 transition-transform delay-200 ease-linear'
            />
          </span>
        </div>
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className='relative'>
          {lessons.map((lesson, lessonIndex) => {
            const isCurrent = currentModuleIndex === moduleIndex &&
            currentLessonIndex === lessonIndex
            return (
              <Lesson
                {...lesson}
                onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                key={lesson.id}
                isCurrent={isCurrent}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}