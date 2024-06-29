import Card from "./cards";
import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext";

function CardGrid() {
  const { FilteredArticles } = useContext(ArticleContext);


  return (
    <div className="container-grids center-cards-inside">
      <div class="grid md:grid-cols-3 gap-20 ">
        {FilteredArticles.map((article) => 
            <Card
              key={article.id}
              id={article.id}
              titre={article.titre}
              description={article.description}
              categorie={article.categorie}
              image={article.image}
            />
        )}
      </div>
    </div>
  );
}
export default CardGrid;
