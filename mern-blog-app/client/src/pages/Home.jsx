import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to MERN Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A modern blog platform built with the MERN stack. Create, read, update, 
          and delete blog posts with a beautiful, responsive interface.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/posts"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Browse Posts
          </Link>
          <Link
            to="/create-post"
            className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Write Post
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-blue-500 text-xl">📝</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Create Posts</h3>
          <p className="text-gray-600">
            Write and publish blog posts with rich content and categories.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-green-500 text-xl">📂</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Organize</h3>
          <p className="text-gray-600">
            Categorize your posts and make them easy to discover.
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm border">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-purple-500 text-xl">⚡</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Fast & Modern</h3>
          <p className="text-gray-600">
            Built with the latest technologies for optimal performance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
