import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import One from "./pages/one";
import Two from "./pages/two";
import Three from './pages/three'
import './App.css';

function App() {
  const [count,setCount] = useState(1);
  const renderCount = useRef(1)
      useEffect(()=>{
        renderCount.current = renderCount.current+1;
        console.log("랜더링 수 : ", renderCount.current)
      })
      return (
        <BrowserRouter>
                <Routes>
                    <Route path="/one" element={<One />} />
                    <Route path="/two" element={<Two />} />
                    <Route path="/three" element={<Three />} />
                </Routes>
        </BrowserRouter>
      );
    }

export default App;
