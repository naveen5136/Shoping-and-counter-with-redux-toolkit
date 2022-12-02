import './App.css';
import Table from './Todos/Table';
import issues from './Todos/issues.json'
import Naveen from './Accordion';

import Counter from './Counter/Counter';
import ShopList from './ShoppingCart/ShopList';
import Navbar from './ShoppingCart/Navbar';

function App() {

  return (
    <div > 
       <Navbar/>
      <Counter />
      <ShopList />
      
    </div>
   
  );
}

export default App;
