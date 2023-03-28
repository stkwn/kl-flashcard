import styled from "styled-components";

function Header() {
    return ( 
            <Wrapper>
                <img alt="logo" src="../logo.svg"/>
            </Wrapper>
     );
}

const Wrapper = styled.header`
  margin:0 auto;
  max-width: 1320px;
  max-height: 8rem;
  display: flex; 
  justify-content: space-between;
  padding: 1rem 2rem;
  
  img {
  max-height: 100%;
  width: auto;
  margin-right:20px;
  }
`
export default Header;