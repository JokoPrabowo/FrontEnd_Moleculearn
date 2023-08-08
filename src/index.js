import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Store from "./redux/Store";
import {
  Home, SignUp, Learn, 
  Suba, Subb, Subba, Subc, Subca, Subcb, Subd, Subda, Subdb, Subdc, Subdd, Subde, Subdf, Summary,
  Quiz, Pretest, Train
} from "./component";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/daftar' element={<SignUp/>}/>
          <Route path='/materi' element={<Learn/>}/>
          <Route path='/latihan' element={<Train/>}/>
          <Route path='/kuis' element={<Quiz/>}/>
          <Route path='/pretest' element={<Pretest/>}/>
          <Route path='/materi/pengantar' element={<Suba/>}/>
          <Route path='/materi/atom_stabil_&_tidak_stabil/1' element={<Subb/>}/>
          <Route path='/materi/atom_stabil_&_tidak_stabil/2' element={<Subba/>}/>
          <Route path='/materi/ikatan_ionik/1' element={<Subc/>}/>
          <Route path='/materi/ikatan_ionik/2' element={<Subca/>}/>
          <Route path='/materi/ikatan_ionik/3' element={<Subcb/>}/>
          <Route path='/materi/ikatan_kovalen/1' element={<Subd/>}/>
          <Route path='/materi/ikatan_kovalen/2' element={<Subda/>}/>
          <Route path='/materi/ikatan_kovalen/3' element={<Subdb/>}/>
          <Route path='/materi/ikatan_kovalen/4' element={<Subdc/>}/>
          <Route path='/materi/ikatan_kovalen/5' element={<Subdd/>}/>
          <Route path='/materi/ikatan_kovalen/6' element={<Subde/>}/>
          <Route path='/materi/ikatan_kovalen/7' element={<Subdf/>}/>
          <Route path='/materi/rangkuman' element={<Summary/>}/>
          <Route path='/tes' 
          // element={}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
