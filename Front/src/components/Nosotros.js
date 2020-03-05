import React, {Component} from "react";
import Header from "./globals/Header";
import Footer from "./globals/Footer";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

class Nosotros extends Component {
    render() {
        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              slidesToSlide: 3, // optional, default to 1.
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              slidesToSlide: 2, // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              slidesToSlide: 1, // optional, default to 1.
            },
          };
        return(
            <div>
                <div>
                    <Header />
                </div>
                <h1>Nosotros</h1>
                <p>Somos un equipo profesional enfocados en la fotografia
                Somos un equipo profesional enfocados en la fotografia
                Somos un equipo profesional enfocados en la fotografia
                Somos un equipo profesional enfocados en la fotografia
                Somos un equipo profesional enfocados en la fotografia
                Somos un equipo profesional enfocados en la fotografia
                Somos un equipo profesional enfocados en la fotografia
                Somos un equipo profesional enfocados en la fotografia
                Somos un equipo profesional enfocados en la fotografia
                Somos un equipo profesional enfocados en la fotografia
                Somos un equipo profesional enfocados en la fotografia
                </p>
                <div
                    style={{
                        paddingBottom: '30px',
                        position: 'relative'
                    }}
                >
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        renderButtonGroupOutside={false}
                        renderDotsOutside
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 1
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 1
                            }
                        }}
                        showDots
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <img
                            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />
                        <img
                            src="https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                            style={{
                                display: 'block',
                                height: '100%',
                                margin: 'auto',
                                width: '100%'
                            }}
                        />
                    </Carousel>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Nosotros;