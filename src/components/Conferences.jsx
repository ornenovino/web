import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const cards = [
    {
        title: "Caja Popular de Tamazula",
        image: "../../public/assets/vt-conf-img-1.jpg",
    },
    {
        title: "Municipalidad de San Martín",
        image: "../../public/assets/vt-conf-img-2.jpg",
    },
    {
        title: "Siemens",
        image: "../../public/assets/vt-conf-img-3.jpg",
    },
    {
        title: "IYF Oks Soo Park",
        image: "../../public/assets/vt-conf-img-4.jpg",
    },
    {
        title: "Colegio Confluencia",
        image: "../../public/assets/vt-conf-img-5.jpg",
    },
    {
        title: "Salentien Fruit",
        image: "../../public/assets/vt-conf-img-6.jpg",
    },
    {
        title: "Congente",
        image: "../../public/assets/vt-conf-img-7.jpg",
    },
    {
        title: "Forever Living",
        image: "../../public/assets/vt-conf-img-8.jpg",
    },
    {
        title: "Club Tucuman Rugby",
        image: "../../public/assets/vt-conf-img-9.jpg",
    },
    {
        title: "Genesis Consultores",
        image: "../../public/assets/vt-conf-img-10.jpg",
    },
    {
        title: "Est. Bullo Estebanet y Torassa",
        image: "../../public/assets/vt-conf-img-11.jpg",
    },
    {
        title: "Lundbeck Argentina",
        image: "../../public/assets/vt-conf-img-12.jpg",
    },
    {
        title: "Aktio",
        image: "../../public/assets/vt-conf-img-13.jpg",
    },
];

const Slider = () => {
    return (
        <div className="parent">
            <div className="m-4 text-gray-500 text-lg font-semibold font-['Poppins']">
                Conferencias
            </div>
            <div
                className="text-indigo-950 text-5xl font-bold font-['Volkhov'] capitalize mb-6"
            >
                por el mundo
            </div>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {cards.map((card, index) => {
                    return (
                        <div className="max-w-sm" key={index}>
                            <div className="slider w-60 h-5/6 overflow-hidden shadow-lg">
                                <img className="w-full rounded-t-lg" src={card.image} />
                                <p className="font-bold text-l mt-4 mb-4 pb-14 text-cyan-950">{card.title}</p>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;

