const Navbar = ( { setPage } ) => {
  return (
    <nav>
      <button onClick={ setPage( 'planets' ) }>Planets</button>
      <button onC>People</button>
    </nav>
  );
}
 
export default Navbar