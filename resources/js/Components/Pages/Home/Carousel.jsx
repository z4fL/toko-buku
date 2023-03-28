import React from "react";
import CarouselNpm from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = () => {
  return (
    <CarouselNpm
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        all: {
          breakpoint: {
            min: 0,
            max: 1536,
          },
          items: 1,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i}>
          <img
            className="w-full h-36 sm:h-[374px] object-cover"
            src="https://source.unsplash.com/1000x500?book"
            alt={`gambar buku ${i}`}
          />
        </div>
      ))}
    </CarouselNpm>
  );
};

export default Carousel;
