import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { AnimeListContainer } from "./style";
import next from "../../assets/next.svg";
import previous from "../../assets/previous.svg";
const PER_PAGE = 10;

export const GET_ANIME_LIST = gql`
  query AnimeList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          medium
        }
      }
    }
  }
`;

const AnimeList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(GET_ANIME_LIST, {
    variables: {
      page: currentPage,
      perPage: PER_PAGE,
    },
  });

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (data?.Page?.pageInfo?.hasNextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  if (loading)
    return (
      <AnimeListContainer>
        <div className="loader-container">
          <div className="lds-dual-ring"></div>
        </div>
      </AnimeListContainer>
    );
  if (error) return <p>Error: {error.message}</p>;

  const animeList = data?.Page?.media || [];
  const pageInfo = data?.Page?.pageInfo;

  return (
    <div>
      <AnimeListContainer>
        <div className="container">
          <div>
            <div className="list">
              <div></div>
              <div className="pagination-container">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  style={{ opacity: "50%", cursor: "default" }}
                  className="arrow-button"
                >
                  <img className="left" src={previous} alt={"left arrow"} />
                </button>
                <span className="pagination-title">Page {currentPage}</span>
                <button
                  onClick={handleNextPage}
                  disabled={!pageInfo?.hasNextPage}
                  style={{ opacity: "50%", cursor: "default" }}
                  className="arrow-button"
                >
                  <img className="left" src={next} alt={"next arrow"} />
                </button>
              </div>
            </div>
            <div className="list">
              {animeList.map((anime) => (
                <Link
                  key={anime.id}
                  to={`/anime/${anime.id}`}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <div>
                    <div className="anime-card">
                      <img
                        className="banner"
                        src={anime.coverImage.medium}
                        alt="banner"
                      ></img>
                      <div className="anime-detail">
                        <p className="anime-title">{anime.title.romaji}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </AnimeListContainer>
    </div>
  );
};

export default AnimeList;
