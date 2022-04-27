import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const useIsMounted = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]);

  if (!loaded) {
    return null;
  }
};

export default useIsMounted;
