import React from "react";
import ListCard from "./ListCard";
import Pagination from "@material-ui/lab/Pagination";

const mapListDataToCard = propertiesList => {
  return <ListCard id={propertiesList.id} data={propertiesList} />;
};

const ListView = props => {
  const { propertiesList, page, handleChange, count } = props;
  return (
    <div>
      {propertiesList && propertiesList.map(mapListDataToCard)}
      <Pagination
        count={count}
        variant="outlined"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default ListView;
