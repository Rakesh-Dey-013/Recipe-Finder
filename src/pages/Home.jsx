// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPopularRecipes = async () => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
      );
      setPopularRecipes(response.data.meals.slice(0, 10));
    } catch (error) {
      toast.error('Failed to fetch popular recipes');
    }
  };

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

  useEffect(() => {
    fetchPopularRecipes();
  }, []);

  return (
    <div className="pt-24 pb-12 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Discover <span className="text-amber-500">Delicious</span> Recipes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
        >
          Find your next favorite meal with our extensive collection of recipes
          from around the world.
        </motion.p>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchRecipes={searchRecipes}
          loading={loading}
        />
      </section>

      {/* Popular Recipes */}
      <section className="max-w-6xl mx-auto mb-16" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
          Popular Recipes
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {popularRecipes.map((recipe) => (
            <SwiperSlide key={recipe.idMeal}>
              <RecipeCard recipe={recipe} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Search Results */}
      {recipes.length > 0 && (
        <section className="max-w-6xl mx-auto" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            Search Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;