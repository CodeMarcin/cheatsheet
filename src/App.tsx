import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector} from 'react-redux';

import { MenuReduxType } from './types/MenuRedux.types';

import { NavBar } from './components/NavBar/NavBar';
import { Page } from './pages/Page';

import './styles/clear.css'

function App() {
  const menuReduxState = useSelector((state: MenuReduxType) => state.menu);

  // useEffect(() => {
  //   console.log(menuReduxState, 'use EFFECT');
  
  
  // }, [menuReduxState])
  
  return (
    <div className="App">
      <NavBar /> 
      <Routes>
        <Route path=":mainCategory/:subCategory/:link" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
