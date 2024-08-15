import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const PostContainer = styled.main`
  max-width: 864px;
  margin: 0 auto 14.625rem;
`

export const PostHeader = styled.div`
  background: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  margin-top: -5rem;
  position: relative;
  z-index: 10;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    h1 {
      ${mixins.fonts.titleL}
      color: ${(props) => props.theme.colors['base-title']};
    }

    a {
      ${mixins.fonts.link}
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${(props) => props.theme.colors.blue};
      text-transform: uppercase;
    }
  }

  footer {
    margin-top: 8px;
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

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
