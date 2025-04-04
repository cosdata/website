'use client';

import React from 'react';
import { geologica, afacad } from '@/app/styles/common';

export function GuideOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055c8] mb-6 ${geologica.className}`}>
          How to Choose the Right Vector Database
        </h3>
        <div className={`text-gray-700 text-lg md:text-xl max-w-4xl ${afacad.className}`}>
          <p className="mb-6">
            The vector database landscape is growing fast—and so is the confusion. Between a flood of new products, vague benchmarks, unclear pricing models, and overlapping claims, it&apos;s harder than ever to make an informed decision.
          </p>
          <p className="mb-6">
            That&apos;s why we created this guide. We&apos;ve broken down the market into clear categories—purpose-built vector databases, hybrid solutions, and RAG-as-a-Service platforms—so you can navigate a complex ecosystem.
          </p>
          <p className="mb-6">
            <strong>Vector search is not one-size-fits-all.</strong> Your specific needs, data scale, performance requirements, and organizational constraints all matter. The &qout;best&qout; solution depends entirely on your unique situation—which is why this guide helps you think through all your options across the spectrum.
          </p>
          <p className="mb-8">
            We&apos;re <strong>Cosdata</strong>, and we have our own purpose-built vector database offerings. But this guide isn&apos;t just about us. It&apos;s about helping you <strong>cut through the noise</strong> and choose the right solution for your specific needs—even if that solution isn&apos;t Cosdata.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-lg shadow-lg p-8 border border-blue-700 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h4 className={`text-xl sm:text-2xl font-bold mb-4 text-white ${geologica.className}`}>
              Need personalized guidance?
            </h4>
            <p className={`text-gray-100 text-lg md:text-xl ${afacad.className}`}>
              Our solution experts can help evaluate your specific needs and recommend the best vector database approach for your use case, workload, and budget.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a 
              href="/contact" 
              className={`inline-flex items-center justify-center px-6 py-3 bg-[#f23665] hover:bg-[#d92d5c] text-white font-medium rounded-md shadow-md transition-colors duration-300 text-lg ${geologica.className}`}
            >
              Book a free consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          <h4 className={`text-xl sm:text-2xl font-bold mb-4 text-[#0055c8] ${geologica.className}`}>What&apos;s Inside</h4>
          <ul className={`list-disc list-outside ml-5 space-y-3 text-gray-700 text-lg highlight-list ${afacad.className}`}>
            <li className="pl-0 overflow-visible">A step-by-step <strong>decision guide</strong> to narrow your options</li>
            <li className="pl-0 overflow-visible">Clear breakdowns of <strong>three major categories</strong>: purpose-built DBs, hybrid solutions, and RAG services</li>
            <li className="pl-0 overflow-visible">Estimated <strong>pricing and benchmark data</strong> across real use cases</li>
            <li className="pl-0 overflow-visible">Detailed <strong>feature comparisons</strong> tailored to your situation</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
          <h4 className={`text-xl sm:text-2xl font-bold mb-4 text-[#0055c8] ${geologica.className}`}>Who It&apos;s For</h4>
          <ul className={`list-disc list-outside ml-5 space-y-3 text-gray-700 text-lg highlight-list ${afacad.className}`}>
            <li className="pl-0 overflow-visible">Engineers building RAG, search, or recommendation systems</li>
            <li className="pl-0 overflow-visible">CTOs and architects planning ML infrastructure</li>
            <li className="pl-0 overflow-visible">Technical leaders comparing build vs. buy approaches</li>
            <li className="pl-0 overflow-visible">Anyone trying to make sense of the growing vector DB ecosystem</li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 rounded-lg shadow-md p-8 border border-amber-200">
        <h4 className={`text-xl sm:text-2xl font-bold mb-4 text-amber-700 ${geologica.className}`}>Disclaimers and Transparency</h4>
        <ul className={`list-disc list-outside ml-5 space-y-3 text-amber-800 text-lg highlight-list ${afacad.className}`}>
          <li className="pl-0 overflow-visible"><strong>Not exhaustive:</strong> We&apos;ve focused on representative products, not every offering.</li>
          <li className="pl-0 overflow-visible"><strong>Estimates only:</strong> Some pricing and performance data is based on public info or internal testing.</li>
          <li className="pl-0 overflow-visible"><strong>Performance may vary:</strong> Hardware, recall targets, and workload shape all impact results.</li>
          <li className="pl-0 overflow-visible"><strong>We&apos;re a vendor too:</strong> We&apos;ve done our best to be objective, but Cosdata does make a vector DB.</li>
        </ul>
        <div className={`flex items-center space-x-2 pt-6 text-gray-700 text-lg ${afacad.className}`}>
          <svg className="w-5 h-5 text-[#0055c8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:contact@cosdata.io" className="text-[#0055c8] hover:text-[#f23665] transition-colors duration-300">
            Spot something off? Let us know → contact@cosdata.io
          </a>
        </div>
      </div>
    </div>
  );
}

export default GuideOverview; 