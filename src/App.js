
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import SingleProductDetails from './Pages/SingleProductDetails/SingleProductDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/Login/RequireAuth/RequireAuth';
import AddProduct from './Pages/AddProduct/AddProduct';
import AddMyItems from './Pages/AddMyItems/AddMyItems';
import MyItems from './Pages/MyItems/MyItems';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>

        }></Route>
        <Route path='/inventory/:id' element={

          <RequireAuth>
            <SingleProductDetails></SingleProductDetails>
          </RequireAuth>

        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/addmyitems' element={

          <RequireAuth>
            <AddMyItems></AddMyItems>
          </RequireAuth>

        }></Route>
        <Route path='/myitemsPage' element={

          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>

        }></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
