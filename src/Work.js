import 'bootstrap/dist/css/bootstrap.min.css'; 

function Work () {

    return (
      <section id="Work" className="bg-dark text-white py-5 py-0 mt-1 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
     
          <div className="container text-center p-4">
            <h2 style={{ marginTop: "-70px", marginBottom: '20px', color:'floralwhite' }}>Work Experience</h2>
          </div>

          <div className="container">
          <div className="row">
          <div className="col-md-6 p-4" style={{ marginLeft: '20%' }}>
          <p style={{ color: 'beige', textAlign: '', marginBottom: '90px', marginleft: "150px"}} className="text-start">
            <h5 style={{ marginBottom: '20px', color: 'floralwhite' }}>06/2023 - 10/2023</h5>
            <br />
            Workstudent at Menzel IT GmbH Berlin (DE)
            <br />
            <br />
            <br />
            <h5 style={{ marginBottom: '20px', color: 'floralwhite' }}>12/2018 - 10/2020</h5>
            <br />
            Front Office Agent, Catalonia Berlin Mitte Hotel (DE)
            <br />
            <br />
            <br />
            <h5 style={{ marginBottom: '20px', color: 'floralwhite' }}>08/2018 - 10/2018</h5>
            <br />
             Front Office Agent, Hotel Lux11 Berlin (DE)
            <br />
            <br />
            <br />
            <h5 style={{ marginBottom: '20px', color: 'floralwhite' }}>03/2016-02/2018,</h5>
            <br />
             Waitress, Fabrica Moritz Barcelona (SP)
          </p>
          </div>
        <div className="col-md-6 p-4 d-flex justify-content-center align-items-start">
        </div>
          </div>
           </div>
            <div className="border-bottom border-light my-4" style={{ width: '80%', margin: '0 auto' }} ></div>
            </section>
    );
}


export default Work;