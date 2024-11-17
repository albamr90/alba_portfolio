import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a
                    className="navbar-brand"
                    href="/logoal.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/logoal.jpg"
                        alt="alba"
                        style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                        }}
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://www.linkedin.com/in/alba-martinez-14478462"
                                target="_blank"
                                rel="linkedin"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://github.com/albamr90"
                                target="_blank"
                                rel="git">GitHub</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#About">About Me</a></li>
                                <li><a className="dropdown-item" href="#Education">Education</a></li>
                                <li><a className="dropdown-item" href="#Work">Work Experience</a></li>
                                <li><a className="dropdown-item" href="#Languages">Languages</a></li>
                                <li><a className="dropdown-item" href="#Languages">Projects</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
