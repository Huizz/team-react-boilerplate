import styled from 'styled-components';
import { breakpoint, transition } from 'styles/utils';

const buttonPhoneStyle = `
  background: blue;
  width: 300px;
  color: white;
`

const buttonTabletStyle = `
  background: red;
  width: 300px;
  color: white;
`

const buttonActiveState = `
  transform: scale(0.97);
`

export const ButtonContainer = styled.button`
  position: relative;
  display: flex;
  background: green;
  justify-content: center;
  align-items: center;
  height: 42px;
  font-size: 1rem;
  border-radius: 5px;
  transition: 200ms ease;
  cursor: pointer;
  border: none;
  text-decoration: none;
  ${ breakpoint.phone(buttonPhoneStyle) }
  ${ breakpoint.tablet(buttonTabletStyle) }
  ${ transition.active(buttonActiveState) }
`;