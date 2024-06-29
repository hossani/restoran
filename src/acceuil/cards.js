import { Link } from 'react-router-dom';

function Card({ id, titre ,categorie, description, image }) {
    return (
<div class="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={image}  alt="Food" className='w-full h-48 '/>
    </a>
    <div class="p-5">

    <div class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2 justify-center ticket">
                {categorie}
            </div>

        <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{titre}  </h5>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.substring(0,20)}...</p>
        <Link to={`/article/${id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-centerdark:focus:ring-blue-800   dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 btn-search-card">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
    );
  }
  export default Card;
  