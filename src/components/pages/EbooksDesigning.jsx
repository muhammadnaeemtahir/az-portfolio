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

    const placeholders = {
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
                                    <button type="button" className="card portfolio-item mx-auto ebook-card p-0" data-bs-toggle="modal" data-bs-target={`#exampleModal-${id + 1}`}>
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                {ebook.title}
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                        <img
                                            src={placeholders[id + 1]}
                                            alt={ebook.title}
                                            className="img-fluid rounded ebook-img w-100"
                                            style={{ objectFit: 'cover', height: '280px' }}
                                            loading="lazy"
                                        />
                                    </button>

                                    <div className="modal fade" id={`exampleModal-${id + 1}`} tabIndex="-1" aria-labelledby={`exampleModalLabel-${id + 1}`} aria-hidden="true">
                                        <div className="modal-dialog modal-xl">
                                            <div className="modal-content">
                                                <div className="modal-header border-0">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <img
                                                                src={placeholders[id + 1]}
                                                                alt={ebook.title}
                                                                className="img-fluid rounded ebook-img w-100"
                                                                loading="lazy"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h5 className='mb-0 text-primary'>{ebook.title}</h5>
                                                            <p>
                                                                <small className='text-secondary'>{ebook.language}</small>
                                                            </p>
                                                            <p>{ebook.description}</p>
                                                            <p className="mb-0"><strong className="text-secondary">Formats:</strong> {ebook.formats.join(', ')}</p>
                                                            <p className="mb-0"><strong className="text-secondary">Deliverables:</strong> {ebook.deliverables}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default EbooksDesigning;
