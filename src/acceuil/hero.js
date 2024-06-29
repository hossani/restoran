import React, { useContext } from 'react';
import { ArticleContext } from '../context/ArticleContext';
import { Link } from 'react-router-dom';
function Hero(){

    const { articles } = useContext(ArticleContext);

    // Obtenir les 5 derniers articles
    const lastFiveArticles = articles.slice(0,5);

return(

<div className="container-big-hero">
<div class="grid gap-4">

<div className="container-hero">
      <div className="text-content">
        <h1>Welcome to the Restaurant</h1>
        <p >Experience the best seafood cuisine with us.</p>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 btn-booking">Watch</button>    
          </div>
      <div className='div-hero-img' >
      <img src='./images/food.webp' alt="food" />
      </div>
    </div>

    <div class="grid grid-cols-5 gap-4">
    
       { lastFiveArticles.map((article)=>{
        return(
            <Link to={`/article/${article.id}`} className="container-meal">
            <img class="h-full max-w-full rounded-lg" src={article.image} alt="Food"/>
           <div className="container-details-meal">
           <div  class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2 justify-center ticketX">
            New 
            </div>
           <div href="#" class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2 justify-center ticketX class-hidden">
                {article.categorie}
            </div>
            
           </div>
        </Link>
        )
       })
       }

    </div>
</div>
</div>
);
}

export default Hero;