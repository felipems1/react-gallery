import * as C from "./styles";

type Props = {
  url: string;
  name: string;
  handleDeleta: (name: string) => void;
};

const PhotoItem = ({ url, name, handleDeleta }: Props) => {
  return (
    <C.Container>
      <C.Photo src={url} alt={name} />
      <C.Button onClick={() => handleDeleta(name)}>Excluir</C.Button>
    </C.Container>
  );
};
export default PhotoItem;
