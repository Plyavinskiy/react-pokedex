interface IProps {
  children: React.ReactNode;
  click?: () => void;
}

const PokemonCardWrapper: React.FC<IProps> = ({ children, click }: IProps) => {
  return <div>Pokemon Card Wrapper</div>;
};

export default PokemonCardWrapper;
