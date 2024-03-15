import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const cards = [
    {
        title: "Caja Popular de Tamazula",
        image: "assets/vt-conf-img-1.jpg",
    },
    {
        title: "Municipalidad de San Martín",
        image: "assets/vt-conf-img-2.jpg",
    },
    {
        title: "Siemens",
        image: "assets/vt-conf-img-3.jpg",
    },
    {
        title: "IYF Oks Soo Park",
        image: "assets/vt-conf-img-4.jpg",
    },
    {
        title: "Colegio Confluencia",
        image: "assets/vt-conf-img-5.jpg",
    },
    {
        title: "Salentien Fruit",
        image: "assets/vt-conf-img-6.jpg",
    },
    {
        title: "Congente",
        image: "assets/vt-conf-img-7.jpg",
    },
    {
        title: "Forever Living",
        image: "assets/vt-conf-img-8.jpg",
    },
    {
        title: "Club Tucuman Rugby",
        image: "assets/vt-conf-img-9.jpg",
    },
    {
        title: "Genesis Consultores",
        image: "assets/vt-conf-img-10.jpg",
    },
    {
        title: "Est. Bullo Estebanet y Torassa",
        image: "assets/vt-conf-img-11.jpg",
    },
    {
        title: "Lundbeck Argentina",
        image: "assets/vt-conf-img-12.jpg",
    },
    {
        title: "Aktio",
        image: "assets/vt-conf-img-13.jpg",
    },
];

const Slider = () => {
    return (
        <div className="parent">
            <div className="m-4 text-gray-500 text-lg font-semibold font-['Poppins']">
                Conferencias
            </div>
            <div
                className="text-indigo-950 text-3xl md:text-5xl font-bold font-['Volkhov'] capitalize mb-6"
            >
                por el mundo
            </div>
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                // draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
                className="max-w-sm lg:max-w-full"
            >
                {cards.map((card, index) => {
                    return (
                        <div className="max-w-sm" key={index}>
                            <div className="slider w-70 h-5/6 overflow-hidden rounded-md m-2 p-2">
                                <p className="font-bold text-sm m-auto p-auto text-cyan-950">{card.title}</p>
                                <img className="w-full rounded-lg shadow-md" src={card.image} />
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Slider;

