import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AnimeListContainer } from "../AnimeList/style";
const CollectionDetailPage = () => {
  const { collectionName } = useParams();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    // Fetch the collection data from localStorage based on the collection name
    const storedCollections = localStorage.getItem("collections");
    if (storedCollections) {
      const collections = JSON.parse(storedCollections);
      const selectedCollection = collections.find(
        (collection) => collection.name === collectionName
      );
      setCollection(selectedCollection);
    }
  }, [collectionName]);

  if (!collection) {
    return <p>Collection not found</p>;
  }

  console.log(collection)

  return (
    <AnimeListContainer>
      <h2 className="collection-name">{collection.name}</h2>
      <div className="container">
      <div className="list">
        {collection.anime.map((anime) => (
          <Link key={anime.id} to={`/anime/${anime.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <div>
              <div className="anime-card">
                  <img className="banner" src={anime.coverImage.medium} alt="banner"></img>
                  <div className="anime-detail">
                      <p className="anime-title">{anime.title.romaji}</p>                          
                  </div>
              </div>
          </div>
          </Link>
        ))}
        </div>
        </div>
    </AnimeListContainer>
  );
};

export default CollectionDetailPage;
