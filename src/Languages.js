
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Languages () {

    return (
      <section id="Languages" className="bg-dark text-white py-5 py-0 mt-1 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Título centrado únicamente */}

          <div className="container text-center p-4">
            <h2 style={{ marginTop: "-70px", marginBottom: '20px', color:'floralwhite' }}>Available in...</h2>
          </div>

          <div className="container">
          <p style={{ color: 'beige', marginBottom: '90px' }}>

          <span>
          <p style={{ color: 'floralwhite',  display: 'inline' }}>German</p> - Advanced
          </span>
        <br />
        <br />
        <span>
          <p style={{ color: 'floralwhite', display: 'inline' }}>English</p> - Advanced
          </span>
        <br />
        <br />
        <span>
          <p style={{ color: 'floralwhite', display: 'inline' }}>Spanish</p> - Mother tongue
          </span>
        <br />
        <br />
        <span>
          <p style={{ color: 'floralwhite', display: 'inline' }}>Catalan</p> - Mother tongue
          </span>
        <br />
        <br />
          </p>
          </div>
            <div className="border-bottom border-light my-4"style={{ width: '90%', margin: '0 auto' }} ></div>
      </section>
    );

}


export default Languages;