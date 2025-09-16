// src/pages/Contact.jsx
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FiSend, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            data-aos="fade-right"
            className="bg-zinc-700 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-400 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-400 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-400 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="flex items-center justify-center px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 font-medium"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div data-aos="fade-left" className="space-y-8">
            <div className="bg-zinc-700 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-amber-500 mt-1 mr-4">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      Address
                    </h3>
                    <p className="text-gray-400">
                      123 Recipe Street, Foodville, FC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-amber-500 mt-1 mr-4">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-amber-500 mt-1 mr-4">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      Email
                    </h3>
                    <p className="text-gray-400">info@recipefinder.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-700 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    question: 'How do I search for recipes?',
                    answer:
                      'You can search by recipe name using the search bar or browse by category.',
                  },
                  {
                    question: 'Is Recipe Finder free to use?',
                    answer:
                      'Yes, Recipe Finder is completely free to use with no hidden charges.',
                  },
                  {
                    question: 'Can I save my favorite recipes?',
                    answer:
                      'Currently, we don\'t have user accounts, but this feature is coming soon!',
                  },
                ].map((item, index) => (
                  <div key={index} className="border-b border-zinc-600 pb-4">
                    <h3 className="text-lg font-medium text-white mb-1">
                      {item.question}
                    </h3>
                    <p className="text-gray-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;