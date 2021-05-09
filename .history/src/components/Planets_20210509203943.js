import { useQuery } from "react-query";

let fetchPlanets = async () => {
  let res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  let { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);

  return (
    <div>
      <h2>Planets</h2>
      {/* <p>{ status }</p> */}

      {status === "error" && <div>Error</div>}

      {status === "loading" && <div>Loading</div>}

      {status === "success" && }
    </div>
  );
};

export default Planets;
