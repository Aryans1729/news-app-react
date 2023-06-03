import { useEffect, useState } from "react";
import "./App.css";
import MainHeading from "./Components/MainHeading/MainHeading";
import NavLinks from "./Components/NavBar/NavLinks";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsType, setNewsType] = useState("everything");
  const [isLoading, setIsLoading] = useState(true);

  // const loader = (
  //   <Backdrop
  //     sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //   >
  //     <CircularProgress color='inherit' />
  //   </Backdrop>
  // );

  const loader = <div className='loader'>Loading...</div>;

  const newsComponents = (
    <div className='all-news-container'>
      {newsArray.map((news, index) => {
        return (
          <MainHeading
            key={index}
            imageURL={news.urlToImage}
            title={news.title}
            publishedAt={news.publishedAt}
            content={news.description}
            url={news.url}
          />
        );
      })}
    </div>
  );

  const saveNewsType = (newType) => {
    setNewsType(newType);
  };

  const saveLoader = (isLoading) => {
    setIsLoading(isLoading);
  };

  const getNews = async () => {
    const URL = `https://newsapi.org/v2/everything?q=${newsType}&from=2023-05-03&sortBy=publishedAt&apiKey=5da735138cce4d04889cc8d7b542f5eb`;
    console.log(URL);
    const news = await axios.get(URL);

    setNewsArray(news.data.articles);
    setIsLoading(false);
  };
  useEffect(() => {
    getNews();
  }, [newsType]);
  return (
    <div>
      <NavLinks saveNewsType={saveNewsType} saveLoader={saveLoader} />
      {isLoading ? loader : newsComponents}
    </div>
  );
}

export default App;
