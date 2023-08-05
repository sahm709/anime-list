import styled from "@emotion/styled"

export const TabsContainer = styled.div`
.tabs-center{
    margin-left:auto;
    margin-right:auto;
    justify-content:center;
    display: flex;
    gap: 15px;
    font-size: 18px;
}
.active-tab {
    border-bottom: 2px solid #00ADB5;
    padding-bottom: 4px;
}
.label-existing {
    font-size:18px;
    margin-top: 9px;
}
.form {
    width: -webkit-fill-available;
    width: -moz-available;
    padding: 15px;
    border-radius: 15px;
    outline: none;
    margin-top:8px;
    margin-bottom: 8px;
    border: 1px solid #6F6F6F;
    overflow: hidden;  
    text-overflow:ellipsis;
    white-space: nowrap;
}
.button-container {
    position: absolute;
    bottom: 2px;
    margin-bottom: 10px;
    width: 100%;
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
  ul {
    padding-left: 0;
  }
  
  .li {
    text-align: left; 
    margin-bottom: 10px;
@media (max-width: 769px) {
    .label-existing {
        font-size:12px;
    }
    .tabs-center{
        font-size: 12px;
    }
  }
  
  @media (max-width: 429px) {
  
  }
  
`