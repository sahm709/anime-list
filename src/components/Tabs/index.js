import React, { useState } from "react";
import {TabsContainer} from './style';
const Tabs = ({ anime, collections, onAddToCollection }) => {
    const [currentTab, setCurrentTab] = useState(1);
    const [collectionName, setCollectionName] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const storedCollections = JSON.parse(localStorage.getItem("collections")) || [];

  const [selectedCollections, setSelectedCollections] = useState([]);

  const handleAddToNewCollection = () => {
    if (selectedCollection) {
      onAddToCollection(selectedCollection, anime);
      setErrorMessage("");
    } else if (collectionName.trim() !== "") {
      // Check if collection name is unique and doesn't contain special characters
      if (
        collections.some(
          (collection) =>
            collection.toLowerCase() === collectionName.toLowerCase()
        )
      ) {
        setErrorMessage("Collection name must be unique.");
      } else if (!/^[a-zA-Z0-9 ]+$/.test(collectionName)) {
        setErrorMessage("Collection name can only contain letters, numbers, and spaces.");
      } else {
        onAddToCollection(collectionName.trim(), anime);
        setErrorMessage("");
      }
    } else {
      setErrorMessage("Please select an existing collection or enter a collection name.");
    }
    setCollectionName("");
    setSelectedCollection("");
  };

    const tabs = [
        {
            id: 1,
            tabTitle: 'Existing'
        },
        {
            id: 2,
            tabTitle: 'New'
        }
    ]

    const handleChangeTab = (id) => {
        setCurrentTab(id);
    }

    const toggleCollectionSelection = (collectionName) => {
      setSelectedCollections((prevSelected) => {
        if (prevSelected.includes(collectionName)) {
          return prevSelected.filter((name) => name !== collectionName);
        } else {
          return [...prevSelected, collectionName];
        }
      });
    };
  
    const handleAddToCollections = () => {
      if (selectedCollections) {
        const addToCollectionsPromises = selectedCollections.map((col) => {
          return onAddToCollection(col, anime);
        });
    
        Promise.all(addToCollectionsPromises)
          .then(() => {
            setErrorMessage("");
          })
          .catch((error) => {
            // Handle error if any of the promises in Promise.all rejects
            console.error("Error adding anime to collections:", error);
          });
      }
      console.log("Adding anime to collections: ", selectedCollections);
    };
    
    return (
        <TabsContainer>
        <div className="modal-container">
            <div className="tabs-center">
                {tabs.map((tab, i) => (
                    <p
                        key={i}
                        id={tab.id}
                        disabled={currentTab === `${tabs.id}`}
                        onClick={() => handleChangeTab(tab.id)}
                        className={currentTab === tab.id ? "active-tab" : ""}
                    >
                        {tab.tabTitle}
                    </p>
                ))}
            </div>
            <div>
                <div className="content">
                    {currentTab === 1 && (
                        <div>
                        <p className="label-existing">Select existing collection:</p>                        
                        {/* <select className="form" value={selectedCollection} onChange={handleCollectionChange}>
                          <option value="">-- Select Collection --</option>
                          {collections.map((collection) => (
                            <option key={collection} value={collection} >
                              {collection}
                            </option>
                          ))}
                        </select> */}
                        <ul>
                        {storedCollections.map((collection) => (
                          <div>
              <li key={collection.name}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCollections.includes(collection.name)}
                    onChange={() => toggleCollectionSelection(collection.name)}
                  />
                  {collection.name}
                </label>
              </li>
              <div className="button-container">
                        <button onClick={handleAddToCollections} className='btn'>Add to Collection</button>
                    </div>
              </div>
            ))}
                        </ul>
                      </div>
                    )}
                    {currentTab === 2 && (
                        <div>
                        <p className="label-existing">Create a new collection:</p>                        
                        <input
                          type="text"
                          value={collectionName}
                          onChange={(e) => setCollectionName(e.target.value)}
                          className="form"
                        />
                        <div className="button-container">
                        <button onClick={handleAddToNewCollection} className='btn'>Add to Collection</button>
                    </div>
                      </div>
                    )}
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

                </div>
            </div>
        </div>
        </TabsContainer>
    )
}

export default Tabs;