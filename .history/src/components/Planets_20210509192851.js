import { useQuery } from 'react-query'

let fetchPlanets = as

const Planets = () => {

  le {} = useQuery( 'planets', fetchPlanets )

  return (
    <h2>Planets</h2>
  );
}
 
export default Planets;