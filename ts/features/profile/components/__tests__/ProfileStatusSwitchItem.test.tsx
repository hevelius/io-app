import React from "react";
import * as pot from "italia-ts-commons/lib/pot";
import { render } from "@testing-library/react-native";
import ProfileStatusSwitchItem from "../ProfileStatusSwitchItem";

type Props = {
  title: string;
  value: pot.Pot<boolean, Error>;
};

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate
    })
  };
});

describe("Test ProfileStatusSwitchItem", () => {
  it("should match the snapshot with title and pot.some", () => {
    const props = {
      title: "title",
      value: pot.some(true)
    };
    const component = renderComponent({ ...props });
    expect(component.getByTestId("ProfileSwitchItemTitleTestID")).toBeTruthy();
    expect(component.getAllByText("title")).toBeTruthy();
    expect(component.getByTestId("ProfileRemoteSwitchTestID")).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
  it("should match the snapshot with title and pot.someLoading", () => {
    const props = {
      title: "title",
      value: pot.someLoading(true)
    };
    const component = renderComponent({ ...props });
    expect(component.getByTestId("ProfileSwitchItemTitleTestID")).toBeTruthy();
    expect(component.getAllByText("title")).toBeTruthy();
    expect(component.getByTestId("ProfileRemoteSwitchTestID")).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});

const renderComponent = ({ title, value }: Props) =>
  render(<ProfileStatusSwitchItem title={title} value={value} />);
