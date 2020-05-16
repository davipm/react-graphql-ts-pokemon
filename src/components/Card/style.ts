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
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  .item {
    padding: 0.5rem 1.3rem;
    color: white;
    text-align: center;
    background-color: brown;
    border-radius: 0.3rem;
  }
`;

export const Image = styled.img`
  display: block;
  width: 60%;
  height: auto;
  margin: auto;
`;

export const Body = styled.div`
  flex: 1 1 auto;
  padding: 15px;
  text-align: center;

  p {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
`;

export const Name = styled.h2`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const Footer = styled.div`
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Attack = styled.div<{ color: string }>`
  margin-right: 0.5rem;
  padding: 0.5rem 1.3rem;
  margin-top: 1rem;
  color: black;
  text-align: center;
  border-radius: 0.3rem;
  background-color: ${({ color }) => color};
`;
