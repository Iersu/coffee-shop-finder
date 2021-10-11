import Main from "../components/coffeshop";

export const CoffeeShopListItem = ({
  key,
  photoUrl,
  name,
  price,
  index,
  location,
  distance,
}) => {
  return (
    <Main.Item key={key}>
      <Main.Pane>
        <Main.Image src={photoUrl} alt={name} />
      </Main.Pane>
      <Main.Pane>
        <Main.Name>
          {index}.{name}
        </Main.Name>
        <Main.Price price={price}>
          <span>$</span>
          <span>$</span>
          <span>$</span>
          <span>$</span>
        </Main.Price>
        <Main.Location>{location}</Main.Location>
        <Main.Name>{distance} m</Main.Name>
      </Main.Pane>
    </Main.Item>
  );
};
