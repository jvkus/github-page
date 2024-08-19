import React, {Suspense} from 'react';

// TODO: On hover, alt text shows

// const mapTagToSvg = (tag) => {
//     const path = '../assets/';
//     const filepath = path.concat(tag).concat('-logo.svg');
        
//     return filepath;
// }

const loadSVG = (tag) =>{
    const Component = React.lazy(() =>
        import(`../assets/${tag}-logo.svg`)
    );
    return ( <Component /> );
}


export default function TechStack({ data }) {
    console.log(data); //Def see how this gets imported. If anything npm install eslint and make sure it's not a linting issue
    // it is not. imports as a standard array
    //Dam
    const techStackItems = data.map((tag, idx) => (
        <Suspense key={idx} fallback={<div>Loading...</div>}>
            {loadSVG(tag)}
        </Suspense>

    )) 

    return (
        <div className='techStack'>
            {techStackItems}
        </div>
    );
}

//Its probably from how the data is put into the fuction
// fuck
// Element type is invalid. Received a promise that resolves to: /static/media/php-logo.43e6267309175b84b89b.svg.
// Lazy element type must resolve to a class or function.

// {loadSVG(tag)} // lol Is it this part? yeah. 
        // i am not sure how to dynamically build this list of imported components
        // Word word. Imma check it out
        // <object src={require(mapTagToSvg(tag))} />
        // <ReactSVG src={mapTagToSvg(tag)} desc={tag} key={idx} />