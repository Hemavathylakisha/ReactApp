import React, {createContext, useState} from 'react';
import Jumbutron from '../components/Jumbutron';
import SearchField from '../components/SearchField';
import Images from '../components/Images';
import useAxios from '../hooks/useAxios';
import Login from '../components/Login';
import Register from '../components/Register';

//create context
export const ImageContext = createContext();

const ImageCreation = () => {
    const [searchImage, setSearchImage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login
    const {response, isLoading, error, fetchData} = useAxios
   (`search/photos?page=1&query=cars&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
   console.log(response);
    const value ={
      response,
      isLoading,
      fetchData,
      error,
      searchImage,
      setSearchImage,
      isLoggedIn, setIsLoggedIn
    }
    const handleLogin = () => {
      // Handle login logic here
      // On successful login, set the login state to true
      setIsLoggedIn(true);
    };

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
      {/* {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : ( 
        <Register />
      )}   */}
        <SearchField />
      </Jumbutron>     
      <Images />
  </ImageContext.Provider>
  );
}

export default ImageCreation;
