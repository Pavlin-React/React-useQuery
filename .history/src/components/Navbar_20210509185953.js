const Navbar = ( { setPage } ) => {
  return (
    <nav>
      <button onClick={ setPage( 'planets' ) }>Planets</button>
      <button>People</button>
    </nav>
  );
}
 
export default Navbar