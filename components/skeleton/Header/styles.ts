import styled from 'styled-components'

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  z-index: 100;
  padding: 0 4em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: #fff;

  @media (max-width: 576px) {
    padding: 0 2em;
  }
`

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  span:last-of-type {
    font-size: 18px;
    line-height: 2.2em;
    margin-left: 8px;
  }

  @media (max-width: 576px) {
    span:first-of-type {
      font-size: 2em;
    }

    span:last-of-type {
      display: none;
    }
  }
`

export const NavLinks = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  a {
    margin-left: 4em;
    transition: ease-in-out 0.1s;
  }

  a:hover {
    color: #e8175d;
    transition: ease-in-out 0.1s;
  }

  @media (max-width: 576px) {
    a {
      margin-left: 2em;
    }
  }
`
