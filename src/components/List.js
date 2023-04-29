import "../public/assets/css/List.css";

import {iPhones } from "../public/assets/Phones"

const List = () => {
  return (
    <div className="list-container">
      {iPhones.map((item) => (
        <div key={item.id} className="items">
            <div className="item-image" />
            <div className="item-details">{item.name}</div>
            <div className="pricing-details">{item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default List;
