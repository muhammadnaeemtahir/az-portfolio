import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hero from '../Hero';
import Ebooks from '../../data/Ebooks.json';

const EbooksDesigning = () => {
    const [thumbnails, setThumbnails] = useState({});

    // useEffect(() => {
    //     const importThumbnails = async () => {
    //         const thumbnailsObject = {};
    //         for (const ebook of Ebooks) {
    //             try {
    //                 const thumbnailModule = await import(`../../assets/${ebook.thumbnail}`);
    //                 thumbnailsObject[ebook.id] = thumbnailModule.default;
    //             } catch (error) {
    //                 console.error(`Error importing thumbnail for ${ebook.id}:`, error);
    //             }
    //         }
    //         setThumbnails(thumbnailsObject);
    //     };

    //     importThumbnails();
    // }, []);

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
                        {Ebooks.map((ebook, index) => (
                            <div className="col-md-4 col-sm-6 col-12 mb-3" key={index}>
                                <Link to={`/ebook-details/${ebook.id}`}>
                                    <div className="portfolio-item mx-auto card ebook-card">
                                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                            <div className="portfolio-item-caption-content text-center text-white">
                                                {ebook.title} <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </div>
                                        <img
                                            src={ebook.thumbnail}
                                            alt={ebook.title}
                                            className="img-fluid rounded ebook-img"
                                            style={{
                                                objectFit: 'cover',
                                                height: '280px',
                                            }}
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
