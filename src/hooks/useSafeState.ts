import { useCallback, useState } from "react";
import useIsMounted from "./useIsMounted";

const useSafeState = <T>(initialValue: T) => {
  const [state, setState] = useState(initialValue);

  const isMounted = useIsMounted();

  const updateState = useCallback(
    (newValue: T) => {
      if (isMounted.current) {
        setState(newValue);
      }
    },
    [isMounted]
  );

  return [state, updateState] as const;
};

export default useSafeState;