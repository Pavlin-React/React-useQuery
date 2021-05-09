import { useState } from "react";
import Navbar from "./components/Navbar";


function App() {

  let [page, setPage] = useState( '' )

  return (
    <div className="App">
      <h1>Star wars info</h1>
      <Navbar />
      <div className="content">
        
      </div>
    </div>
  );
}

export default App;
