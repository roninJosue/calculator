import {render, screen} from "@testing-library/react"
import Button from "../components/Button"

test('Button render',() => {
  render(<Button />)

  const button = screen.getByRole('button')

  expect(button).toBeInTheDocument()
})