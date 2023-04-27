import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import PropTypes from "prop-types";


const News = ({ country = "in",  category = "general", pageSize= 8 }) => {
 
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsloaded] = useState(false);
  const [page, setPage] = useState(1);
 

  const handleNextClick = () => {

    setIsloaded(true);
    setPage(page + 1);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d7d509b7bcc6409ab1b9f17f4cd1d31e&page=${
          page + 1}&pageSize=${pageSize}`
      )
      .then((response) => {
        setIsloaded(false);
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
        setIsloaded(false);
      });
  };




  const handlePrevClick = () => {
    setIsloaded(true);
    setPage(page - 1);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d7d509b7bcc6409ab1b9f17f4cd1d31e&page=${
          page - 1
        }&pageSize=${pageSize}`
      )
      .then((res) => {
        setIsloaded(false);
        setArticles(res.data.articles);
      })
      .catch((error) => {
        console.log("something went wrong.");
      });
  };





  useEffect(() => {
    setIsloaded(true);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d7d509b7bcc6409ab1b9f17f4cd1d31e&page=1&pageSize=${pageSize}`

      )
      .then((res) => {
        setIsloaded(true);
        setArticles(res.data.articles);
       
      })
      .catch((err) => {
        console.log(err, "something went wrong.");
      });
  }, [category, country]);



  return (
    <div className="container my-3">
      <h2 className=" text-info mb-5"style={{textAlign: "center" }}>Hi this your provider named Kemish. Please select a specific category, to get latest info. related to particular forum. Thanks for visiting my site.</h2>
      <div className="row my-3 ml-15 my-3">
        {articles?.map((article) => (
          <div className="col-md-4 mb-4" key={article.url}>
            <NewsItem
              title={article.title ? article.title.slice(0, 49) : ""}
              author={article.author ? article.author : "Unknown author."}
              content={
                article.content
                  ? article.content.slice(0, 37)
                  : "Click on Read more for full news"
              }
              description={
                article.description ? article.description.slice(0, 76) : ""
              }
              source={article.source.name ? article.source.name : "Unknown official source"}
              publishedAt={article.publishedAt ? article.publishedAt : "Anonymous date detail deu to privacy issues."}
              imageurl={
                article.urlToImage
                  ? article.urlToImage
                  : "https://justinweather.com/wp-content/uploads/2023/04/aurora-stonehenge-april-23.jpeg"
              }
              newsUrl={article.url}
              
            />
          </div>
        ))}
      </div>
      <div className="container my-3 d-flex justify-content-between">
        <button
          type="button"
          disabled={page <= 1}
          className="btn btn-warning text-white"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>


        <button
          type="button"
          className="btn btn-warning text-white"
          disabled={page >= 6}
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};



export default News;
