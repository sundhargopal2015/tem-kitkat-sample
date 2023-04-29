import { useEffect, useState } from "react";
import "../public/assets/css/List.css";

const List = () => {
  const [albums, setAlbums] = useState([]);
  
  useEffect(function () {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((error) => console.log("error while getting albums data"));
  }, []);

  return (
    <div className="list-container">
      {albums.map((item) => (
        <div key={item.albumId} className="items">
          <div className="item-image">
            <img src={item.thumbnailUrl} alt={item.title}/>
          </div>
          <div className="item-details">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default List;
