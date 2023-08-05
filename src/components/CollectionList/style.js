import styled from "@emotion/styled"

export const CollectionListContainer = styled.div`
margin-top: 30px;
word-break: break-word;
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
}
.btn {
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: #2c3e50;
  background: #00ADB5;
  transition: all 0.25s ease;
}
.title {
  color: #00ADB5;
}
.list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}
.collection-card{
  margin:8px;
  padding:16px;
  cursor:pointer;
  background-color: #393E46;
  box-shadow: 2px 3px #393E46;
  border-radius: 6px;
  display: flex;
  gap: 10px;
}
img{
  width:100px;
  height:fit-content;
}
.collection-name{
  font-size:24px;
  margin:0;
  transition: color 0.3s;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #00ADB5
}
.collection-detail{
  margin-left:24px;
  width: 30%;
  flex-grow: 2;
}
.arrow-button {
  background: none !important;
  border: none;
  padding: 0 !important;
  font-size: 1rem;
  width: 40px;
}
.btn-edit {
  filter: invert(41%) sepia(91%) saturate(1245%) hue-rotate(177deg) brightness(94%) contrast(111%);
}
.btn-del {
  filter: invert(20%) sepia(81%) saturate(6756%) hue-rotate(356deg) brightness(102%) contrast(122%);
}
.pt-btn{
  padding-top: 10px;
}
@media (max-width: 769px) {
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 0px;
    margin-right: 0px;
}
.list {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
.collection-detail{
  margin-left:8px;
  width: 30%;
  flex-grow: 2;
}
}

@media (max-width: 769px) {
  .arrow-button {
    background: none !important;
    border: none;
    padding: 0 !important;
    font-size: 1rem;
    width: 25px;
  }
  .collection-name{
    font-size:18px;
    margin:0;
    transition: color 0.3s;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #00ADB5
  }
}


`