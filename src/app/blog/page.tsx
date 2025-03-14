'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPosts from './BlogPosts';
import CoverImage from './CoverImage';
import FeaturedPost from './FeaturedPost';
import Pagination from './Pagination';
import NewsletterSignup from './NewsletterSignup';
import { commonStyles, noto_sans_mono } from '../styles/common';

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
      setPosts(data);
      setFilteredPosts(data);
      setTotalPages(pagination.pageCount);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={`min-h-screen ${noto_sans_mono.className}`}>
      <CoverImage />
      
      {/* Main Content Section */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className={`${commonStyles.mainContainer} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          {/* Featured Post Section */}
          {featuredPost && (
            <div className="mb-16">
              <FeaturedPost post={featuredPost} className="bg-white shadow-lg rounded-xl overflow-hidden" isFeatured={true} />
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
