import styled from 'styled-components';

export const PhonebookSection = styled.section`
  position: relative;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 1px 0px 4px rgb(0 0 0 / 12%), -1px 0px 4px rgb(0 0 0 / 14%),
    0px 4px 4px rgb(0 0 0 / 20%);
  background-color: ${props => props.theme.colors.fground};
  color: ${props => props.theme.colors.primText};

  @media screen and (min-width: 480px) {
    width: 400px;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
  }
  @media screen and (min-width: 1280px) {
    width: 600px;
  }

  .title {
    font-size: 32px;
    letter-spacing: 1.75;
    margin-bottom: 16px;
  }
`;
