import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 18.5rem;
  padding: 4rem 1.5rem 8.375rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .cover {
    position: absolute;
    inset: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .logo {
    position: relative;
    z-index: 10;
  }
`
