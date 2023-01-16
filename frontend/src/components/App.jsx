// Libs
import React, { useEffect, useState } from "react";
import axios from 'axios';

// Components
import Header from './Header'
import ArgoForm from './ArgoForm'
import ArgoList from "./ArgoList";
import Footer from './Footer'

function App() {
  const API_URL = 'http://localhost:3000/api'
  const [data, setData] = useState([])

  // FETCH : GET
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios( API_URL, );
      setData(result.data.argonautes);
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main>
        <ArgoForm data={data} setData={setData} />
        <ArgoList data={data} setData={setData} />
      </main>
      <Footer />
    </div>
  )
}

export default App
