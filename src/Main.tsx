import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import Foodie from './DiarySection';


const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Portfolio />}></Route>
      <Route path='/foodie' element={<Foodie/>}></Route>
    </Routes>
  );
}

export default Main;