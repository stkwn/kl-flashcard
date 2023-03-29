import styled from "styled-components";

function Header() {
    return ( 
            <Wrapper>
                <img alt="logo" src="../logo.svg"/>
                <h1>FlashCard Word Practice</h1>
            </Wrapper>
     );
}

const Wrapper = styled.header`
  margin:0 auto;
  max-width: 1320px;
  max-height: 8rem;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  
  img {
  max-height: 100%;
  width: auto;
  margin-right:20px;
  }
  h1 {
    color: var( --clr-primary-5);
  }
`
export default Header;
