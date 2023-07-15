
export const Header: React.FC = () => {
  const {currentModule, currentLesson} = useCurrentLesson()
  const isLoading = useStore(store => store.isLoading)

  if(isLoading) {
    return <h1 className="text-2xl font-semibold text-primary">Carregando...</h1>
  }
  return(
    <div className="flex flex-col gap-1">
      <h1 className="font-bold text-2xl text-info">{currentLesson.title}</h1>
      <span className="text-sm text-info">Módulo "{currentModule?.title}"</span>
    </div>
  )
}