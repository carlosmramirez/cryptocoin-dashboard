import InfoSquare from "../InfoSquare/InfoSquare";

import './CoinNews.css';

export default function CoinNews(props) {
  return (
    <div className='coin-news-container'>
      {
        props.newsData.articles 
        ? props.newsData.articles.map((article, index) => {
            return (
              <InfoSquare 
                title={article.title}
                author={article.author}
                description={article.description}
                img={article.urlToImage}
                url={article.url}
                type={index ? 'small' : 'large'}
                isNewsPage={props.isNewsPage} 
              />
            );
          })
        : null
      }
    </div>
  );
}