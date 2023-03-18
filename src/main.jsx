import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Overview from "./pages/Overview";
import Example from "./pages/Examples";
import Tour from "./pages/Tour";
import Blog from "./pages/Blog";
import Help from "./pages/Help";
import Welcome from "./components/Welcome";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/LOBE-CLONE/' element={<Layout></Layout>}>
         <Route index={true} element={<Overview></Overview>}></Route>
         <Route path='Example' element={<Example></Example>}></Route>
         <Route path='Tour' element={<Tour></Tour>}></Route>
         <Route path='Blog' element={<Blog></Blog>}></Route>
         <Route path='Help' element={<Help></Help>}>
            <Route index={true} element={<Welcome></Welcome>}></Route>
            <Route path='Label' element={<Welcome></Welcome>}></Route>
            <Route path='Train' element={<Welcome></Welcome>}></Route>
            <Route path='Results' element={<Welcome></Welcome>}></Route>
            <Route path='Play' element={<Welcome></Welcome>}></Route>
            <Route path='Export' element={<Welcome></Welcome>}></Route>
            <Route path='Improving' element={<Welcome></Welcome>}></Route>
            <Route path='Tips' element={<Welcome></Welcome>}></Route>
         </Route>
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
   </React.StrictMode>
);
