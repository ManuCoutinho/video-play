import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { describe, it } from 'vitest'
import {Video} from '.'

describe('<Video/>', () => {
  it('should render Video correctly ', () => {
    render(<Video/>)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
 })