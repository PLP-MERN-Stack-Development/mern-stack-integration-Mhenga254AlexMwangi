import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext.jsx';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/create-post" element={<div className="max-w-4xl mx-auto"><h1 className="text-3xl font-bold">Create Post (Coming Soon)</h1></div>} />
            <Route path="/categories" element={<div className="max-w-4xl mx-auto"><h1 className="text-3xl font-bold">Categories (Coming Soon)</h1></div>} />
            <Route path="/posts/:id" element={<div className="max-w-4xl mx-auto"><h1 className="text-3xl font-bold">Single Post (Coming Soon)</h1></div>} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
