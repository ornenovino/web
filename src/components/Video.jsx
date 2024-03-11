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

const videos = [
    {
        id: 1,
        url: "https://www.youtube.com/embed/W0FG5i6Z7tU"
    },
    {
        id: 2,
        url: "https://www.youtube.com/embed/nnGPoL3gkNg"
    },
    {
        id: 3,
        url: "https://www.youtube.com/embed/fVmUT8i4fCQ"
    },
    {
        id: 4,
        url: "https://www.youtube.com/embed/gJTzSH0SGlc"
    },
    {
        id: 5,
        url: "https://www.youtube.com/embed/dI1SIt0qC4Y"
    },
    {
        id: 6,
        url: "https://www.youtube.com/embed/1CXnPtoexHU"
    },
    {
        id: 7,
        url: "https://www.youtube.com/embed/-Ukc5yh0ZBI"
    },
    {
        id: 8,
        url: "https://www.youtube.com/embed/gTkfdnpFJX4"
    },
    {
        id: 9,
        url: "https://www.youtube.com/embed/3zpOyqDMDsY"
    },
    {
        id: 10,
        url: "https://www.youtube.com/embed/X31_OyNJVek"
    },
    {
        id: 11,
        url: "https://www.youtube.com/embed/T46NtXYQs8o"
    }
]

const videoSlider = () => {
    return (
        <article className="parent mb-10">
            <div>
                <div className="m-4 text-gray-500 text-lg font-semibold font-['Poppins']">
                    Audiovisual
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
                    {videos.map((video, index) => {
                        return (
                            <div className="max-w-sm w-full h-auto" key={index}>

                                <div className="slider w-full h-5/6 overflow-hidden p-2">
                                    <iframe className="w-full rounded-lg shadow-md" height="315"
                                        src={video.url} title={`video-${video.id}`}
                                        allowFullScreen>
                                    </iframe>

                                </div>
                            </div>

                        );
                    })}
                </Carousel>
            </div >
        </article>
    );
};
export default videoSlider;