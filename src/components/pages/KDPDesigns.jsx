import { Link } from 'react-router-dom';
import Hero from '../Hero';
import KDPbooksData from '../../data/KDPbooks.json';

// thumbnails
import thumbnail1 from "../../assets/mockups/Amazon front back cover-kdp-1.png"
import thumbnail2 from "../../assets/mockups/Amazon front back cover-kdp-2.png"
import thumbnail3 from "../../assets/mockups/Amazon front back cover-kdp-3.png"
import thumbnail4 from "../../assets/mockups/Amazon front back cover-kdp-4.png"
import thumbnail5 from "../../assets/mockups/Amazon front back cover-kdp-5.png"
import thumbnail6 from "../../assets/mockups/Amazon front back cover-kdp-6.png"
import thumbnail7 from "../../assets/mockups/kids gaming cards-1.png"
import thumbnail8 from "../../assets/mockups/kids gaming cards-2.png"
import thumbnail9 from "../../assets/mockups/kids gaming cards-3.png"

const KDPDesigns = () => {

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
                                        src={placeholders[index + 1]}
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
