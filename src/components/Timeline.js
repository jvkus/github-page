// Built with reference to Florin Pop
// https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/
import './Timeline.css';
import { timelineData } from "../data/timeline_data";
import TechStack from "./TechStack";

// TODO: Style all this properly

const TimelineItem = ({ data }) => (
    <div className='timeline-item'>
        <div className='timeline-item-content'>
            <span className='timeline-title'>
                {data.title}
            </span>
            <time>{data.date}</time>
            {data.techTags && (
                <span>
                    <TechStack tags={data.techTags} imageStyle={{width: '20px'}} />
                </span>
            )}
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {data.link.text}
                </a>
            )}
            <span className='circle' />
        </div>
    </div>
);

export default function Timeline() {
    const timelineItems = timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx}/>
    ));

    return (
        <div className='timeline'>
            {timelineItems}
        </div>
    );
}

export function setTimelineLineHeight() {
    const timelineLineElement = document.querySelector('.timeline::after');

    const containerHeight = document.getElementById('timeline').offsetHeight;
    const firstItemHeightHalf = document.querySelector('.timeline-item:first-child').offsetHeight / 2;
    const lastItemHeightHalf = document.querySelector('.timeline-item:last-child').offsetHeight / 2;

    timelineLineElement.style.height = containerHeight - firstItemHeightHalf - lastItemHeightHalf;
    timelineLineElement.style.margin_top = firstItemHeightHalf;
}