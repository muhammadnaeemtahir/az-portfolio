
const Portfolio = () => {
    return (
        <>
            <section className="page-section portfolio" id="portfolio">
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="./src/assets/services/1.png" alt="..." />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="./src/assets/services/2.png" alt="..." />
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="./src/assets/services/3.png" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio