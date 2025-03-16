import { useEffect, useState } from 'react';

export function useFetch<T>(url: string): {
  loading: boolean;
  data: T | null;
  error: Error | null;
} {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setData(null);
    setError(null);
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
