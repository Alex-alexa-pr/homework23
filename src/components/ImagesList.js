import { useState, useEffect } from "react";
import axios from "axios";

function ImagesList() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list?page=${nextPage}&limit=10`)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        setImages((prevImages) => prevImages.concat(data));
      });
  }, [nextPage]);

  const handleShowNextPage = () => {
    setLoading(true);
    setNextPage((prevPage) => prevPage + 1);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list">
      <h1>Image gallery</h1>
      <ul>
        {images.map(({ id, author, download_url }) => (
          <div className="imageItem">
            <li key={id}>
              <img src={download_url} alt={author} />
            </li>
          </div>
        ))}
      </ul>
      <button onClick={handleShowNextPage}>show more</button>
    </div>
  );
}

export default ImagesList;
