import React from 'react'; 
import { Provider } from 'react-redux';
import store from './redux/store'; 
import './App.css';
import CakeBuy from './components/CakeBuy';
import HookCakeBuy from './components/HookCakeBuy';
import IceCakeBuy from './components/IceCakeBuy';
import HookBuyCakeMultiple from './components/HookBuyCakeMulitple';
import Articles from './components/Articles';

function App() {
  return (
    <Provider store={ store }>
      <div className="App"> 
      <Articles />
      {/* <HookBuyCakeMultiple /> */}
       {/* <IceCakeBuy /> */}
        {/* <CakeBuy />  
        <HookCakeBuy /> */}
      </div>
    </Provider>
  );
} 
export default App;
