'use client';

import React from 'react';
import { Question } from '@/components/vector-database-guide/Question';
import { QuestionData } from '@/data/vector-db-questions';
import { geologica, afacad } from '@/app/styles/common';

interface DecisionGuideProps {
  questionOne: QuestionData;
  questionTwo: QuestionData;
  questionThree: QuestionData;
  onSelect: (value: string, targetId: string) => void;
}

export function DecisionGuide({ 
  questionOne, 
  questionTwo, 
  questionThree, 
  onSelect 
}: DecisionGuideProps) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#0055c8] mb-4 ${geologica.className}`}>
          Decision Tree: How to Navigate Vector Database Options
        </h2>
        <p className={`text-lg md:text-xl text-gray-700 max-w-4xl mb-8 ${afacad.className}`}>
          With dozens of vector database options on the market, finding the right solution can be overwhelming. 
          This decision tree will guide you through three key questions to identify whether you need a purpose-built vector DB, 
          a hybrid solution, or a fully-managed RAG service based on your specific requirements.
        </p>
        {/*<div className="flex justify-start mb-12">
          <img 
            src="/images/decision-tree-main.svg" 
            alt="Vector Database Decision Tree"
            className="w-full max-w-2xl" 
          />
        </div>*/}
      </div>

      <div id="question-1" className="mb-12">
        <div className={afacad.className}>
          <Question
            questionNumber={questionOne.questionNumber}
            title={questionOne.title}
            description={questionOne.description}
            options={questionOne.options}
            onSelect={onSelect}
            overview={questionOne.overview}
            quiz={questionOne.quiz}
          />
        </div>
      </div>

      <div id="question-2" className="mb-12">
        <div className={afacad.className}>
          <Question
            questionNumber={questionTwo.questionNumber}
            title={questionTwo.title}
            description={questionTwo.description}
            options={questionTwo.options}
            onSelect={onSelect}
            overview={questionTwo.overview}
            quiz={questionTwo.quiz}
          />
        </div>
      </div>

      <div id="question-3" className="mb-12">
        <div className={afacad.className}>
          <Question
            questionNumber={questionThree.questionNumber}
            title={questionThree.title}
            description={questionThree.description}
            options={questionThree.options}
            onSelect={onSelect}
            overview={questionThree.overview}
            quiz={questionThree.quiz}
          />
        </div>
      </div>
    </div>
  );
}

export default DecisionGuide; 