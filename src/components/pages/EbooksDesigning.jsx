import { Link } from 'react-router-dom';

import Hero from '../Hero';

// import Ebook1 from '../assets/img/abeera-zafar.png';

const EbooksDesigning = () => {
    const heroContent = {
        title: 'eBooks Designing',
        subtitle: `I have designed eBooks for various clients in different niches. I have designed eBooks for
        clients in the following niches:`,
    }

    return (
        <>
            <Hero content={heroContent} />
            <section className='my-5'>
                <div className="container portfolio">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-12 mb-3">
                            <Link to="/ebook-details">
                                <div className="portfolio-item mx-auto card ebook-card">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white">
                                            Financial Empowerment Guide <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    {/* <img src={Ebook1} alt="ebook" className="img-fluid rounded ebook-img" style={{
                                        objectFit: 'cover',
                                    }} /> */}
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mb-3">
                            <Link to="/ebook-details">
                                <div className="portfolio-item mx-auto card ebook-card">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white">
                                            Explore More <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    <img src={Ebook1} alt="ebook" className="img-fluid rounded ebook-img" style={{
                                        objectFit: 'cover',
                                    }} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EbooksDesigning