import React, { useState , useContext} from 'react';
import axios from 'axios';
import { ArticleContext } from '../context/ArticleContext';

function Formulaire() {

  const { addArticle,notify ,notifyEmptyInput} = useContext(ArticleContext);
  const [titre, setTitre] = useState('');
  const [prix, setPrix] = useState('');
  const [categorie, setCategorie] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  
  const handleSubmit = async (e) => {
     e.preventDefault();
     if (!titre || !prix || !categorie || !description || !image) {
      notifyEmptyInput();
      return;
    }
    const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dhtqzlo9k/image/upload';
    const uploadPreset = 'cloudinarytutorial';
    
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', uploadPreset);
    
      try {
        const response = await axios.post(cloudinaryUrl, formData);
        const newArticle={
          titre,
          prix,
          categorie,
          description,
          image:response.data.secure_url
        }
        notify();
        addArticle(newArticle);
                setTitre('');
        setPrix('');
        setCategorie('');
        setDescription('');
        setImage(null);
      } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw error;
      }
    };
  

    return (
      <>

<form className="form-class" >
    <h3 className="titre-formulaire">Formulaire d'ajout</h3>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titre</label>
      <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full "/>
  </div>
        <div>
        <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prix</label>
      <input type="number" value={prix} onChange={(e) => setPrix(e.target.value)} id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full "/>
  </div>
        <div>
        <label for="categorie" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Categorie</label>
  <select id="categorie" value={categorie} onChange={(e) => setCategorie(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full ">
    <option selected value="">Choose a categorie</option>
    <option value="Breakfast">Breakfast</option>
    <option value="Lunch">Lunch</option>
    <option value="Dinner">Dinner</option>
    <option value="Snacks">Snacks</option>
  </select> 
  </div>
        <div>
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload image</label>
<input onChange={(e) => setImage(e.target.files[0])}  class=" block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
  </div>
    </div>
    <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
<textarea id="message" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
  </div>
  <div>
  <button type="submit" onClick={handleSubmit}   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn-form">Ajouter meal</button>
  </div>
</form>
      </>
    );
}

export default Formulaire;