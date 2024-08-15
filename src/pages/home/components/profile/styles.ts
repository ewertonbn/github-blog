import styled from 'styled-components'

import { mixins } from '../../../../styles/mixins'

export const ProfileBox = styled.div`
  background: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  display: grid;
  grid-template-columns: 9.25rem 1fr;
  align-items: center;
  gap: 2rem;
  margin-top: -5rem;
  position: relative;
  z-index: 10;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    h1 {
      ${mixins.fonts.titleL}
      color: ${(props) => props.theme.colors['base-title']};
    }

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${(props) => props.theme.colors.blue};
      text-transform: uppercase;

      span {
        ${mixins.fonts.link}
      }
    }
  }

  footer {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    > div {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: ${(props) => props.theme.colors['base-label']};
      }

      span {
        color: ${(props) => props.theme.colors['base-subtitle']};
      }
    }
  }
`

export const ProfileImage = styled.div`
  width: 9.25rem;
  height: 9.25rem;
  display: flex;
  align-content: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 8px;
  background: ${(props) => props.theme.colors['base-background']};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
