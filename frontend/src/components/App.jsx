// Libs
import React, { useEffect, useState } from "react";

// Components
import Header from './Header'
import ArgoForm from './ArgoForm'
import ArgoList from "./ArgoList";
import Footer from './Footer'
import API from '../api';

function App() {
  const [data, setData] = useState([])

  // FETCH : GET
  useEffect(() => {
    const fetchData = async () => {
      //const result = await axios( API_URL, );
      const result = await API.get();
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
