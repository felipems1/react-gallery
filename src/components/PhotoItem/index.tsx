import { Photo } from "../../types/Photo";
import * as C from "./styles";

type Props = {
  url: string;
  name: string;
  handleDeleta: (name: string) => void;
};

export const PhotoItem = ({ url, name, handleDeleta }: Props) => {
  return (
    <C.Container>
      <img src={url} alt={name} />
      <button onClick={() => handleDeleta(name)}>Excluir</button>
    </C.Container>
  );
};
