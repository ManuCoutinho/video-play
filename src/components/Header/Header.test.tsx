import '@testing-library/jest-dom'
import { describe, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { Header } from '.'
import { state } from '@/__mocks__/data/playerState'
import { useStore as store } from '@/store'

const mockInitialState = store.getState()

describe('<Header/>', () => {
  beforeEach(() => beforeEach(() => store.setState(mockInitialState)))
  it('should render the Header component correctly', () => {
    render(<Header />)
    act(() => {
      store.setState(state)
    })
    expect(
      screen.getByRole('heading', { name: /css modules/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/módulo/i)).toBeInTheDocument()
  })
  it('should match to snapshot', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
