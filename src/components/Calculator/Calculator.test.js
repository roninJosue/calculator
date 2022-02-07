import React from "react"
import {render, screen} from '@testing-library/react'
import Calculator from "./Calculator"

test('Calculator render', async () => {
  render(<Calculator />)

  const heading = await screen.findByRole('heading')
  expect(heading).toBeInTheDocument()
})
