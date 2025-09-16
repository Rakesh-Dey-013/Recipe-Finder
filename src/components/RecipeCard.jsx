// src/components/RecipeCard.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUtensils, FaClock } from 'react-icons/fa';

const RecipeCard = ({ recipe }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-zinc-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={`/Recipe-Finder/recipes/${recipe.idMeal}`}> {/* Update this line */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-xl font-bold text-white">{recipe.strMeal}</h3>
            <div className="flex items-center mt-2 text-sm text-gray-300">
              <span className="flex items-center mr-4">
                <FaUtensils className="mr-1" />
                {recipe.strCategory}
              </span>
              <span className="flex items-center">
                <FaClock className="mr-1" />
                {Math.floor(Math.random() * 60) + 30} mins
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RecipeCard;