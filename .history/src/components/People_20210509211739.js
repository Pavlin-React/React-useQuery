import { useQuery } from "react-query";
import Person from './'


let fetchPeople = async () => {
  let res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

const People = () => {
  let { data, status } = useQuery("people", fetchPeople);
  console.log(data);

  return (
    <div>
      <h2>People</h2>
      {/* <p>{ status }</p> */}

      {status === "error" && <div>Error</div>}

      {status === "loading" && <div>Loading</div>}

      {status === "success" && (
        <div>
          { data.results.map(person => <Person key={ person.name } person={ person } />) }
        </div>
      )}
    </div>
  );
};

export default People;
