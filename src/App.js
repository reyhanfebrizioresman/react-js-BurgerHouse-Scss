import React, {useState,useEffect} from "react";
import { Navbar,Hero,Products,About,Contact } from "./Components";
import './global.scss'
import { css } from '@emotion/react'
import { PropagateLoader } from "react-spinners";
function App() {
  const [loading,setLoading] = useState(false);
  const override = css`
    display: flex;
    margin-top: 16rem;
    justify-content: center;
  `;
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }, [])
  return (
    <div className="App">

      {
        loading ? <PropagateLoader color={"#3d2514"} loading={loading} size={40} css={override} />
        :
        <>
        <Navbar />
        <Hero />
        <Products />
        <About />
        <Contact />
        </>
      }
    </div>
  );
}

export default App;
