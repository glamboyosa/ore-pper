import { useEffect, useState } from "react";
type mountedProps = {
  callback?: VoidFunction;
};
const useMounted = (callback?: VoidFunction) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    callback ? callback() : setMounted(true);
  }, [callback]);

  return [mounted, setMounted] as const;
};

export default useMounted;
