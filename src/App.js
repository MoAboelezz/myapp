import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import product from './Product';



function App() {
  return (
    <div className="App">
      <Name name={product.name}/>
      <Price price={product.price}/>
      <Description description={product.description}/>
    </div>

  );
}

export default App;
