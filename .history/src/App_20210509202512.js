import { useState } from "react";
import Navbar from "./components/Navbar";
import Planets from "./components/Planets";
import People from "./components/People";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  let [page, setPage] = useState("planets");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star wars info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
          {/* <p>{ status }</p> */}

          { status === 'error' && (
            <div>Loading</div>
          ) }

          { status === 'error' && (
            <div>Loading</div>
          ) }

        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
