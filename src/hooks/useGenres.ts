import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [Genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  


    useEffect(() => {
        const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", {signal: controller.signal})
        .then((response) => {setGenres(response.data.results);
        setLoading(false);})
        .catch((error) => {
            if(error instanceof CanceledError) return;
            setError(error.message)
          setLoading(false);});

        return () => controller.abort()
    }, [] );

    return {Genres, error, isLoading};
}

export default useGenres;