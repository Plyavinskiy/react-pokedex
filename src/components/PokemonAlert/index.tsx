interface IProps {
  message: string;
}

const PokemonAlert: React.FC<IProps> = ({ message }: IProps) => {
  return <div>Pokemon Alert</div>;
};

export default PokemonAlert;
