
import Hero from '../Hero';
import Portfolio from '../Portfolio';
import About from '../About';

const Home = () => {
    const heroContent = {
        title: 'Abeera Zafar',
        subtitle: `Transforming Ideas into Engaging Designs, Compelling Social Media Content,
        and Polished Writing Across All Niches.`,
    }
    return (
        <>
            <Hero content={heroContent} />
            <Portfolio />
            <About />
        </>
    )
}

export default Home