import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { describe, it } from 'vitest'
import { Module } from '.'
import { useStore as store } from '@/store'
import { state } from '@/__mocks__/data/playerState'

const moduleMock = {
  title: 'Iniciando com React',
  moduleIndex: 0,
  amountOfLesson: 2
}
const mockInitialState = store.getState()

describe('<Module/>', () => {
  beforeEach(() => beforeEach(() => store.setState(mockInitialState)))
  it('should render Module correctly ', async () => {
    const { container } = render(<Module {...moduleMock} />)

    act(() => {
      store.setState(state)
    })

    expect(
      screen.getByRole('button', {
        name: /1 iniciando com react 2 aulas/i
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    act(() => {
      fireEvent.click(
        screen.getByRole('button', { name: /CSS Modules 13:45/i })
      )
    })
    expect(container).toMatchSnapshot()
  })
})
