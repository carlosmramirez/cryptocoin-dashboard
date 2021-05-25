import InfoSquare from "../InfoSquare/InfoSquare";

export default function CoinNews(props) {
  return (
    <div>
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
              />
            );
          })
        : null
      }
    </div>
  );
}