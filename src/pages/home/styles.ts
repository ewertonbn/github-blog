import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { mixins } from '../../styles/mixins'

export const HomeContainer = styled.main`
  max-width: 864px;
  margin: 0 auto 14.625rem;
`

export const Search = styled.div`
  margin: 4.5rem 0 3rem;

  & > div {
    display: flex;
    align-content: center;
    justify-content: space-between;

    h2 {
      ${mixins.fonts.titleS}
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    span {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme.colors['base-span']};
    }
  }

  form {
    input {
      width: 100%;
      height: 3.125rem;
      border-radius: 6px;
      padding: 0.75rem 1rem;
      border: 1px solid ${(props) => props.theme.colors['base-border']};
      background: ${(props) => props.theme.colors['base-input']};
      color: ${(props) => props.theme.colors['base-text']};

      &::placeholder {
        color: ${(props) => props.theme.colors['base-label']};
      }
    }
  }
`

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const PostItem = styled(Link)`
  background: ${(props) => props.theme.colors['base-post']};
  border-radius: 10px;
  padding: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
  }

  h3 {
    ${mixins.fonts.titleM}
    max-width: 300px;
    color: ${(props) => props.theme.colors['base-title']};
    height: 70px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  span {
    ${mixins.fonts.textS}
    color: ${(props) => props.theme.colors['base-span']};
  }

  p {
    height: 100px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    white-space: normal;
  }
`

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
