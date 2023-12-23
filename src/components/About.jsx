import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row">
                        <div className="col-12 mx-auto">
                            <p className="lead">
                                Hello! I'm Abeera Zafar🙋, a freelancer with three years of experience in the world of entrepreneurship. Let's go back to October 2020, when I started freelancing, just out of curiosity and a desire to learn. Little did I know that this exploration would turn into a significant professional journey.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <Link className="btn btn-xl btn-outline-light" to="/blogs">
                            Read More
                            <i className="fas fa-arrow-right ms-2"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About