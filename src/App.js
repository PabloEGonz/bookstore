import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Errorpage from './components/Errorpage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index element={<Home />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="*" element={<Errorpage />}></Route>
      </Route>
    ))
  return (
    <div className="App">

      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App;
