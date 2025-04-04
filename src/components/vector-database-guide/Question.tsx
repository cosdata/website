import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { geologica, afacad } from '@/app/styles/common';
import { ChevronRight, HelpCircle, Plus as PlusIcon, Minus as MinusIcon } from 'lucide-react';

export interface QuizQuestion {
  question: string;
  answers: {
    text: string;
    points: { [key: string]: number };
  }[];
}

export interface QuestionOption {
  id: string;
  label: string;
  description: string;
  targetSectionId: string;
}

export interface QuestionProps {
  questionNumber: number;
  title: string;
  description: string;
  options: QuestionOption[];
  overview?: string;
  quiz?: QuizQuestion[];
  onSelect: (value: string, targetId: string) => void;
}

export function Question({ 
  questionNumber, 
  title, 
  description, 
  options, 
  overview, 
  quiz, 
  onSelect 
}: QuestionProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: string]: number }>({});
  const [quizResults, setQuizResults] = useState<{ [key: string]: number } | null>(null);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  
  const handleAnswerSelect = (questionIndex: number, answerPoints: { [key: string]: number }) => {
    const newAnswers = { ...quizAnswers };
    
    // Add points for each option
    Object.entries(answerPoints).forEach(([optionId, points]) => {
      if (!newAnswers[optionId]) {
        newAnswers[optionId] = 0;
      }
      newAnswers[optionId] += points;
    });
    
    setQuizAnswers(newAnswers);
    
    // Move to next question or show results
    if (quiz && questionIndex < quiz.length - 1) {
      setCurrentQuizQuestion(questionIndex + 1);
    } else {
      setQuizResults(newAnswers);
    }
  };
  
  const getRecommendedOption = () => {
    if (!quizResults) return null;
    
    // Find option with highest points
    let maxPoints = 0;
    let recommendedOptionId = '';
    
    Object.entries(quizResults).forEach(([optionId, points]) => {
      if (points > maxPoints) {
        maxPoints = points;
        recommendedOptionId = optionId;
      }
    });
    
    return options.find(option => option.id === recommendedOptionId);
  };
  
  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizResults(null);
    setCurrentQuizQuestion(0);
  };
  
  const recommendedOption = getRecommendedOption();
  
  return (
    <div className="mb-8">
      <Card className="border border-gray-200 shadow-md overflow-hidden">
        <div className={`bg-gradient-to-r from-[#0055c8] to-[#0066e8] py-4 px-6 ${geologica.className}`}>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-[#0055c8] font-[600] text-sm">
              {questionNumber}
            </div>
            <h3 className="text-xl font-[500] text-white">{title}</h3>
          </div>
        </div>
        
        <CardContent className={`p-0 ${afacad.className}`}>
          {overview && (
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <p className="text-base sm:text-lg text-gray-700">{overview}</p>
            </div>
          )}
          
          <div className="p-4 sm:p-6">
            {quiz && quiz.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <button
                  onClick={() => setShowQuiz(!showQuiz)}
                  className="flex items-center gap-2 text-[#0055c8] hover:text-[#0066e8] font-medium text-base sm:text-lg mb-3 sm:mb-4"
                >
                  <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Not sure? {showQuiz ? 'Hide quiz' : 'Take a short quiz to help decide'}</span>
                  {showQuiz ? (
                    <MinusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </button>
                
                {showQuiz && (
                  <div className="p-4 sm:p-6 bg-gray-50 rounded-lg">
                    {quizResults ? (
                      <div className="text-center">
                        <h5 className={`text-lg sm:text-xl font-medium text-gray-900 mb-3 ${geologica.className}`}>
                          Quiz Results
                        </h5>
                        
                        {recommendedOption ? (
                          <>
                            <p className="mb-3 text-base sm:text-lg">Based on your answers, we recommend:</p>
                            <div 
                              className="border-2 border-[#0055c8] rounded-lg p-4 sm:p-5 bg-blue-50/50 mb-4 cursor-pointer"
                              onClick={() => onSelect(recommendedOption.id, recommendedOption.targetSectionId)}
                            >
                              <h4 className={`font-[600] text-[#0055c8] text-lg sm:text-xl ${geologica.className}`}>
                                {recommendedOption.label}
                              </h4>
                              <p className="text-gray-600 text-base sm:text-lg mt-2">{recommendedOption.description}</p>
                            </div>
                          </>
                        ) : (
                          <p className="mb-3 text-base sm:text-lg">Based on your answers, please review both options again.</p>
                        )}
                        
                        <button
                          onClick={resetQuiz}
                          className="text-[#0055c8] underline hover:text-[#0066e8] mt-2 text-base sm:text-lg"
                        >
                          Retake quiz
                        </button>
                      </div>
                    ) : (
                      <>
                        {quiz && quiz[currentQuizQuestion] && (
                          <div>
                            <h5 className={`text-lg sm:text-xl font-medium text-gray-900 mb-4 ${geologica.className}`}>
                              {quiz[currentQuizQuestion].question}
                            </h5>
                            <div className="space-y-3">
                              {quiz[currentQuizQuestion].answers.map((answer, index) => (
                                <button
                                  key={index}
                                  className="w-full text-left p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-blue-50/50 hover:border-[#0055c8] text-base sm:text-lg"
                                  onClick={() => handleAnswerSelect(currentQuizQuestion, answer.points)}
                                >
                                  {answer.text}
                                </button>
                              ))}
                            </div>
                            <div className="mt-4 text-sm sm:text-base text-gray-500">
                              Question {currentQuizQuestion + 1} of {quiz.length}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
            
            <h4 className={`font-[500] text-[#0055c8] text-lg sm:text-xl mb-4 sm:mb-5 ${geologica.className}`}>
              Choose one option:
            </h4>
            
            <div className={`grid grid-cols-1 md:grid-cols-${options.length === 2 ? '2' : '3'} gap-4`}>
              {options.map((option) => (
                <div 
                  key={option.id}
                  className="border border-gray-200 rounded-lg p-4 sm:p-5 hover:border-[#0055c8] hover:bg-blue-50/30 transition-all cursor-pointer group"
                  onClick={() => onSelect(option.id, option.targetSectionId)}
                >
                  <div className="flex items-center justify-between">
                    <h4 className={`font-[600] text-[#0055c8] text-lg sm:text-xl ${geologica.className} group-hover:text-[#0066e8]`}>
                      {option.label}
                    </h4>
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-hover:text-[#0055c8] transition-colors" />
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg mt-2">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 