import { IPokemon } from "@features/types";

const PokemonDetailDescription: React.FC<IPokemon> = ({
  ...props
}: IPokemon) => {
  return <div>Pokemon Detail Description</div>;
};

export default PokemonDetailDescription;
