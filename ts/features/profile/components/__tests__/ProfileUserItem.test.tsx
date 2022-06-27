import React from "react";
import { render } from "@testing-library/react-native";
import ProfileUserItem from "../ProfileUserItem";
import NameSurnameIcon from "../../../../img/assistance/nameSurname.svg";

type Props = {
  title: string;
  subtitle: string;
  icon: React.ReactElement;
};

const props: Props = {
  title: "title",
  subtitle: "subtitle",
  icon: <NameSurnameIcon width={24} height={24} />
};

describe("Test ProfileUserItem", () => {
  it("should render correctly", () => {
    const component = renderComponent({ ...props });
    expect(component).toBeTruthy();
  });
  it("should match the snapshot", () => {
    const component = renderComponent({ ...props });
    expect(component).toMatchSnapshot();
  });
  it("should show correctly the title", () => {
    const component = renderComponent({ ...props });
    expect(component.getByTestId("ProfileUserItemTitleTestID")).toBeDefined();
    expect(component.getAllByText(props.title)).toBeDefined();
  });
  it("should show correctly the subtitle", () => {
    const component = renderComponent({ ...props });
    expect(
      component.getByTestId("ProfileUserItemSubTitleTestID")
    ).toBeDefined();
    expect(component.getAllByText(props.subtitle)).toBeDefined();
  });
  it("should show correctly the icon", () => {
    const component = renderComponent({ ...props });
    expect(component.getByTestId("ProfileUserItemIconTestID")).toBeTruthy();
  });
});

const renderComponent = ({ title, subtitle, icon }: Props) =>
  render(<ProfileUserItem title={title} subtitle={subtitle} icon={icon} />);
