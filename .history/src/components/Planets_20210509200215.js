import { useQuery } from 'react-query'

const Planets = () => {

  let { data, status } = useQuery()

  return (
    <div>
      <h2>Planets</h2>
    </div>
  );
}
 
export default Planets;