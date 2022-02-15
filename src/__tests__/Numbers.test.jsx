import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import Numbers from './../components/Numbers'

describe('Numbers container', () => {
  test('should render 12 buttons',  () => {
    render(<Numbers />, {wrapper: RecoilRoot})

    const buttons = screen.getAllByRole('button')

    expect(buttons.length).toBe(12)
  });
})