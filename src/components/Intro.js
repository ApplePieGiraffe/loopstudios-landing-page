function Intro() {
    return (
        <section class="intro">
            <div className="content-wrapper intro__content-wrapper">
                <picture>
                    <source media="(max-width: 799px)" srcset="./img/mobile/image-interactive.jpg"/>
                    <img className="intro__img" src="./img/desktop/image-interactive.jpg" alt="man wearing VR headset"/>
                </picture>
                <div className="intro__text">
                    <h2 className="intro__heading">The Leader In Interactive VR</h2>
                    <p className="intro__body-copy">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                </div>
            </div>
        </section>
    )
}

export default Intro;
