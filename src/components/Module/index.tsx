import * as Collapsible from '@radix-ui/react-collapsible'
import { CaretDown } from '@phosphor-icons/react'
import {ModuleProps} from './types'
import { Lesson } from '../Lesson'

export const Module: React.FC<ModuleProps> = ({ amountOfLesson, moduleIndex, title }) => {
  const lessonMock = {
    title: 'test title',
    duration: '04:33',
    onPlay: () => console.log(''),
    isCurrent: false
  }
  return (
    <Collapsible.Root className='group' defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className='flex w-full items-center gap-3  bg-night p-4'>
        <div className='flex h-10 w-10 rounded-full items-center gap-3 bg-neutral-800 text-xs'>
          {moduleIndex + 1}
        </div>
        <div className='flex flex-col gap-1 text-left'>
          <strong>{title}</strong>
          <span className="text-xs text-info">{amountOfLesson} aulas </span>
          <CaretDown weight='light' className='h-5 w-5 ml-auto text-zinc group-data-[state=open]:rotate-180 transition-transform delay-100 ease-linear'/>
        </div>
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative">
          <Lesson {...lessonMock}/>
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}