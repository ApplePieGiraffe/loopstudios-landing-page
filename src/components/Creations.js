function Creations() {
    let cards = [
        {title: 'Deep Earth', mobileImg: './img/mobile/image-deep-earth.jpg', desktopImg: './img/desktop/image-deep-earth.jpg', alt: 'earth from space'},
        {title: 'Night Arcade', mobileImg: './img/mobile/image-night-arcade.jpg', desktopImg: './img/desktop/image-night-arcade.jpg', alt: 'arcade at night'},
        {title: 'Soccer Team VR', mobileImg: './img/mobile/image-soccer-team.jpg', desktopImg: './img/desktop/image-soccer-team.jpg', alt: 'man playing soccer'},
        {title: 'The Grid', mobileImg: './img/mobile/image-grid.jpg', desktopImg: './img/desktop/image-grid.jpg', alt: 'sports car'},
        {title: 'From Up Above VR', mobileImg: './img/mobile/image-from-above.jpg', desktopImg: './img/desktop/image-from-above.jpg', alt: 'arial view of mountain road'},
        {title: 'Pocket Borealis', mobileImg: './img/mobile/image-pocket-borealis.jpg', desktopImg: './img/desktop/image-pocket-borealis.jpg', alt: 'aurora borealis'},
        {title: 'The Curiosity', mobileImg: './img/mobile/image-curiosity.jpg', desktopImg: './img/desktop/image-curiosity.jpg', alt: 'rover on Mars'},
        {title: 'Make It Fisheye', mobileImg: './img/mobile/image-fisheye.jpg', desktopImg: './img/desktop/image-fisheye.jpg', alt: 'fisheye effect'},
    ]

    return (
        <section className="creations">
            <div className="content-wrapper creations__content-wrapper">
                <h3 className="creations__heading">Our Creations</h3>
                <div className="creations__grid">
                    {cards.map((card) => (
                        <a href="." className="creation-card">
                            <figure>
                                <picture>
                                    <source media="(max-width: 999px)" srcset={card.mobileImg}/>
                                    <img className="creation-card__img" src={card.desktopImg} alt={card.alt}/>
                                </picture>
                                <figcaption>{card.title}</figcaption>
                            </figure>
                        </a>
                    ))}
                </div>
                <a href="." className="creations__link">See All</a>
            </div>
        </section>
    );
}

export default Creations;
