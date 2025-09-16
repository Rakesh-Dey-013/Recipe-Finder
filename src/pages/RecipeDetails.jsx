// src/pages/RecipeDetail.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FaClock, FaUtensils, FaYoutube } from 'react-icons/fa';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('ingredients');

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (response.data.meals) {
          setRecipe(response.data.meals[0]);
        } else {
          toast.error('Recipe not found');
        }
      } catch (error) {
        toast.error('Failed to fetch recipe details');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-400">Recipe not found</p>
      </div>
    );
  }

  // Extract ingredients and measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: recipe[`strIngredient${i}`],
        measure: recipe[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-700 rounded-lg overflow-hidden shadow-xl"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <h1 className="text-3xl font-bold text-white mb-4">
                {recipe.strMeal}
              </h1>
              <p className="text-gray-400 mb-6">{recipe.strArea} Cuisine</p>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center text-amber-500">
                  <FaClock className="mr-2" />
                  <span>{Math.floor(Math.random() * 60) + 30} mins</span>
                </div>
                <div className="flex items-center text-amber-500">
                  <FaUtensils className="mr-2" />
                  <span>{recipe.strCategory}</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex border-b border-zinc-600">
                  <button
                    className={`py-2 px-4 font-medium ${
                      activeTab === 'ingredients'
                        ? 'text-amber-500 border-b-2 border-amber-500'
                        : 'text-gray-400'
                    }`}
                    onClick={() => setActiveTab('ingredients')}
                  >
                    Ingredients
                  </button>
                  <button
                    className={`py-2 px-4 font-medium ${
                      activeTab === 'instructions'
                        ? 'text-amber-500 border-b-2 border-amber-500'
                        : 'text-gray-400'
                    }`}
                    onClick={() => setActiveTab('instructions')}
                  >
                    Instructions
                  </button>
                </div>

                <div className="py-4">
                  {activeTab === 'ingredients' ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {ingredients.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center bg-zinc-800 p-3 rounded-lg"
                        >
                          <span className="w-8 h-8 flex items-center justify-center bg-amber-500 text-white rounded-full mr-3">
                            {index + 1}
                          </span>
                          <span>
                            {item.ingredient} - {item.measure}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="prose prose-invert max-w-none">
                      {recipe.strInstructions
                        .split('\n')
                        .filter((step) => step.trim())
                        .map((step, index) => (
                          <p key={index} className="mb-4">
                            {step}
                          </p>
                        ))}
                    </div>
                  )}
                </div>
              </div>

              {recipe.strYoutube && (
                <a
                  href={recipe.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                >
                  <FaYoutube className="mr-2" />
                  Watch on YouTube
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecipeDetail;