import { useEffect } from 'react'
import { ChatCircle } from '@phosphor-icons/react'
import { useStore } from '@/store'
import { Header } from '@/components/Header'
import { Module } from '@/components/Module'
import { Video } from '@/components/Video'

export const Home: React.FC = () => {
  const { course, load } = useStore()

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load])

  return (
    <div className='bg-night w-screen h-screen text-info flex justify-center items-center'>
      <div className='flex w-[1100px] flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <Header />
          <button className='flex items-center gap-2 rounded-md bg-secondary px-3 py-2 text-sm font-medium text-neutral-50 hover:bg-amber-400 transition-colors ease-in-out delay-200'>
            <ChatCircle className='text-2xl' weight='light' />
            Deixar feedback
          </button>
        </div>
        <main className='relative flex overflow-hidden rounded-lg border border-forest bg-night shadow-md pr-80'>
          <div className='flex-1'>
            <Video />
          </div>
          <aside className='w-80 absolute top-0 right-0 bottom-0 border-l-zinc-800 divide-y-2 divide-zinc-800 bg-forest overflow-y-auto'>
            {course?.modules.map((module, index) => (
              <Module
                key={`m:${module.id}-key`}
                moduleIndex={index}
                title={module.title}
                amountOfLesson={module.lessons.length}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  )
}
