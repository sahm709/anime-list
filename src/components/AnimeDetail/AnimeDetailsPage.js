import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import {AnimeDetailContainer} from './style';
import parse from 'html-react-parser';
import Modal from "../Modal";
import { Link } from "react-router-dom";
import { AnimeListContainer } from "../AnimeList/style";
const GET_ANIME_DETAILS = gql`
  query AnimeDetails($id: Int!) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      format
      averageScore
      description
      episodes
      genres
      status
      coverImage {
        large
        medium
      }
      startDate {
        year
        month
        day
    }
    endDate {
        year
        month
        day
    }   
    }
  }
`;

function AnimeDetailsPage() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, data } = useQuery(GET_ANIME_DETAILS, {
    variables: { id: parseInt(id) },
  });
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    // Fetch collections from localStorage when the component mounts
    const storedCollections = localStorage.getItem("collections");
    if (storedCollections) {
      setCollections(JSON.parse(storedCollections));
    }
  }, []);


  if (loading) return (<AnimeListContainer>
    <div className="loader-container">
      <div className="lds-dual-ring"></div>
    </div>
  </AnimeListContainer>);
  if (error) return <p>Error: {error.message}</p>;

  const anime = data?.Media;
  if (!anime) return <p>Anime not found</p>;
  
  const findAnimeCollections = () => {
    const animeTitle =
      anime.title.english || anime.title.romaji || anime.title.native;
    const matchingCollections = [];

    // Iterate through all collections
    collections.forEach((collection) => {
      // Check if the anime title exists in this collection
      const animeExistsInCollection = collection.anime.some((a) => {
        const title = a.title.english || a.title.romaji || a.title.native;
        return title === animeTitle;
      });

      // If anime exists in this collection, add the collection name to the array
      if (animeExistsInCollection) {
        matchingCollections.push(collection.name);
      }
    });

    return matchingCollections;
  };

  // Get the collection name(s) where the anime is found
  const animeCollections = findAnimeCollections();

  return (
    <div>
      <AnimeDetailContainer>
        <div className="title-container">
        <img src={anime.coverImage.large} alt="Anime Cover"/>
        <div className="title-detail">
          <h2>{anime.title.english || anime.title.romaji || anime.title.native}</h2>
          <p className="text">Average Score: {anime.averageScore}</p>
          <button className='btn' onClick={() => { 
        setIsOpen(true);
        window.scrollTo(0, 0);
      }}>
        Add to Collection
      </button>
        </div>
      </div>
      <div className="detail-container">
        <div>
          <h3>Status</h3>
          <p className="text">Status: {anime.status}</p>
          <p className="text">Start Date: {anime.startDate.day}/{anime.startDate.month}/{anime.startDate.year}   </p>
          <p className="text">End Date: {anime.endDate.day}/{anime.endDate.month}/{anime.endDate.year} </p> 
        </div>
        <div>
          <h3>Genres</h3>
          <p className="text">{anime.genres.join(", ")}</p>
        </div>
        <div>
        <h3>Description</h3>
          <p className="text">{parse(anime.description)}</p>
        </div>
        <div>
        {animeCollections.length > 0 && (<h3>Collected At</h3>)}
        <ul>
        {animeCollections.length > 0 && animeCollections.map((collection, index) => (
        <Link className="text" to={`/collections/${encodeURIComponent(collection)}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <li  style={{ color: '#EEEEEE'}}>{collection}</li>
        </Link>
      ))}
      </ul>
    
        </div>
      </div>
      
      {isOpen && <Modal setIsOpen={setIsOpen} anime={anime}/>}
    
      </AnimeDetailContainer>
    </div>
  );
}

export default AnimeDetailsPage;
