import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Hero';
import KDPbooksData from '../../data/KDPbooks.json';

const KDPDesigns = () => {
    const [thumbnails, setThumbnails] = useState({});

    useEffect(() => {
        const importThumbnails = async () => {
            const thumbnailsObject = {};
            for (const kdpbook of KDPbooksData) {
                try {
                    const thumbnailModule = await import(`../../assets/${kdpbook.thumbnail}`);
                    thumbnailsObject[kdpbook.id] = thumbnailModule.default;
                } catch (error) {
                    console.error(`Error importing thumbnail for ${kdpbook.id}:`, error);
                }
            }
            setThumbnails(thumbnailsObject);
        };

        importThumbnails();
    }, []);

    const heroContent = {
        title: 'KDP Books Designing',
        subtitle: `I have designed KDP books for various clients in different niches. I have designed eBooks for clients in the following niches:`,
    };

    return (
        <>
            <Hero content={heroContent} />
            <section className='container my-5'>
                <div className="row">
                    {KDPbooksData.map((kdpbook, index) => (
                        <div className="col-md-4 col-sm-6 col-12 mb-3" key={index}>
                            <Link to="#">
                                <div className="portfolio-item mx-auto card ebook-card">
                                    <img
                                        src={thumbnails[kdpbook.id] || ''}
                                        alt={kdpbook.title}
                                        className="img-fluid rounded ebook-img"
                                        style={{
                                            objectFit: 'cover',
                                            height: '280px',
                                        }}
                                        loading='lazy'
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default KDPDesigns;
