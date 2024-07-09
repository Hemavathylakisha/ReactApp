import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ImageProvider } from './context/ImageContext';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

const App = () => {
  return (
 
    <Router>
    <ImageProvider>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<ImageList />} />
        </Routes>
      </div>
    </ImageProvider>
  </Router>
   
  );
};

export default App;