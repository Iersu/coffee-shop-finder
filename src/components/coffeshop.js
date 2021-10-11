import React from "react";
import {
  Container,
  Title,
  Select,
  Frame,
  Content,
  Item,
  Image,
  Name,
  Price,
  Open,
  Location,
  Pane,
  Header,
  Holder,
} from "./styles/coffeshop-styles";

export default function Main({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Main.Frame = function MainFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Main.Header = function MainHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Main.Title = function MainTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Main.Name = function MainName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};
Main.Item = function MainItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};
Main.Image = function MainImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};
Main.Price = function MainPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};
Main.Open = function MainOpen({ children, ...restProps }) {
  return <Open {...restProps}>{children}</Open>;
};
Main.Location = function MainLocation({ children, ...restProps }) {
  return <Location {...restProps}>{children}</Location>;
};
Main.Pane = function MainPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Main.Holder = function MainHolder({ children, ...restProps }) {
  return <Holder {...restProps}>{children}</Holder>;
};

Main.Select = function MainSelect({ toggleFilter, setToggleFIlter, options }) {
  return (
    <Select
      name="filter"
      value={toggleFilter}
      onChange={({ target }) => setToggleFIlter(target.value)}
    >
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};

Main.Content = function MainContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};
