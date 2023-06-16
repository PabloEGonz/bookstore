import './App.css';
import {
  createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet,
} from 'react-router-dom';
import { RiAccountCircleFill } from 'react-icons/ri';
import Home from './components/Home';
import Categories from './components/Categories';
import Errorpage from './components/Errorpage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<Errorpage />} />
      </Route>,
    ),
  );
  return (
    <div className="App">

      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => (
  <>
    <nav className="flex">
      <h1>Bookstore CMS</h1>
      <ul className="flex links">
        <li><Link className="nav-link" to="/">Books</Link></li>
        <li><Link className="nav-link" to="/categories">Categories</Link></li>
      </ul>
      <RiAccountCircleFill className="nav-icon" />
    </nav>
    <div>
      <Outlet />
    </div>
  </>
);

export default App;
