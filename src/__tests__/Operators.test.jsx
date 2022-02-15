import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import Operators from './../components/Operators'

describe('Operators container', () => {
  test('should render 6 buttons',  () => {
    render(<Operators />, {wrapper: RecoilRoot})

    const buttons = screen.getAllByRole('button')

    expect(buttons.length).toBe(6)
  });
})