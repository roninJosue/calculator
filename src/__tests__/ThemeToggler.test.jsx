import React from "react"
import {render, screen} from "@testing-library/react"
import ThemeToggler from './../components/ThemeToggler'
import {RecoilRoot} from "recoil";

describe('ThemeToggler', () => {
  test('render', () => {
    render(
      <RecoilRoot>
        <ThemeToggler />
      </RecoilRoot>
    )

    const buttonTheme = screen.getByRole('button', {
      name: /light/i
    })

    expect(buttonTheme).toBeInTheDocument()
  })
})