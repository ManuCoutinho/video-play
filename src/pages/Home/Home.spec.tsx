import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Home } from '.'
import { state } from '@/__mocks__/data/playerState'
import { useStore as store } from '@/store'

const mockInitialState = store.getState()
describe('<Home/>', () => {
  beforeEach(() => beforeEach(() => store.setState(mockInitialState)))
  it('should render Home page correctly', () => {
    render(<Home />)
    act(() => {
      store.setState(state)
    })

    expect(
      screen.getByRole('heading', { name: /css modules/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /deixar feedback/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
