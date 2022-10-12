import { useState, useEffect } from "react";

function ImagesList() {
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState(1);

    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=${nextPage}&limit=10`)
            .then((response) => response.json())
            .then((data) => {
                setImages((prevImages) => prevImages.concat(data));
                setLoading(false);
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
        <>
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
        </>
    );
}

export default ImagesList;