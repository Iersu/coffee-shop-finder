import Main from "../components/coffeshop";
import { CoffeeShopListItem } from "./coffeShopListItem";

export const CoffeShopPresentational = ({
  toggleFilter,
  setToggleFIlter,
  shops,
}) => {
  const selectOptions = [
    {
      value: "distance",
      label: "Distance",
    },
    {
      value: "price",
      label: "Price",
    },
  ];

  return (
    <>
      <Main.Header>
        <Main.Holder>
          <Main.Image
            src={`${process.env.PUBLIC_URL}/images/coffee.jpg`}
            alt="cup of coffee"
          />
          <Main.Title>Coffee Shop Finder</Main.Title>
        </Main.Holder>
      </Main.Header>
      <Main.Frame>
        <Main.Holder>
          <Main.Name>sortBy</Main.Name>
          <Main.Select
            toggleFilter={toggleFilter}
            setToggleFIlter={setToggleFIlter}
            options={selectOptions}
          />
        </Main.Holder>
        {shops.length > 0 ? (
          <Main.Content>
            {shops.map((item, index) => (
              <CoffeeShopListItem
                key={`${toggleFilter}-${index}`}
                {...item}
                index={index + 1}
              />
            ))}
          </Main.Content>
        ) : (
          <h2>No data to display</h2>
        )}
      </Main.Frame>
    </>
  );
};
