import React from "react"
import {render, screen, fireEvent} from "@testing-library/react"
import ThemeToggler from './../components/ThemeToggler'
import {RecoilRoot} from "recoil";

describe('ThemeToggler', () => {
  test('render', () => {
    render(<ThemeToggler />, {wrapper: RecoilRoot})

    const buttonTheme = screen.getByLabelText('theme-toggler')

    expect(buttonTheme).toBeInTheDocument()
    expect(buttonTheme).toHaveClass('theme-dark')
  })
  test('click toggle button', () => {
    render(<ThemeToggler />, {wrapper: RecoilRoot})

    const buttonTheme = screen.getByLabelText('theme-toggler')
    fireEvent.click(buttonTheme)

    expect(buttonTheme).toHaveClass('theme-light')
  })
})