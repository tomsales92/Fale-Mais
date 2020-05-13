import styled from 'styled-components';
import { shade } from 'polished';

export const Menu = styled.header`
  background: #C88104;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 150px;
  }
  ul {
    display: flex;
    list-style: none;
  }
  ul li a {
    color: #fff;
    font-weight: 500;
    text-decoration: none;
    margin-right: 15px;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.3, '#fff')};

    }
  }
`;
