import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  border: 1px solid #ccc;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.3rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    div {
      padding: 0.5rem 1.3rem;
      color: white;
      text-align: center;
      background-color: brown;
      border-radius: 0.3rem;
    }
  }

  img {
    align-self: center;
    width: 60%;
  }
`;

export const Body = styled.div`
  flex: 1 1 auto;
  padding: 15px;
  text-align: center;

  h2 {
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;

export const Footer = styled.footer`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Attack = styled.div`
  margin-right: 0.5rem;
  padding: 0.5rem 1.3rem;
  margin-top: 1rem;
  color: black;
  text-align: center;
  border-radius: 0.3rem;
`;
