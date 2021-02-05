import Header from './Header';

function Hero() {
    return (
        <div className="header-hero-container">
            <Header />
            <section className="hero">
                <div className="content-wrapper hero__content-wrapper">
                    <h1 className="hero__heading">Immersive Experiences That <span>Deliver</span></h1>
                </div>
            </section>
        </div>
    )
}

export default Hero;