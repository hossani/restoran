import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ArticleContext = createContext(null);

export const ArticleProvider = ({ children }) => {
  const notify = () => toast("L\'operation a été effectuer avec succée");
  const notifyEmptyInput = () => toast("Veuillez remplir tous les champs");
  const notifyEmptyInputModal = () => toast("Veuillez remplir les champs que tu es vidé");
  const [articles, setArticles] = useState([
  ]);
  const [FilteredArticles,setFilteredArticles]=useState([]);
 
  useEffect(() => {
    axios.get('http://localhost:3001/articles')
      .then(response => setArticles(response.data.reverse()))
      .catch(error => console.error('Erreur lors de la récupération des articles :', error));
  }, []);

  useEffect(() => {
    // Récupérer les articles depuis db.json
    axios.get('http://localhost:3001/articles')
      .then(response => setFilteredArticles(response.data.reverse()))
      .catch(error => console.error('Erreur lors de la récupération des articles :', error));
  }, []);

  const addArticle = (article) => {
    axios.post('http://localhost:3001/articles', article)
      .then(response => setArticles([response.data,...articles]))
      .catch(error => console.error('Erreur lors de l\'ajout de l\'article :', error));
  };
  

  const deleteArticle = (id) => {

    axios.delete(`http://localhost:3001/articles/${id}`)
      .then(() => setArticles(articles.filter(article => article.id !== id)))
      .catch(error => console.error('Erreur lors de la suppression de l\'article :', error));
      notify();
  };

  const editArticle = (updatedArticle) => {
    axios.put(`http://localhost:3001/articles/${updatedArticle.id}`, updatedArticle)
      .then(response => {
        setArticles(articles.map(article => 
          article.id === updatedArticle.id ? response.data : article
        ));
      })
      .catch(error => console.error('Erreur lors de la mise à jour de l\'article :', error));
  };

  return (
    <ArticleContext.Provider value={{ articles,notify,notifyEmptyInput ,notifyEmptyInputModal,setArticles,addArticle, deleteArticle, editArticle, FilteredArticles,setFilteredArticles }}>
      {children}
    </ArticleContext.Provider>
  );
};
