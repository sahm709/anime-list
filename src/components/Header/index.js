import React from 'react';
import { HeaderContainer } from './style'
import { Link } from 'react-router-dom'
import collection from '../../assets/collection.svg'
import { Tooltip } from 'antd';


function Header(props) {
  
    return (
        <HeaderContainer>
            <div className="title">
            <Link to="/"  style={{ textDecoration: 'none', color: '#00ADB5' }}>
                <h1>AnimeList</h1>
            </Link>
            </div>
            <div className="buttons">
                <Tooltip title="My Collections">
                    <Link to="/collection"  style={{ textDecoration: 'none' }}>
                        <img src={collection} alt="collections" className="button" />
                    </Link>
                </Tooltip>
            </div>
        </HeaderContainer>

    )

}

export default Header;