
import React, { useState, useEffect, useCallback } from 'react';
import { MOCK_USER_STORIES } from './constants';
import StoryCircle from './components/StoryCircle';
import StoryViewer from './components/StoryViewer';
import { UserStory } from './types';

const App: React.FC = () => {
  const [stories, setStories] = useState<UserStory[]>(MOCK_USER_STORIES);
  const [activeUserIndex, setActiveUserIndex] = useState<number | null>(null);
  const [viewedStories, setViewedStories] = useState<Set<string>>(new Set());

  const getSessionViewedStories = (): Set<string> => {
    const viewed = sessionStorage.getItem('viewedStories');
    return viewed ? new Set(JSON.parse(viewed)) : new Set();
  };
  
  useEffect(() => {
    setViewedStories(getSessionViewedStories());
  }, []);

  const handleStoryCircleClick = (index: number) => {
    setActiveUserIndex(index);
  };

  const handleCloseViewer = () => {
    setActiveUserIndex(null);
  };

  const handleStoriesViewed = useCallback((userId: string) => {
    setViewedStories(prev => {
      const newViewed = new Set(prev);
      newViewed.add(userId);
      sessionStorage.setItem('viewedStories', JSON.stringify(Array.from(newViewed)));
      return newViewed;
    });
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800 z-20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
           <h1 className="text-2xl font-bold tracking-tighter" style={{fontFamily: "'Grand Hotel', cursive"}}>InstaStories</h1>
           <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"></div>
        </div>
      </header>
      
      <main className="pt-20">
        <div className="container mx-auto px-4">
          <div className="border-b border-gray-800 py-3">
            <div className="flex space-x-4 overflow-x-auto pb-3 -mb-3" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
              {stories.map((userStory, index) => (
                <StoryCircle
                  key={userStory.userId}
                  userStory={userStory}
                  isViewed={viewedStories.has(userStory.userId)}
                  onClick={() => handleStoryCircleClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="py-8 text-center text-gray-500">
            <p>Welcome to the Instagram Stories Clone.</p>
            <p>Click on a story to start watching.</p>
          </div>
        </div>
      </main>

      {activeUserIndex !== null && (
        <StoryViewer
          stories={stories}
          initialUserIndex={activeUserIndex}
          onClose={handleCloseViewer}
          onStoriesViewed={handleStoriesViewed}
        />
      )}
      
      {/* Adding the font for the 'Instagram' style logo */}
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap');
      </style>
    </div>
  );
};

export default App;
