import React, { Fragment, useState } from "react";

import { useSpring } from "react-spring";
import { StyledButton } from "./styles";

interface IProps {
  children: React.ReactNode;
  click?: () => void;
}

const PokemonCardWrapper: React.FC<IProps> = ({ children, click }: IProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const onMountEffect = useSpring({
    from: { y: 25 },
    to: { y: isHovering ? -20 : 0 },
    config: { duration: 200 },
  });

  return (
    <Fragment>
      <StyledButton
        onClick={click}
        style={onMountEffect}
        onMouseEnter={() => setIsHovering(!isHovering)}
        onMouseLeave={() => setIsHovering(!isHovering)}
      >
        {children}
      </StyledButton>
    </Fragment>
  );
};

export default PokemonCardWrapper;
