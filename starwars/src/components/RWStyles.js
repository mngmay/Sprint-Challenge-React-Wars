import styled from "styled-components";

//App Styles

export const RWApp = styled.div`
  text-align: center;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RWHeader = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  font-size: 4rem;
`;

export const RWSlogan = styled.h3`
  margin: -10px 0 20px 0;
  background-color: rgba(211, 204, 187, 0.5);
  width: 30%;
  border-bottom: 2px solid #c2693f;
  border-top: 1px solid #c2693f;
`;

//Button Styles

export const ButtonsDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  width: 30%;
`;

export const RWButton = styled.button`
  background-color: transparent;
  outline: none;

  ${props =>
    props.type === "prev"
      ? `width: 0;
height: 0;
border-top: 10px solid transparent;
border-right: 20px solid #641d0b;
border-left: transparent;
border-bottom: 10px solid transparent;`
      : null}

  ${props =>
    props.type === "next"
      ? `width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 20px solid #641d0b;
    border-right: transparent;
    border-bottom: 10px solid transparent;`
      : null}
`;

//Grid Styles

export const RWGrid = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-around;
  width: 90%;
`;

//Card Styles

export const RWCard = styled.div`
  height: 40%;
  width: 25%;
  border: 2px solid #c2693f;
  margin: 10px;
  padding: 10px;
  background-color: rgba(211, 204, 187, 0.65);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RWStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.1rem;
`;
