import styled from 'styled-components'

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  margin-top: auto;
  padding: 0 4em;
  width: 100%;
  color: #fff;
  background: #6258e6;

  span {
    font-size: 1.1em;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 120px;
    padding: 1em 4em;
    padding-bottom: env(safe-area-inset-bottom);

    span {
      margin-bottom: 1em;
    }
  }
`

export const SocialNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    font-size: 2em;
    margin-left: 1em;
    transition: ease-in-out 0.1s;

    &:hover {
      color: #e8175d;
      transition: ease-in-out 0.1s;
    }
  }

  @media (max-width: 576px) {
    svg {
      margin: 0 0.5em;
    }
  }
`
