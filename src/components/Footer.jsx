import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Location</h4>
                            <p className="lead mb-0">
                                Islamabad, Pakistan
                            </p>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Around the Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://wa.link/jczjvd" target="_blank"><i className="fab fa-fw fa-whatsapp"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/aber049?mibextid=ZbWKwL" target="_blank"><i className="fab fa-fw fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/abeera-zafar/" target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="http://t.me/AbeeraZafar" target="_blank"><i className="fab fa-fw fa-telegram"></i></a>
                        </div>

                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">About Freelancer</h4>
                            <p className="lead mb-0">
                                Freelance is a free to use, MIT licensed Bootstrap theme created by
                                <a href="http://startbootstrap.com">Start Bootstrap</a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright py-4 text-center text-white">
                <div className="container">
                    {/* <small>
                        &copy; {new Date().getFullYear()} <Link to="/">Abeera Zafar</Link> | All rights reserved | eBook Design Portfolio
                    </small> */}

                    <small> &copy; {" "}
                        {
                            new Date().getFullYear()
                        }
                        {" "}
                        <Link to="/" className="text-decoration-none">Abeera Zafar</Link> {""} | All rights reserved | eBook Design Portfolio
                    </small>
                </div>
            </div>

        </>
    )
}

export default Footer