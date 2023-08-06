import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { ModalContainer } from './style';
import { TabsContainer } from "../Tabs/style";
import Tabs from "../Tabs";
const Modal = ({ anime, setIsOpen, page, collectionName, updateCollections  }) => {
  // Load collections from localStorage or set an empty array if not available
  const storedCollections = JSON.parse(localStorage.getItem("collections")) || [];
  const [collections, setCollections] = useState(storedCollections);
  const [newCollectionName, setNewCollectionName] = useState(collectionName);


  const upCollections = (updatedCollections) => {
    setCollections(updatedCollections);
    localStorage.setItem("collections", JSON.stringify(updatedCollections));
  };
  const handleAddToCollection = (collectionName, anime) => {
    console.log(collectionName);
    console.log(anime);
    const updatedCollections = [...collections];
    const collectionIndex = updatedCollections.findIndex(
      (collection) => collection.name === collectionName
    );
    console.log(collectionIndex);
    if (collectionIndex !== -1) {
      // Add anime to an existing collection
      updatedCollections[collectionIndex].anime.push(anime);
    } else {
      // Create a new collection
      updatedCollections.push({
        name: collectionName,
        anime: [anime],
      });
    }
    upCollections(updatedCollections);
    updateCollections(updatedCollections);
    setIsOpen(false);
  };
  const handleEditCollectionName = (newName) => {
    const updatedCollections = collections.map((collection) =>
      collection.name === collectionName ? { ...collection, name: newName } : collection
    );
    setCollections(updatedCollections);
    // Save updated collections to localStorage
    localStorage.setItem("collections", JSON.stringify(updatedCollections));
    updateCollections(updatedCollections);
    setIsOpen(false);
  };

  const handleAddCollection = (newCollectionName) => {
    console.log(newCollectionName);
    console.log(collections);
    if (!collections.some((collection) => collection.name === newCollectionName)) {
      const newCollection = { name: newCollectionName, anime: [] };
      const updatedCollections = [...collections, newCollection];
      setCollections(updatedCollections);
      // Save updated collections to localStorage
      localStorage.setItem("collections", JSON.stringify(updatedCollections));
      updateCollections(updatedCollections);
      setIsOpen(false);
    }
  };

  const handleRemoveCollection = (collectionName) => {
    const updatedCollections = collections.filter(
      (collection) => collection.name !== collectionName
    );
    setCollections(updatedCollections);
    // Save updated collections to localStorage
    localStorage.setItem("collections", JSON.stringify(updatedCollections));
    updateCollections(updatedCollections);
    setIsOpen(false);
  };
  
  return (
    <ModalContainer>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            {anime && (<h2 className="heading">Add to Collection</h2>)}
            {page === "addCollection" && (<h2 className="heading">Add Collection</h2>)}
            {page === "editCollection" && (<h2 className="heading">Edit Collection</h2>)}
            {page === "deleteCollection" && (<h2 className="heading">Delete Collection</h2>)}
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            {anime && (<Tabs anime={anime}
              collections={collections.map((collection) => collection.name)}
              onAddToCollection={handleAddToCollection}></Tabs>)}
            {page === "addCollection" && (
              <TabsContainer>
               <p className="label-existing">Create a new collection:</p>                        
                        <input
                          type="text"
                          value={newCollectionName || ""}
                          onChange={(e) => setNewCollectionName(e.target.value)}
                          className="form"
                        />
        <button  className='btn' onClick={() => handleAddCollection(newCollectionName)}>
          Add Collection
        </button></TabsContainer>
            )}
            {page === "editCollection" && (
              <TabsContainer>
               <p className="label-existing">Edit collection:</p>                        
                        <input
                          type="text"
                          value={newCollectionName}
                          onChange={(e) => setNewCollectionName(e.target.value)}
                          className="form"
                        />
        <button  className='btn' onClick={() => handleEditCollectionName(newCollectionName)}>
          Edit Collection
        </button>
        </TabsContainer>
            )}
            {page === "deleteCollection" && (
              <TabsContainer>
               <p className="label-existing">Do you want to delete {collectionName} collection</p>                        
               <button className='button-del' onClick={() => handleRemoveCollection(collectionName)}>
          Delete Collection
        </button>
        </TabsContainer>
            )}
            
            
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;