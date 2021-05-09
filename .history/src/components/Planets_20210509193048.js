import { useQuery } from 'react-query'

let fetchPlanets = async () => {
  let res = fetch
}

const Planets = () => {

  le {} = useQuery( 'planets', fetchPlanets )

  return (
    <h2>Planets</h2>
  );
}
 
export default Planets;