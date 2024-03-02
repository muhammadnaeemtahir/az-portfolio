import { Link } from 'react-router-dom';
import Hero from '../Hero';
import KDPbooksData from '../../data/KDPbooks.json';

const KDPDesigns = () => {

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
                                        src={kdpbook.thumbnail}
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
