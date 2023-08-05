import styled from "@emotion/styled"

export const AnimeDetailContainer = styled.div`
color: #00ADB5;
.title-container {
  width:88%;
  margin-left:auto;
  margin-right:auto;
  display: flex;
}
img {
  width:30%;
  height: max-content;
}
.title-detail{
  padding-left: 24px;
}
.title-detail h2{
  margin-top: 0px;
}
.text {
  color: #EEEEEE;
}
.detail-container {
  margin-top: 24px;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
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

.btn:hover {
  box-shadow: none;
  transform: none;
  background: whitesmoke;
}
@media (max-width: 769px) {

}

@media (max-width: 429px) {

}


`