import { NavBar } from './components/NavBar/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { MenuReduxType } from './types/MenuRedux.types';
import './styles/clear.css'

function App() {
  const menuReduxState = useSelector((state: MenuReduxType) => state.menu);

  useEffect(() => {
    console.log(menuReduxState, 'use EFFECT');
  
  
  }, [menuReduxState])
  
  return (
    <div className="App">
      <NavBar /> 

    </div>
  );
}

export default App;
