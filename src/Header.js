import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div className="row bg-dark text-center py-4" style={{  fontFamily: 'Montserrat, sans-serif', color:'floralwhite' }}>
        <div className="col-12">
            <h1 style={{ marginBottom: '100px' }}>Perseverance pays off </h1>
        </div>
      </div>
    );
  }
  
  export default Header;