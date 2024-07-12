import { useState, useEffect } from "react";
import newsImage from "../../../../img/news.jpg";
import axios from "axios";

export default function ForDunia() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=dunia&from=2024-06-11&sortBy=publishedAt&apiKey=ca5cbaa403c24a599ed45aea55cc6e18`
      )
      .then((res) => {
        setArticles(res.data.articles.slice(0, 4));
      })
      .catch((error) => {
        console.error("this error", error);
      });
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 items-center justify-between md:grid-cols-2 lg:grid-cols-4 gap-2">
        {articles.map((idn, index) => (
          <div key={index}>
            <div className="w-full h-[1px] bg-slate-600 opacity-20 md:hidden"></div>
            <div className="block w-max-sm p-6 rounded-md">
              <a href={idn.url} className="hover:underline">
                <div className="w-full h-[200px]">
                  <img
                    src={idn.urlToImage ? idn.urlToImage : newsImage}
                    alt={idn.author}
                    className="w-full h-full bg-cover object-cover bg-center"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = newsImage;
                    }}
                  />
                </div>
                <h5 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {idn.title}
                </h5>
              </a>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {idn.publishedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
