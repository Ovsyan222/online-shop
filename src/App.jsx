import ProductList from './components/Products/ProuctList'
import './index.css'

function App() {

  return (
    <div>
      <div className="welcomeBlock">
        <h1 className='welcomeHello'>Приветствуем вас в магазине техники Scheme</h1>
      </div>
      <ProductList/>
    </div>
  )
}

export default App
