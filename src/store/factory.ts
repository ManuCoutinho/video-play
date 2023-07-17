import { useStore as store } from '.'
import { baseUrl } from '@/constants/baseUrl'

export async function loadInitialData() {
  store.setState({ isLoading: true })
  const controller = new AbortController()
  const signal = controller.signal
  try {
    await fetch(`${baseUrl}/courses/1`, { signal })
      .then((res) => res.json())
      .then((data) =>
        store.setState({
          course: data,
          isLoading: false
        })
      )
  } catch (err) {
    console.error(err)
    //handle error
  } finally {
    controller.abort()
  }
}

export function playNextVideo() {
  const { currentLessonIndex, currentModuleIndex, course } = store.getState()
  const nextLessonIndex = currentLessonIndex + 1
  const nextLesson =
    course?.modules[currentModuleIndex].lessons[nextLessonIndex]

  if (nextLesson) {
    store.setState({
      currentLessonIndex: nextLessonIndex
    })
  } else {
    const nextModuleIndex = currentModuleIndex + 1
    const nextModule = course?.modules[nextModuleIndex]
    if (nextModule) {
      store.setState({
        currentModuleIndex: nextModuleIndex,
        currentLessonIndex: 0
      })
    }
  }
}

export function onPlay(payload: [number, number]) {
  const [moduleIndex, lessonIndex] = payload
  store.setState({
    currentLessonIndex: lessonIndex,
    currentModuleIndex: moduleIndex
  })
}
