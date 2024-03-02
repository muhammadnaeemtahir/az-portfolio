import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';

import Ebooks from '../../data/Ebooks.json'

import thumbnail1 from '../../assets/mockups/recruitment-excellence-guidebook.png'
import thumbnail2 from '../../assets/mockups/financial-mastery-guide.png'
import thumbnail3 from '../../assets/mockups/crypto-insights-handbook.png'
import thumbnail4 from '../../assets/mockups/hiring-mastery-guide.png'
import thumbnail5 from '../../assets/mockups/empowerment-blueprint.png'
import thumbnail6 from '../../assets/mockups/business-credit-blueprint.png'
import thumbnail7 from '../../assets/mockups/hebrew-kids-stories-workbook.png'
import thumbnail8 from '../../assets/mockups/nutrifit-guide.png'
import thumbnail9 from '../../assets/mockups/nourish-and-thrive.png'

const EbooksDesigning = () => {

    const placerholders = {
        1: thumbnail1,
        2: thumbnail2,
        3: thumbnail3,
        4: thumbnail4,
        5: thumbnail5,
        6: thumbnail6,
        7: thumbnail7,
        8: thumbnail8,
        9: thumbnail9,
    }

    const heroContent = {
        title: 'eBooks Designing',
        subtitle: `I have designed eBooks for various clients in different niches. I have designed eBooks for
         clients in the following niches:`,
    };

    return (
        <>
            <Hero content={heroContent} />
            <section className='my-5'>
                <div className="container portfolio">
                    <div className="row">
                        {
                            Ebooks && Ebooks.length >= 0 &&
                            Ebooks.map((ebook, id) => (
                                <div className="col-md-4 col-sm-6 col-12 mb-3" key={ebook.id}>
                                    <Link to={`/ebook-details/${ebook.id}`}>
                                        <div className="portfolio-item mx-auto card ebook-card">
                                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                                <div className="portfolio-item-caption-content text-center text-white">
                                                    {ebook.title} <i className="fas fa-arrow-right"></i>
                                                </div>
                                            </div>

                                            <img
                                                src={placerholders[id + 1]}
                                                alt={ebook.title}
                                                className="img-fluid rounded ebook-img w-100"
                                                style={{ objectFit: 'cover', height: '280px' }}
                                                loading="lazy"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default EbooksDesigning;
