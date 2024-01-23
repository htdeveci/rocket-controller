import { useEffect, useState } from "react";
import { useHttpClient } from "./http-hook";

export const useRocketsData = () => {
  const [rockets, setRockets] = useState(null);

  const { sendRequest, isLoading, error, clearError } = useHttpClient();

  const fetchRocketsData = async () => {
    try {
      clearError();
      const responseData = await sendRequest("rockets");
      const sortedData = responseData.sort((a, b) => {
        if (a.model < b.model) return -1;
        if (a.model > b.model) return 1;
        return 0;
      });
      setRockets(sortedData);
    } catch (err) {
      throw error;
    }
  };

  useEffect(() => {
    fetchRocketsData();
  }, []);

  const launchRocket = async (rocketId) => {
    try {
      const responseData = await sendRequest(
        `rocket/${rocketId}/status/launched`,
        "PUT"
      );
      clearError();
      return responseData;
    } catch (err) {
      throw err;
    }
  };

  const deployRocket = async (rocketId) => {
    try {
      const responseData = await sendRequest(
        `rocket/${rocketId}/status/deployed`,
        "PUT"
      );
      clearError();
      return responseData;
    } catch (err) {
      throw error;
    }
  };

  const cancelLaunch = async (rocketId) => {
    try {
      const responseData = await sendRequest(
        `rocket/${rocketId}/status/launched`,
        "DELETE"
      );
      clearError();
      return responseData;
    } catch (err) {
      throw error;
    }
  };

  return {
    rockets,
    refreshRocketData: fetchRocketsData,
    launchRocket,
    deployRocket,
    cancelLaunch,
    isLoading,
    error,
    clearError,
  };
};
