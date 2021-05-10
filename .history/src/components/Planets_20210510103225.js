import { useState } from "react";
import { useQuery as usePaginatedQuery } from "react-query";
import Planet from './Planet'


let fetchPlanets = async (key, page) => {
  
  let res = await fetch('http://swapi.dev/api/planets/');
  return res.json();
};

const Planets = () => {
  let [page, setPage] = useState(1)
  let { resolvedData,
        latestData,
        status } = usePaginatedQuery(["planets", page], fetchPlanets);
  

  return (
    <div>
      <h2>Planets</h2>
      {/* <p>{ status }</p> */}

      {status === "error" && <div>Error</div>}

      {status === "loading" && <div>Loading</div>}

      {status === "success" && (
        <div>
          { resolvedData.results.map(planet => <Planet key={ planet.name } planet = { planet } />) }
        </div>
      )}
    </div>
  );
};

export default Planets;
