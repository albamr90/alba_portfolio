
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <section id="about" className="bg-dark text-white" style={{ paddingTop: '-100px', fontFamily: 'Montserrat, sans-serif' }}>
    
      <div className="container text-center">
        <h2 style={{ marginBottom: '50px', color:'floralwhite' }}>About Me</h2>
      </div>

      <div className="container"  style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        <div className="row">
          
          <div className="col-md-6 p-4">
            <h4 style={{ color: 'floralwhite' }}>
              Welcome to my Professional Portfolio! Let me share a bit about myself</h4>
            <p style={{ color: 'beige', textAlign: 'justify', marginbottom: "90px" }}>
            <br />
            I was born in Figueres (1990), in northern Catalonia. At 18 I moved to Barcelona to study Linguistics.
            During my studies, I had the chance to spend 10 months on an exchange program in Essen, Germany, 
            where I improved my German and gained intercultural skills.
            <br /><br />
            After some time back in Barcelona, I realized that the field I had studied didn't fully excite me, aside 
            from my passion for the German language. So in 2018 I made a bold choice to move to Germany to refresh 
            my German skills and explore new career options. Berlin was a bit of a spontaneous pick, driven by cheap 
            flights but what started as a short stay has turned into nearly seven years in a city I now call home.
            <br /><br />
              To support myself as I figured things out, I spent several years working in the hospitality industry. 
              Although unrelated to my studies this gave me valuable skills like adaptability, teamwork and 
              problem-solving. When the COVID-19 pandemic hit it felt like the perfect moment to pivot my career and 
              explore something completely new.
              <br /><br />
              Recognizing the growing role of technology I decided to dive into the world of IT. I completed training in key 
              technologies such as JavaScript, React, Python and Git. I’ve also gained hands-on experience in the Linux environment and SQL. 
              This journey has not only allowed me to develop strong technical skills but also reinforced my passion for continuous learning and growth.
              I’m now excited to explore new opportunities in the programming field, where I can contribute, continue to learn and grow within a dynamic team.
            </p>
          </div>

          <div className="col-md-6 p-4 d-flex justify-content-center align-items-start" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
            <img 
              src="\Alba2.jpg"
              alt="Your Description" 
              className="img-fluid" 
              style={{ display: "flex", width: '100%', maxHeight: '700px', objectFit: 'cover' }} 
            />



          </div>
        </div>
      </div>
      <div className="border-bottom border-light my-4" style={{ width: '80%', margin: '0 auto' }} ></div>
    </section>
  );
}

export default About;
