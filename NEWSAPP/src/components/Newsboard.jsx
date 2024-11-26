import { useEffect, useState } from "react";
import { Newsitem } from "./Newsitem";

export const Newsboard = ({category}) => {



  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&country=${category}&apiKey=a0c5e4f349464da0a91c436e38ca33d2`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);
  console.log(articles);
  return (
    <>
      {articles.map((news, index) => {
        return (
          <Newsitem
            key={index}
            title={news.title}
            src={news.urlToImage}
            description={news.description}
            url={news.url}
          />
        );
      })}
    </>
  );
};
