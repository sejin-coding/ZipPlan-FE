import React, { useState } from 'react';
import smallLogo from '../Images/Logo_small.png';
import search from '../Images/Search.png';
import alarm from '../Images/Alarm.png';
import styled from 'styled-components';

const Topbar = styled.div`
    margin: 10px;
    display: flex;
    justify-content: space-between;
    #logo {
        width: 30vw;
        height: 5vh;
    }

    #right-side {
        margin-top: 10px;
        margin-right: 10px;
    }

    #search {
        object-fit: cover;
        margin-right: 10px;
        width: 5.7vw;
        height: auto;
    }

    #alarm {
        object-fit: cover;
        width: 4vw;
        height: auto;
    }
`
const Wrapper = styled.div`

`

const My_map = () => {
    return (
        <Topbar>
            <img id="logo" src={smallLogo} alt='Description'/>
            <div id='right-side'>
                <img id ="search"src={search} alt="" />
                <img id='alarm' src={alarm} alt="" />
            </div>
        </Topbar>
    );
};

export default My_map;