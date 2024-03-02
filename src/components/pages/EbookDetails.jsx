import { Link, useParams } from "react-router-dom"
import projects from '../../data/Ebooks.json'

const EbookDetails = () => {

    const { id } = useParams();
    const project = projects.find(project => project.id === id);
    console.log(project.thumbnail)
    if (!project) { return <h1>Project not found</h1> }

    return (
        <>
            <div className="container py-5 my-5">
                <section className="py-5 my-5">
                    <img src={project.thumbnail} />
                    <h1 className="mb-0 text-center">{project.title}</h1>
                    <p>{project.language}</p>
                    <p>{project.description}</p>
                    <p>Formats: {project.formats.join(', ')}</p>
                    <p>Deliverables: {project.deliverables}</p>
                    <img src={project.thumbnail} alt="Thumbnail" />
                    {
                        project.images && project.images >= 1 &&
                        project.images.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index + 1}`} />
                        ))}

                </section>
            </div>
        </>
    )
}

export default EbookDetails