import React, { useState } from 'react';
import smallLogo from '../Images/Logo_small.png';
import styled from 'styled-components';

const Topbar = styled.div`
`
const Wrapper = styled.div`

`

const My_map = () => {
    return (
        <Topbar>
            <img src={smallLogo} alt='Description'/>
        </Topbar>
    );
};

export default My_map;