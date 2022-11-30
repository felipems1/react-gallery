import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
export const Photo = styled.img`
  max-width: 100%;
  height: 150px;
  display: block;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 50%;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #756df4;
  padding: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;
