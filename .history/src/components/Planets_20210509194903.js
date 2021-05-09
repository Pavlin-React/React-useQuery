import { useQuery } from 'react-query'

let fetchPlanets = async () => {
  let res = await fetch( 'http://swapi.dev/api/planets/' )
  return res.json()
}

const Planets = () => {

  const { data, status } = useQuery('planets', fetchPlanets)
  console.log(data);

  return (
    
  );
}
 
export default Planets;