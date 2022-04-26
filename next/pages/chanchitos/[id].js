import { useRouter } from "next/router";
import { useEffect, useState } from "react/cjs/react.production.min";

const ChanchitoDinamico = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]);

  const router = useRouter();
  if (!loaded) {
    return null;
  }
  return (
    <div>
      <p>Chanchito dinamico</p>
    </div>
  );
};

export default ChanchitoDinamico;
