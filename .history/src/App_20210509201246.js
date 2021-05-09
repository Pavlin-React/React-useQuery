import { useState } from "react";
import Navbar from "./components/Navbar";
import Planets from './components/Planets'
import People from './components/People'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


function App() {

  let [page, setPage] = useState( 'planets' )

  return (
    <div className="App">
      <h1>Star wars info</h1>
      <Navbar setPage = { setPage }/>
      <div className="content">
        { page === 'planets' ? <Planets /> : <People /> }
      </div>
    </div>
  );
}

export default App;
