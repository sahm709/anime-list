  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { CollectionListContainer } from './style';
  import Modal from "../Modal";
  import trash from '../../assets/trash.svg';
  import edit from '../../assets/edit.png';
  import placeholder from '../../assets/placeholder.png';
  const CollectionList = () => {
    const [collections, setCollections] = useState([]);
    const [editCollectionName, setEditCollectionName] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    useEffect(() => {
        // Fetch collections from localStorage when the custom event is triggered
        const storedCollections = JSON.parse(localStorage.getItem("collections")) || [];
        setCollections(storedCollections);
    }, []);

    const handleRemoveCollection = (collectionName) => {
      setIsDelete(true);
      setEditCollectionName(collectionName);
    };

    const handleEditCollectionName = (collectionName) => {
      setIsEdit(true);
      setEditCollectionName(collectionName);
    };

    const handleAddCollection = () => {
      setIsOpen(true);
      window.scrollTo(0, 0);
    };

    const updateCollectionsCallback = (updatedCollections) => {
      setCollections(updatedCollections);
    };

    return (
      <CollectionListContainer>
          <div className="container">
        <h1 className="title">Collection List</h1>
        <button className='btn' onClick={() => handleAddCollection()}>Add Collection</button>
        </div>
        <div className="list">
        {collections.map((collection) => (
          <div className="collection-card" key={collection.name}>
              <Link to={`/collections/${encodeURIComponent(collection.name)}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <img className="banner" src={
                  collection.anime.length > 0 
                  ? collection.anime[0].coverImage.large
                  : placeholder
                  } alt="banner"></img>
                  </Link>
                  <Link className="collection-detail" to={`/collections/${encodeURIComponent(collection.name)}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <div className="collection-detail">
                  <p className="collection-name">{collection.name}</p>
              </div>
              </Link>
              <div>
                  <img src={edit} alt="collections" className="arrow-button btn-edit" onClick={() => handleEditCollectionName(collection.name)}/>
                  <div className="pt-btn">
                      <img src={trash} alt="collections" className="arrow-button btn-del" onClick={() => handleRemoveCollection(collection.name)}/>
                  </div>
              </div>
          </div>
        ))}

{isOpen && <Modal setIsOpen={setIsOpen} page="addCollection" updateCollections={updateCollectionsCallback} />} 
      {isEdit && <Modal setIsOpen={setIsEdit} page="editCollection" collectionName={editCollectionName} updateCollections={updateCollectionsCallback}/>}
      {isDelete && <Modal setIsOpen={setIsDelete} page="deleteCollection" collectionName={editCollectionName} updateCollections={updateCollectionsCallback}/>}
      
      
        {/* {isOpen && <Modal setIsOpen={setIsOpen} page="addCollection"/>} 
        {isEdit && <Modal setIsOpen={setIsEdit} page="editCollection" collectionName={editCollectionName}/>}
        {isDelete && <Modal setIsOpen={setIsDelete} page="deleteCollection" collectionName={editCollectionName}/>} */}

        </div>
      </CollectionListContainer>
    );
  };

  export default CollectionList;
