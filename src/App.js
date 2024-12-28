import {RouterProvider, createBrowserRouter } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Mymap from './Pages/My_map';

const router = createBrowserRouter([
  {
    path: "/my_map",
    element: <Mymap/>
  }
]);

function App() {


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
