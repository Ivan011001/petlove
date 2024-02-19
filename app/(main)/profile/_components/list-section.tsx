import { useState } from "react";

import ListLinks from "./list-links";
import FavoritesList from "./favorites-list";
import ViewedList from "./viewed-list";

const ListSection = () => {
  const [selected, setSelected] = useState<string>("favorites");

  const handleSelectedChange = (newSelected: string) => {
    setSelected(newSelected);
  };

  return (
    <div>
      <ListLinks selected={selected} onSelectedChange={handleSelectedChange} />
      {selected === "favorites" && <FavoritesList />}
      {selected === "viewed" && <ViewedList />}
    </div>
  );
};

export default ListSection;
