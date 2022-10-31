import useSafeState from "../../hooks/useSafeState";
import * as S from "./styles";

interface IProps {
  baseStat: number;
}

const ProgressBar: React.FC<IProps> = ({ baseStat }: IProps) => {
  const [style, setStyle] = useSafeState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 0.8,
      width: `${(baseStat / 255) * 100}%`,
    };

    setStyle(newStyle);
  }, 10);

  return (
    <S.ProgressBar>
      <S.Progress style={style}>{baseStat}</S.Progress>
    </S.ProgressBar>
  );
};

export default ProgressBar;
