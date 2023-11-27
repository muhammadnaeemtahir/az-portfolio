import React from 'react'

const Hero = () => {
    return (
        <>
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">

                    <img className="masthead-avatar mb-5" src="./src/assets/img/profile-pic.png" alt="abeera zafar's image" />

                    <h1 className="masthead-heading text-uppercase mb-0">Abeera Zafar</h1>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <p className="masthead-subheading font-weight-light mb-0">Transforming Ideas into Engaging Designs, Compelling Social Media Content, <br /> and Polished Writing Across All Niches.</p>
                </div>
            </header>
        </>
    )
}

export default Hero