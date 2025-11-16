import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API service functions
export const postService = {
  // Get all posts
  getAll: async (params = {}) => {
    const response = await api.get('/posts', { params });
    return response.data;
  },

  // Get single post
  getById: async (id) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },

  // Create new post
  create: async (postData) => {
    const response = await api.post('/posts', postData);
    return response.data;
  },

  // Update post
  update: async (id, postData) => {
    const response = await api.put(`/posts/${id}`, postData);
    return response.data;
  },

  // Delete post
  delete: async (id) => {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  },
};

export const categoryService = {
  // Get all categories
  getAll: async () => {
    const response = await api.get('/categories');
    return response.data;
  },

  // Create new category
  create: async (categoryData) => {
    const response = await api.post('/categories', categoryData);
    return response.data;
  },
};

export default api;
