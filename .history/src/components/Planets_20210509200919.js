import { useQuery } from 'react-query'

let fetchPlanets = async () => {
  let res = await fetch('http://swapi.dev/api/planets/')
  return res.json()
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