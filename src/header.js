import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    paddding-left: 2rem;
    > span {
        font-size: 2rem;
        color: white;
        background: #000;
    }
`

class Header extends React.Component {
    
    render() {
        return <HeaderDiv>
            <span>
                {this.props.headerMessage}
            </span>
        </HeaderDiv>
    }  
}

export default Header;
