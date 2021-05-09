const Navbar = ( { setPage } ) => {
  return (
    <nav>
      <button onClick={ setPage( 'planets' ) }>Planets</button>
      <button onClick={  }>People</button>
    </nav>
  );
}
 
export default Navbar