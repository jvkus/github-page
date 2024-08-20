// Creates array of logo images.
export default function TechStack({ tags, imageStyle }) {
    const techStackItems = tags.map((tag, idx) => (
        <img 
            src={require(`../assets/${tag}-logo.png`)}
            alt={`${tag} logo`}
            style={imageStyle}
            key={idx}
        />
    )) 

    return (
        <div className='techStack'>
            {techStackItems}
        </div>
    );
}