import { useRouter } from "next/router";
import { useState } from "react/cjs/react.production.min";

const ChanchitoDinamico = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  return (
    <div>
      <p>Chanchito dinamico</p>
    </div>
  );
};

export default ChanchitoDinamico;
