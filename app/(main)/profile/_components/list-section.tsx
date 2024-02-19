import { useState } from "react";

import ListLinks from "./list-links";
import FavoritesList from "./favorites-list";
import ViewedList from "./viewed-list";
import StoreProvider from "@/providers/store-provider";

const ListSection = () => {
  const [selected, setSelected] = useState<string>("favorites");

  const handleSelectedChange = (newSelected: string) => {
    setSelected(newSelected);
  };

  return (
    <div>
      <ListLinks selected={selected} onSelectedChange={handleSelectedChange} />
      {selected === "favorites" && (
        <StoreProvider>
          <FavoritesList />
        </StoreProvider>
      )}
      {selected === "viewed" && (
        <StoreProvider>
          <ViewedList />
        </StoreProvider>
      )}
    </div>
  );
};

export default ListSection;
