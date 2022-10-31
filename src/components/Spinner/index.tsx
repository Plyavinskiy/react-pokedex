import * as S from "./styles";

const Spinner = () => {
  return (
    <S.Spinner>
      <S.LdsEllipsis>
        <S.LdsEllipsisChild />
        <S.LdsEllipsisChild />
        <S.LdsEllipsisChild />
        <S.LdsEllipsisChild />
      </S.LdsEllipsis>
    </S.Spinner>
  );
};

export default Spinner;
