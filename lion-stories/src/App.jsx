import { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import StoryScreen from './components/StoryScreen';

function App() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="max-w-md mx-auto min-h-screen">
      {selectedStory ? (
        <StoryScreen
          story={selectedStory}
          onHome={() => setSelectedStory(null)}
        />
      ) : (
        <HomeScreen onSelectStory={setSelectedStory} />
      )}
    </div>
  );
}

export default App;
