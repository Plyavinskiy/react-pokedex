import { BrowserRouter, Route, Switch } from "react-router-dom";

import PokemonsListPage from "./pages/PokemonsListPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PokemonsListPage} />
        <Route exact path="/pokemon/:id" component={PokemonDetailPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
