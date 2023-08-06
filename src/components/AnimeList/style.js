import styled from "@emotion/styled";

export const AnimeListContainer = styled.div`
  margin-top: 30px;
  word-break: break-word;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  .pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  .arrow-button {
    background: none !important;
    border: none;
    padding: 0 !important;
    font-size: 1rem;
    filter: invert(43%) sepia(54%) saturate(4468%) hue-rotate(156deg)
      brightness(105%) contrast(101%);
  }
  .pagination-title {
    color: #00adb5;
  }

  .arrow-button:hover {
    cursor: pointer;
  }

  .left {
    margin-right: 0.5rem;
    width: 20px;
    height: 20px;
  }

  .right {
    margin-left: 0.5rem;
  }

  .anime-card {
    margin: 8px;
    padding: 16px;
    cursor: pointer;
    background-color: #393e46;
    box-shadow: 2px 3px #393e46;
    border-radius: 6px;
    display: flex;
  }

  .banner {
    width: 100px;
    height: 144px;
  }
  .anime-title {
    font-size: 24px;
    margin: 0;
    transition: color 0.3s;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #00adb5;
  }
  .anime-detail {
    margin-left: 24px;
    width: -webkit-fill-available;
    width: -moz-available;
    position: relative;
  }

  font-weight: bold;
  .card-container {
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 3px #393e46;
    border-radius: 6px;
    padding-bottom: 10px;
    width: 10rem;
    height: 12rem;
    background-color: #00adb5;
  }

  .card-container:hover {
    background-color: lightgray;
  }

  .img-container {
    width: 100px; /* Set the desired width for the image container */
    height: 100px; /* Set the desired height for the image container */
    overflow: hidden; /* Hide any overflow of the image within the container */
  }

  .img {
    width: 100%; /* Make the image fill the container width */
    height: 100%; /* Make the image fill the container height */
    object-fit: contain; /* Scale the image while preserving aspect ratio to fit within the container */
  }

  .collection-name {
    color: #00adb5;
    padding-left: 30px;
    font-size: 48px;
  }

  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loader-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  @media (max-width: 769px) {
    .list {
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 10px;
    }
    .collection-name {
      color: #00adb5;
      padding-left: 15px;
      font-size: 24px;
    }
    .anime-title {
      font-size: 18px;
      margin: 0;
      transition: color 0.3s;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: #00adb5;
    }
  }

  @media (max-width: 429px) {
    .list {
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 10px;
    }
    .card-container {
      width: 8rem;
      height: 10rem;
    }
  }
`;
