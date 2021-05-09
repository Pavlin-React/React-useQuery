import { useQuery } from 'react-query'

let fetchPlanets = async () => {
  let res = await fetch( 'http://swapi.dev/api/planets/' )
  return res.json()
}

const Planets = () => {

  const { data, status } = useQuery('planets', fetchPlanets)
  console.log(data);

  return (
    <div>
      <h2>Planets</h2>
      <p>{ status }</p>
    </div>
  );
}
 
export default Planets;