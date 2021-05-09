import { useQuery } from 'react-query'

let fetchPlanets = async () => {
  
}

const Planets = () => {

  let { data, status } = useQuery('planets', fetchPlanets)

  return (
    <div>
      <h2>Planets</h2>
    </div>
  );
}
 
export default Planets;