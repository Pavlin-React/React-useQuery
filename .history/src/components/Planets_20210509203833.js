import { useQuery } from 'react-query'

let fetchPlanets = async () => {
  let res = await fetch('http://swapi.dev/api/planetss/')
  return res.json()
}

const Planets = () => {

  let { data, status } = useQuery('planets', fetchPlanets)
  console.log(data);

  return (
    <div>
      <h2>Planets</h2>
      {/* <p>{ status }</p> */}

      { status === 'error' && (
            <div>Error</div>
          ) }

          { status === 'loading' && (
            <div>Loading</div>
          ) }

          { status === 'success' && (
            <div>Success</div>
          ) }
    </div>
  );
}
 
export default Planets;