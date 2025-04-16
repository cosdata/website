'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPosts from './BlogPosts';
import CoverImage from './CoverImage';
import FeaturedPost from './FeaturedPost';
import Pagination from './Pagination';
import NewsletterSignup from './NewsletterSignup';
import ScrollRestoration from '../components/ScrollRestoration';
import { commonStyles, noto_sans_mono } from '../styles/common';
import { getCoverImageUrl } from '../utils/imageUtils';

export default function Blog() {
  const [featuredPost, setFeaturedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Reset scroll position when the component mounts
    window.scrollTo(0, 0);
    
    fetchFeaturedPost();
    fetchPosts(currentPage);
  }, [currentPage]);

  // Effect to handle scroll position after content loads
  useEffect(() => {
    if (contentLoaded) {
      // Scroll to top when content is loaded
      window.scrollTo(0, 0);
    }
  }, [contentLoaded]);

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
    setContentLoaded(false);
    try {
      const response = await axios.get(`/api/posts?page=${page}&pageSize=9`);
      const { data, pagination } = response.data;
      setPosts(data);
      setFilteredPosts(data);
      setTotalPages(pagination.pageCount);
      setContentLoaded(true);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setContentLoaded(true);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  };

  return (
    <div className={`min-h-screen ${noto_sans_mono.className}`}>
      {/* Add ScrollRestoration component */}
      <ScrollRestoration />
      
      <CoverImage />
      
      {/* Main Content Section */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          {/* Featured Post Section */}
          {featuredPost && (
            <div className="mb-16">
              <FeaturedPost post={featuredPost} className="overflow-hidden" isFeatured={true} />
            </div>
          )}
          
          {/* Latest Posts Section */}
          <div className="mb-16">
            <h2 className={`${commonStyles.sectionTitle} !mb-8`}>Latest Articles</h2>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f23665]"></div>
              </div>
            ) : (
              <BlogPosts posts={filteredPosts} />
            )}
          </div>
          
          {/* Pagination */}
          <div className="mb-16">
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />
          </div>

          {/* Newsletter Section */}
          <div className="mb-16">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
}
