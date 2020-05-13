import styled from 'styled-components';
import { shade } from 'polished';
import imgPrincipal from '../../assets/principal.jpg';


export const Container = styled.div`

height: 90vh;
  display: flex;
  align-items: stretch;

  h1 {
    font-family: 'Anton', sans-serif;
    font-size: 2.5em;
    margin: 15px 0 20px 0;
    color: #ffc300;
  }

`;

export const Content = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  color:#ffc300;

  width: 100%;
  max-width: 700px;
  strong {
      margin-bottom: 5px;
      font-weight: 300;
  }

  div.origem{
    display: flex;
    flex-direction: column;
    select {
    background: #312E38;
    color:#ffc300;
    border: 0;
    border-radius: 10px;
    width: 300px;
    height: 40px;
    margin-bottom: 7px;
  }

  }

`;

export const Background = styled.div`
 flex: 1;
  background:rgba(0,0,0, 0.70) url(${imgPrincipal}) no-repeat center;
  background-size: cover;
`;

export const Plano = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 25px;


#title {
  font-family: 'Anton', sans-serif;
  margin-bottom: 20px;
  font-weight: 300;
    font-size: 22px;
  }

select {
    background: #312E38;
    font-size: 16px;
    color:#ffc300;
    border: 0;
    border-radius: 10px;
    width: 300px;
    height: 40px;
    margin-bottom: 7px;
}

input {
  background: #312E38;
    font-size: 18px;
    color:#fff;
    border: 0;
    border-radius: 7px;
    width: 120px;
    height: 40px;
    margin: 8px;

}
  button {
    width: 100px;
    height: 40px;
    border:0;
    border-radius: 10px;
    background: #ffc300;
    color: #312E38;
    font-weight: 400;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#ffc300')};
      color: #F3F5EB;
    }

  }

div.calc-plan {
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }

    strong.valores {
      margin: 10px auto;
      font-size: 20px;
        .com {
          color: green;
        }

        .sem {
          color: red;
        }
    }
}
`;
