/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

type Props = {
  className: string;
};

const CountButton = (_props: Props) => {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className="btn btn-outline"
    >
      count is {count}
    </button>
  );
};

export default CountButton;
