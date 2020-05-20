import styled, { keyframes }  from 'styled-components';

export const ProgressContainer = styled.div`
    display: flex; 
    justify-content: center;  
    position: absolute; 
    top: 50%; 
    left: 50%;
    margin: 0 auto;
    width: 25%;
    -webkit-transform:translate(-50%, -50%);
    & :before {
      content: '';
      display:block; 
      padding-top: 100%;
    }
`;
const rotate = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`
const rotateRev = keyframes`
  0% { transform: rotate(0deg);}
  100% { transform: rotate(-360deg);}
`
const pulse = keyframes`
  0% {
    -moz-transform: scale(0.1);
    opacity: 0.2;
  }
  50% {
    -moz-transform: scale(1);
    opacity: 0.8;
  }
  100% {
    -moz-transform: scale(0.1);
    opacity: 0.2;
  }
`;

export const GaiaCircle = styled.div`
  width: 100%;
  box-sizing: inherit;  
  border: 10px inset rgb(133,224,242);
  -moz-animation: ${rotate} 5s infinite linear;
  -webkit-animation: ${rotate} 5s infinite linear;
  animation: ${rotate} 5s infinite linear;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items:  center;
`;

export const MotherCircle = styled.div`
  width: 85%;
  height: 85%;
  border: 6px inset rgb(133,224,242);
  border-radius: 50%;
  -moz-animation: ${rotateRev} 3s infinite linear;
  -webkit-animation: ${rotateRev} 3s infinite linear;
  animation: ${rotateRev} 3s infinite linear;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChildCircle = styled.div`
  width: 85%;
  height: 85%;
  border: 6px inset rgb(133,224,242);
  border-radius: 50%;
  -moz-animation: ${rotate} 5s infinite linear;
  -webkit-animation: ${rotate} 5s infinite linear;
  animation: ${rotate} 5s infinite linear;
  display: flex;
  justify-content: center;
  align-items: center; 
`
export const InnerCircle = styled.div`
  width: 85%;
  height: 85%;
  background-color: rgb(74,124,134);
  border-radius: 50%;
  opacity: 1;
  -moz-animation: ${pulse} 1.5s infinite ease-in;
  -webkit-animation: ${pulse} 1.5s infinite ease-in;
  animation: ${pulse} 1.5s infinite linear;
  display: flex;
  justify-content: center;
  align-items: center;
`