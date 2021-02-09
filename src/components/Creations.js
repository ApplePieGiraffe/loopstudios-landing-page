import { cards } from '../assets/index';

function Creations() {    
    function handleMouseMove(e) {
        let boundingBox = e.target.getBoundingClientRect();
        let halfWidth = (boundingBox.width / 2);
        let halfHeight = (boundingBox.height / 2);
        let cursorX = (e.clientX - boundingBox.left) - halfWidth;
        let cursorY = (e.clientY - boundingBox.top) - halfHeight;

        let img = e.target.querySelector('img');
        img.style.transform = `scale(1.25) translateX(${-(cursorX / (halfWidth / 10))}%) translateY(${-(cursorY / (halfHeight / 10))}%)`;

        let bgTitle = e.target.querySelector('.creation-card__bg-title');
        bgTitle.style.transform = `scale(1.25) translateX(${(cursorX / (halfWidth / 10))}%) translateY(${(cursorY / (halfHeight / 10))}%)`;
    }

    function handleMouseLeave(e) {
        let img = e.target.querySelector('img');
        img.style.transform = '';
        let bgTitle = e.target.querySelector('.creation-card__bg-title');
        bgTitle.style.transform = '';
    }

    return (
        <section className="creations">
            <div className="content-wrapper creations__content-wrapper">
                <h3 className="creations__heading">Our Creations</h3>
                <div className="creations__grid">
                    {cards.map((card) => (
                        <a href="." className="creation-card" key={card.id} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                            <div className="creation-card__wrapper">
                                <figure>
                                    <picture>
                                        <source media="(max-width: 999px)" srcset={card.mobileImg}/>
                                        <img className="creation-card__img" src={card.desktopImg} alt={card.alt}/>
                                    </picture>
                                    <figcaption>{card.title}</figcaption>
                                </figure>
                                <span className="creation-card__bg-title" aria-hidden="true">{card.title}</span>
                            </div>
                        </a>
                    ))}
                </div>
                <a href="." className="creations__link">See All</a>
            </div>
        </section>
    );
}

export default Creations;