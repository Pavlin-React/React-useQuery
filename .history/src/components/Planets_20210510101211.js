import { useQuery } from "react-query";
import Planet from './Planet'


let fetchPlanets = async ( key, greeting, page ) => {
  console.log( greeting );
  let res = await fetch("http://swapi.dev/api/planets/" +);
  return res.json();
};

const Planets = () => {
  let { data, status } = useQuery(["planets", "hello, ninjas", 2], fetchPlanets);
  console.log(data);

  return (
    <div>
      <h2>Planets</h2>
      {/* <p>{ status }</p> */}

      {status === "error" && <div>Error</div>}

      {status === "loading" && <div>Loading</div>}

      {status === "success" && (
        <div>
          { data.results.map(planet => <Planet key={ planet.name } planet = { planet } />) }
        </div>
      )}
    </div>
  );
};

export default Planets;
