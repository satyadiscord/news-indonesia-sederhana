import { useEffect } from "react";
import axios from "axios";

const ViralApi = ({ setArticles }) => {
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=viral&from=2024-06-11&sortBy=publishedAt&apiKey=ca5cbaa403c24a599ed45aea55cc6e18`
      )
      .then((res) => {
        setArticles(res.data.articles);
        console.log(res);
      })
      .catch((error) => {
        console.error("this error", error);
      });
  }, [setArticles]);

  return null;
};

export default ViralApi;
