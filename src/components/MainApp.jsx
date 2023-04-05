import hero from "../assets/images/hero-img.png"
import designing from "../assets/images/designing.png"
import vibrant from "../assets/images/vibrant.png"
import days from "../assets/images/malayalam.png"
const Main = () => {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="hero-wrapper">
                            <div className="hero__left">
                                <h1 className="hero__left--title">Hi, I am John,
                                    Creative Technologist
                                </h1>
                                <p className="hero__left--text">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                                <button className="hero__left--btn">Download Resume</button>
                            </div>
                            <div className="hero__right">
                                <img src={hero} alt="person image" className="hero__right--img" />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="recent-wrapper">
                        <div className="container">
                            <div className="recent">
                                <div className="recent__top">
                                    <h5 className="recent__top--title">Recent posts</h5>
                                    <a href="#" className="recent__top--view">View all</a>
                                </div>
                                <div className="recent-card-wrapper">
                                    <div className="recent__card">
                                        <h3 className="recent__card--title">Making a design system from scratch</h3>
                                        <div className="recent__card--info">
                                            <span className="recent__card--info-date">12 Feb 2020</span>
                                            <span className="recent__card--info-category">Design, Pattern</span>
                                        </div>
                                        <p className="recent__card--text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    </div>
                                    <div className="recent__card">
                                        <h3 className="recent__card--title">Creating pixel perfect icons in Figma</h3>
                                        <div className="recent__card--info">
                                            <span className="recent__card--info-date">12 Feb 2020</span>
                                            <span className="recent__card--info-category">Figma, Icon Design</span>
                                        </div>
                                        <p className="recent__card--text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="featured-wrapper">
                        <div className="container">
                            <div className="featured">
                                <h5 className="featured__title">Featured works</h5>
                                <div className="featured__wrapper">
                                    <div className="featured__card">
                                        <div className="featured__card--left">
                                            <img src={designing} alt="designing image" className="featrued__card--left-img" />
                                        </div>
                                        <div className="featured__card--right">
                                            <div className="featured__card--right-title">Designing Dashboards</div>
                                            <div className="fearured__card--right-info"><span className="fearured__card--right-date">2020</span> <span className="featured__card--right-dashboard">Dashboard</span></div>
                                            <div className="featured__card--right-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                        </div>
                                    </div>
                                    <div className="featured__card">
                                        <div className="featured__card--left">
                                            <img src={vibrant} alt="designing image" className="featrued__card--left-img" />
                                        </div>
                                        <div className="featured__card--right">
                                            <div className="featured__card--right-title">Vibrant Portraits of 2020</div>
                                            <div className="fearured__card--right-info"><span className="fearured__card--right-date">2018</span> <span className="featured__card--right-dashboard">Dashboard</span></div>
                                            <div className="featured__card--right-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                        </div>
                                    </div>
                                    <div className="featured__card">
                                        <div className="featured__card--left">
                                            <img src={days} alt="designing image" className="featrued__card--left-img" />
                                        </div>
                                        <div className="featured__card--right">
                                            <div className="featured__card--right-title">36 Days of Malayalam type</div>
                                            <div className="fearured__card--right-info"><span className="fearured__card--right-date">2018</span> <span className="featured__card--right-dashboard">Typography</span></div>
                                            <div className="featured__card--right-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main;