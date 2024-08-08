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
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      count is {count}
    </button>
  );
};

export default CountButton;
