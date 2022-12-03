import './App.css';
import Table from './Todos/Table';
import issues from './Todos/issues.json'
import Naveen from './Accordion';

import Counter from './Counter/Counter';
import ShopList from './ShoppingCart/ShopList';
import Navbar from './ShoppingCart/Navbar';
import Products from './ProductThunks/Products';

function App() {

  return (
    <div > 
       <Navbar/>
      <Counter />
      <ShopList />
      <Products />
      
    </div>
   
  );
}

export default App;
