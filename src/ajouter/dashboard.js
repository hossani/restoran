
import React, { useContext,useState } from 'react';
import { ArticleContext } from '../context/ArticleContext';
import Modal from './modalUpdate';

function Dashboard() {
    const {articles,deleteArticle}=useContext(ArticleContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [articleToEdit, setArticleToEdit] = useState({});

    const handleEditClick = (article) => {
        setArticleToEdit(article);
        setIsModalOpen(true);
      };
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setArticleToEdit({});
      };

 return (
      <>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg dashboard-class">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Our meals
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Meal name
                </th>
                <th scope="col" class="px-6 py-3">
                        Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
        {articles.map(article => (
 <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
 {article.titre}
 </th>
 <td class="px-6 py-4">
 {article.categorie}
 </td>
 <td class="px-6 py-4">
 {article.prix}
 </td>
 <td class="px-6 py-4  text-blue-600 dark:text-blue-500 hover:underline">
   <div onClick={() => handleEditClick(article)} className='cursor'>Update</div>  
 </td>
 <td class="px-6 py-4 text-right">
     <div onClick={() => deleteArticle(article.id)}class="font-medium text-red-600 dark:text-red-500 hover:underline cursor" >Delete</div>
 </td>
</tr>
      ))}
           
        </tbody>
    </table>
</div>
{ isModalOpen && <Modal onClose={handleCloseModal} articleToEdit={articleToEdit} /> }
      </>
    
    );
}

export default Dashboard;


