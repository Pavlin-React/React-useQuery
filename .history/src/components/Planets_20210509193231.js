import { useQuery } from 'react-query'

let fetchPlanets = async () => {
  let res = await fetch( 'http://swapi.dev/api/planets/' )
  return
}

const Planets = () => {

  le {} = useQuery( 'planets', fetchPlanets )

  return (
    <h2>Planets</h2>
  );
}
 
export default Planets;