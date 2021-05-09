import { useQuery } from 'react-query'
import React from 'react'
import React from 'react'

let fetchPlanets = async () => {
  let res = await fetch( 'http://swapi.dev/api/planets/' )
  return res.json()
}

const Planets = () => {

  let { data, status } = useQuery('planets', fetchPlanets)
  console.log(data);

  return (
    <h2>Planets</h2>
  );
}
 
export default Planets;