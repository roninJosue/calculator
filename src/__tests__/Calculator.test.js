import {RecoilRoot} from "recoil";
import React from "react"
import {render, screen} from '@testing-library/react'
import Calculator from "../components/Calculator";

test('Calculator render', async () => {
  render(<Calculator />, {wrapper: RecoilRoot})

  const calculator = await screen.findByLabelText('calculator')
  expect(calculator).toBeInTheDocument()
})
