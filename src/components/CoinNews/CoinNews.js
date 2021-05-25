import InfoSquare from "../InfoSquare/InfoSquare";

export default function CoinNews(props) {
  console.log(props.newsData);
  return (
    <div>
      {
        props.newsData.articles 
        ? props.newsData.articles.map(article => {
            return (
              <InfoSquare 
                title={article.title}
                author={article.author}
                description={article.description}
                img={article.urlToImage} 
              />
            );
          })
        : null
      }
    </div>
  );
}