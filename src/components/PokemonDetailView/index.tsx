interface IPokemon {
  name: string;
  index: number;
  type: string;
  sprite: string;
}

const PokemonDetailView: React.FC<IPokemon> = ({
  name,
  index,
  type,
  sprite,
}: IPokemon) => {
  return <div>Pokemon Detail View</div>;
};

export default PokemonDetailView;
