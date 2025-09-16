// src/pages/Recipes.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const searchRecipes = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast.warning('Please enter a recipe name');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      if (response.data.meals) {
        setRecipes(response.data.meals);
      } else {
        setRecipes([]);
        toast.info('No recipes found. Try a different search term.');
      }
    } catch (error) {
      toast.error('Failed to fetch recipes');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      setCategories(response.data.categories);
    } catch (error) {
      toast.error('Failed to fetch categories');
    }
  };

  const fetchRecipesByCategory = async (category) => {
    setSelectedCategory(category);
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      if (response.data.meals) {
        setRecipes(response.data.meals);
      } else {
        setRecipes([]);
        toast.info('No recipes found in this category.');
      }
    } catch (error) {
      toast.error('Failed to fetch recipes by category');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          Recipe Explorer
        </h1>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchRecipes={searchRecipes}
          loading={loading}
        />

        {/* Categories */}
        <div className="my-8">
          <h2 className="text-xl font-bold mb-4 text-white">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.strCategory}
                onClick={() => fetchRecipesByCategory(category.strCategory)}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category.strCategory
                    ? 'bg-amber-500 text-white'
                    : 'bg-zinc-700 text-gray-400 hover:bg-zinc-600'
                }`}
              >
                {category.strCategory}
              </button>
            ))}
          </div>
        </div>

        {/* Recipes */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <>
            {selectedCategory && (
              <h2 className="text-2xl font-bold mb-6 text-white">
                {selectedCategory} Recipes
              </h2>
            )}
            {recipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                  <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-400">
                  No recipes found. Try searching or selecting a category.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Recipes;