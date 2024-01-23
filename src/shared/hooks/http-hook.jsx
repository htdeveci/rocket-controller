import { useState, useCallback } from "react";
import { BACKEND_API_MAIN_URL } from "../utils/global-constants";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  // const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json", "X-API-Key": "API_KEY_1" }
    ) => {
      setIsLoading(true);

      /* const httpAbortController = new AbortController();
      activeHttpRequests.current.push(httpAbortController); */

      try {
        const response = await fetch(BACKEND_API_MAIN_URL + url, {
          method,
          body,
          headers,
          // signal: httpAbortController.signal,
        });

        const responseData = await response.json();

        /*  activeHttpRequests.current = activeHttpRequests.current.filter(
          (requestController) => requestController !== httpAbortController
        ); */

        if (!response.ok) throw new Error(responseData.message);

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
        throw err;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  /* useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortController) =>
        abortController.abort()
      );
    };
  }, []); */

  return { isLoading, error, sendRequest, clearError };
};
