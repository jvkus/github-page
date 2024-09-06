import './LinkHub.css';
import { linkHubData } from "../data/linkhub_data";

export default function LinkHub() {
    const linkHubItems = linkHubData.map((link, idx) => 
        <a href={link.url} key={idx}>
            <img src={require(`../assets/${link.img}`)} alt={`${link.title} logo`} />
            {link.title}
        </a>
    );

    return (
        <div className='linkHub'>
            {linkHubItems}
        </div>
    );
}