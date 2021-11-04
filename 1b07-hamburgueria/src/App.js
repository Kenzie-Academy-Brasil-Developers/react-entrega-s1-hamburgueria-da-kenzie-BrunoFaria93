import './App.css';
import { useState } from 'react';
import MenuContainer from './components/MenuContainer';
import Header from './components/Header'
function App() {

  const [filteredProducts, setFilteredProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Kenzie', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'Fanta', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ]);

  const [currentSale, setCurrentSale] = useState([])
  const [userInput, setUserInput] = useState('')

  function showProducts (input){
    setFilteredProducts(filteredProducts.filter((item) => {return item.name.toLowerCase() === input.toLowerCase()}
    
    ))
  }
  

  return (
    <div className="App">
      <Header userInput={userInput} setUserInput={setUserInput} showProducts={showProducts} filteredProducts={filteredProducts}/>
      <MenuContainer currentSale={currentSale} filteredProducts={filteredProducts}/>
    </div>
  );
}

export default App;
