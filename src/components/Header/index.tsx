import { useHistory } from "react-router";

import PuredexLogo from "@assets/puredex-logo.png";
import * as S from "./styles";

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <S.Wrapper>
      <div>
        <S.Image
          src={PuredexLogo}
          alt="puredex"
          onClick={() => history.push("/")}
        />
      </div>
    </S.Wrapper>
  );
};

export default Header;
