import axios from "axios";
import { IPokemon, ISpecies } from "@features/types";

class createApiCall {
  http = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: {
      "Content-type": "application/json",
    },
  });

  async getMultiplePokemons(
    limit: number,
    offset: number
  ): Promise<{ results: IPokemon[]; count: number }> {
    const { data } = await this.http.get(
      `pokemon?limit=${limit}&&offset=${offset}`
    );

    return { results: data.results, count: data.count };
  }

  async getPokemon(name: string | number): Promise<IPokemon> {
    const { data } = await this.http.get(`pokemon/${name}`);

    return data;
  }

  async getPokemonSpecies(name: string | number): Promise<ISpecies> {
    const { data } = await this.http.get(`pokemon-species/${name}`);

    return data;
  }
}

export const apiClient = new createApiCall();
