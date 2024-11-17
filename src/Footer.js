import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';



function Footer() {
  return (
    <div className="container">
      <footer className="bg-dark text-center text-white" >
        <div className="container p-4 pb-0">
          <section className="mb-4">
          
            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/alba-martinez-14478462" role="button">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/albamr90" role="button">
              <i className="fab fa-github"></i>
            </a>
          </section>

        </div>
  
        <div className="bg-dark text-center p-3" >
          
          <a className="text-white"  style={{ color: 'floralwhite',fontFamily: 'Montserrat, sans-serif' }}></a>
        <br />
        <br />
          <p style={{margintop:'30px', color: 'floralwhite',fontFamily: 'Montserrat, sans-serif'}}>This Portfolio was designed and developed with React in Visual Studio Code, enhanced with Bootstrap and deployed on Netlify for optimal performance.</p> 
        </div>
       
      </footer>
    </div>
   
  );
}

export default Footer;
