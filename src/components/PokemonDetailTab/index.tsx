interface IProps {
  tabName: string;
  click: (event: React.MouseEvent) => void;
  isActive: boolean;
  index: number;
}

const PokemonDetailTab: React.FC<IProps> = ({
  tabName,
  click,
  isActive,
  index,
}: IProps) => {
  return <div>Pokemon Detail Tab</div>;
};

export default PokemonDetailTab;
