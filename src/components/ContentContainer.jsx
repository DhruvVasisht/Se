import axios from "axios";
import { useEffect, useState } from "react";

const ContentContainer = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenres, setselectedGenres] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/genres/anime")
      .then((response) => setGenres(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setError(null);
    setLoading(true);

    axios.get("https://api.jikan.moe/v4", {
      params: {
        order_by: "popularity",
        sort: "asc",
        limit: 1,
        min_score: 7.5,
        page,
        unapproved: false,
        ...(selectedGenres.includes("Highrated Anime this year")
          ? { start_date: `${new Date().getFullYear()}-01-01` }
          : selectedGenres.length > 0
          ? { genres: selectedGenres.join(",") }
          : {}),
      },
    })
    .then((response) => setGenres(response.data.data))
    .catch((error) => console.error(error));
  });

  return <>
  
  </>;
};

export default ContentContainer;
