import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-right: 20px;
.title {
    color: #00ADB5;
}

button {
    border:none; 
    background: none;
    margin-left: 20px;
}

.buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    filter: invert(43%) sepia(54%) saturate(4468%) hue-rotate(156deg) brightness(105%) contrast(101%);
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.button {
    width: 45px;
}

@media (max-width: 769px) {
.button {
    width: 30px;
}
  
}

@media (max-width: 429px) {
    .logo {
        width: 125px;
    }
    .button {
    width: 30px;
}
}

@media (max-width: 385px) {


}

`