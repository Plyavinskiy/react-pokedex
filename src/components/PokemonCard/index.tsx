interface IPokemon {
  name: string;
  index: number;
  typeOne: string;
  typeTwo: string;
  sprite: string;
}

const PokemonCard: React.FC<IPokemon> = ({
  name,
  index,
  typeOne,
  typeTwo,
  sprite,
}: IPokemon) => {
  return <div>Pokemon Card</div>;
};

export default PokemonCard;
