import { useState } from "react";
import Navbar from "./components/Navbar";
import P


function App() {

  let [page, setPage] = useState( 'planets' )

  return (
    <div className="App">
      <h1>Star wars info</h1>
      <Navbar />
      <div className="content">
        { page === 'planets' ? <Planets /> : <People /> }
      </div>
    </div>
  );
}

export default App;
