// src/pages/About.jsx
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaCode size={40} className="text-amber-500" />,
      title: 'Modern Tech Stack',
      description:
        'Built with React.js and Tailwind CSS for a fast and responsive user experience.',
    },
    {
      icon: <FaPalette size={40} className="text-amber-500" />,
      title: 'Beautiful UI',
      description:
        'Carefully designed interface with animations and a dark theme for comfortable browsing.',
    },
    {
      icon: <FaMobileAlt size={40} className="text-amber-500" />,
      title: 'Fully Responsive',
      description:
        'Works perfectly on all devices from desktop to mobile phones.',
    },
  ];

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">About Recipe Finder</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover, save, and cook delicious recipes from around the world with
            our intuitive platform.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                role: 'Frontend Developer',
                bio: 'Passionate about creating beautiful and functional user interfaces.',
              },
              {
                name: 'Jane Smith',
                role: 'UX Designer',
                bio: 'Focused on delivering the best user experience possible.',
              },
              {
                name: 'Mike Johnson',
                role: 'Backend Developer',
                bio: 'Ensures the application runs smoothly behind the scenes.',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-zinc-700 p-6 rounded-lg shadow-lg"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-zinc-600 flex items-center justify-center text-3xl font-bold text-amber-500">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-500 mb-3">{member.role}</p>
                <p className="text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <motion.div
          data-aos="fade-up"
          className="bg-gradient-to-r from-amber-500/10 to-transparent p-8 rounded-lg border-l-4 border-amber-500"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-400">
            Our mission is to make cooking accessible to everyone by providing a
            vast collection of recipes from around the world. We believe that good
            food brings people together and creates memorable experiences. Whether
            you're a seasoned chef or a beginner in the kitchen, Recipe Finder
            has something for you.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;