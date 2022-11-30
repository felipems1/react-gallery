import styled from "styled-components";

export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
  text-align: center;
`;

export const Emoji = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
`;

export const Loading = styled.div``;

export const NotPhoto = styled.div``;

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const UploadForm = styled.form`
  background-color: #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const File = styled.input``;

export const Submit = styled.input`
  background-color: #756df4;
  border: 0;
  color: #fff;
  padding: 8px 16px;
  font-size: 15px;
  border-radius: 10px;
  margin: 0 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
