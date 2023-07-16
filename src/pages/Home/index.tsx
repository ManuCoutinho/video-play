import { ChatCircle } from "@phosphor-icons/react"
import { useAppSelector } from "@/store"
import { Header } from "@/components/Header"
import { Module } from "@/components/Module"
import { Video } from "@/components/Video"

export const Home: React.FC = () => {
  const modules = useAppSelector(state => state.player.course.modules)
  
  return (
    <div className='bg-night w-screen h-screen text-info flex justify-center items-center'>
      <div className='flex w-[1100px] flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <Header />
          <button className='flex items-center gap-2 rounded bg-secondary px-3 text-sm font-medium text-info hover:bg-amber-600 transition-colors ease-in-out delay-200'>
            <ChatCircle size={32} weight="light" />
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-forest bg-neutral-800 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute inset-0 border-l divide-y-2 divide zinc-800 bg-zinc-900 overflow-y-auto">
            <Module />
          </aside>
        </main>
      </div>
    </div>
  )
}
