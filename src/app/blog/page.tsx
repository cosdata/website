'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPosts from './BlogPosts';
import CoverImage from './CoverImage';
import SearchBar from './SearchBar';
import FeaturedPost from './FeaturedPost';
import Pagination from './Pagination';
import NewsletterSignup from './NewsletterSignup';

export default function Blog() {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedPost();
    fetchPosts(currentPage);
  }, [currentPage]);

  const fetchFeaturedPost = async () => {
    try {
      const response = await axios.get('/api/posts?page=1&pageSize=1');
      const { data } = response.data;
      setFeaturedPost(data[0]);
    } catch (error) {
      console.error('Error fetching featured post:', error);
    }
  };

  const fetchPosts = async (page: number) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/posts?page=${page}&pageSize=9`);
      const { data, pagination } = response.data;
      console.log('Fetched posts:', data);
      setPosts(data);
      setFilteredPosts(data);
      setTotalPages(pagination.pageCount);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    const filtered = posts.filter((post) => 
      (post as any).attributes.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      <CoverImage />
      <div className="w-full py-8 px-4 sm:px-6 bg-gray-100 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
            <h1 className="text-5xl mb-4 sm:mb-0 text-gray-600">Featured Post</h1>
            <div className="w-full sm:w-1/2">
              <SearchBar placeholder="What are you looking for?" onSearch={handleSearch} />
            </div>
          </div>
          
          {featuredPost && (
            <div className="mb-12">
              <FeaturedPost post={featuredPost} className="flex flex-col md:flex-row" />
            </div>
          )}
          
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="mb-12">
              <BlogPosts posts={filteredPosts} />
            </div>
          )}
          
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
          
          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </div>
  )
}