import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, it } from 'vitest'
import { Video } from '.'
import { state } from '@/__mocks__/data/playerState'
import { useStore as store } from '@/store'
import { act } from 'react-dom/test-utils'

const mockInitialState = store.getState()

describe('<Video/>', () => {
  beforeEach(() => beforeEach(() => store.setState(mockInitialState)))
  it('should render Video before load data ', () => {
    render(<Video />)

    expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument()
    expect(screen.queryByTestId('player')).not.toBeInTheDocument()
  })
  it('should render Video with global data', () => {
    render(<Video />)
    act(() => {
      store.setState(state)
    })
    expect(screen.getByTestId('player')).toBeInTheDocument()
  })
  it('should match to snapshot', () => {
    const { container } = render(<Video />)
    expect(container).toMatchSnapshot()
  })
})
