import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const img = [
    { image: "assets/42-15889295.jpg" },
    { image: "assets/42-15889296.jpg" },
    { image: "assets/42-16452757.jpg" },
    { image: "assets/42-16452762.jpg" },
]
const Images = () => {
    return (
        <article className="mt-4 px-4">
            <div className="m-4 text-gray-500 text-lg font-semibold font-['Poppins']">
                En la cordillera
            </div>
            <div
                className="text-indigo-950 text-3xl md:text-5xl font-bold font-['Volkhov'] capitalize mb-6"
            >
                Imágenes
            </div>

            <Carousel
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                showArrows={true}
                className="relative lg:h-96 w-full h-full rounded-2xl overflow-hidden flex justify-center items-center"
                autoPlay
                renderArrowPrev={(clickHandler, hasPrev) => {
                    return (
                        <div
                            className={`${hasPrev ? 'absolute' : 'hidden'
                                } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                            onClick={clickHandler}
                        >
                            <FaArrowCircleLeft className="w-9 h-9 text-white" />
                        </div>
                    );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        <div
                            className={`${hasNext ? 'absolute' : 'hidden'
                                } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                            onClick={clickHandler}
                        >
                            <FaArrowCircleRight className="w-9 h-9 text-white" />
                        </div>
                    );
                }}
            >
                {img.map((img, index) => {
                    return (
                        <div className="w-full relative" key={index}>
                            <img className="h-full top-0 left-0 rounded-2xl object-cover object-center w-auto" src={img.image} />
                        </div>
                    );
                })}
            </Carousel>

        </article >
    );
};


export default Images;

