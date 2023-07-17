import * as Collapsible from '@radix-ui/react-collapsible'
import { CaretDown } from '@phosphor-icons/react'
import { useStore } from '@/store'
import { Lesson } from '../Lesson'
import { ModuleProps } from './types'

export const Module: React.FC<ModuleProps> = ({
  amountOfLesson,
  moduleIndex,
  title
}) => {
  const { currentModuleIndex, currentLessonIndex, course, play } = useStore()
  const lessons = course?.modules[moduleIndex].lessons

  return (
    <Collapsible.Root className='group' defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className='flex w-full items-center gap-4  bg-night p-4'>
        <div className='flex h-10 w-10 rounded-full justify-center items-center  bg-neutral-800 text-sm text-semibold'>
          {moduleIndex + 1}
        </div>
        <div className='flex flex-col gap-1 text-left'>
          <strong>{title}</strong>
          <span className='text-xs text-info flex justify-between'>
            {amountOfLesson} aulas
          </span>
        </div>
        <CaretDown
          weight='light'
          className='h-5 w-5 ml-auto text-info group-data-[state=open]:rotate-180 transition-transform delay-200 ease-linear hover:text-info/30 transition-color'
        />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className='relative'>
          {lessons?.map((lesson, lessonIndex) => {
            const isCurrent =
              currentModuleIndex === moduleIndex &&
              currentLessonIndex === lessonIndex
            return (
              <Lesson
                {...lesson}
                onPlay={() => play([moduleIndex, lessonIndex])}
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
