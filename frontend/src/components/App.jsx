// Libs
import React, { useEffect, useState } from "react";

// Components
import Header from './Header';
import ArgoForm from './ArgoForm';
import ArgoList from "./ArgoList";
import Footer from './Footer';
import Spinner from './Spinner';
import Error from './Error';
import API from '../api';

function App() {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null);

  // FETCH : GET
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await API.get("/");
        setData(result.data.argonautes);
        setError(null);
      } catch (err) {
        setError(err.message);
        //setData(null);
      } finally {
        setIsLoaded(true)
      }
    };
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main>
        <ArgoForm data={data} setData={setData} />
        { error &&  <Error message={error} /> }
        { isLoaded ? <ArgoList data={data} setData={setData} /> : <Spinner /> }
      </main>
      <Footer />
    </div>
  )
}

export default App