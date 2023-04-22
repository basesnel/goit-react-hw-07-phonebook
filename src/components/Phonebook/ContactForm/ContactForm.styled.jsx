import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContactFormGetUp = styled(Form)`
  margin-bottom: 20px;

  .contactform__label {
    position: relative;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin: 0 auto 10px;
    padding: 10px 20px;
    border: 1px solid ${props => props.theme.colors.bground};
    border-radius: 4px;
  }

  .contactform__error {
    z-index: 100;
    position: absolute;
    padding: 4px;
    border: 1px solid red;
    border-radius: 4px;
    top: 50px;
    right: 20px;
    background-color: ${props => props.theme.colors.warnaccent};
    color: ${props => props.theme.colors.textaccent};
  }

  .input__error {
    border: 1px solid red;
  }

  .contactform__button {
    cursor: pointer;
    display: block;
    width: 160px;
    margin: 0 auto;
    padding: 4px 8px;
    border: 1px solid ${props => props.theme.colors.bground};
    color: ${props => props.theme.colors.primText};
    background-color: ${props => props.theme.colors.fground};
    border-radius: 4px;
    font-weight: 700;
    transition: background-color ${props => props.theme.animation.func};
    &:hover {
      background-color: ${props => props.theme.colors.interaccent};
      color: ${props => props.theme.colors.textaccent};
    }
  }
`;

export const Input = styled(Field)`
  width: 220px;
  padding: 8px 16px;
  border: 1px solid ${props => props.theme.colors.bground};
  border-radius: 2px;
  color: ${props => props.theme.colors.primText};
`;
