import { useEffect, useState } from "react";

export function useFetch(baseUrl: string, initalType: string) {
  const [data, setData] = useState(null);

  const fetchUrl = (type: string) => {
    fetch(baseUrl + "/" + type)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetchUrl(initalType);
  }, []);

  return {
    data,
    fetchUrl,
  };
}
