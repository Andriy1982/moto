import React, {useRef} from 'react';
import {SliderContainer} from '@app/component/SliderComponent/SliderComponent.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type TSliderComponentProps = {
  children: React.ReactNode;
  settings: any;
  slideIndex?: number;
};

export const SliderComponent: React.FC<TSliderComponentProps> = ({
  children,
  settings,
  slideIndex = 0,
}: TSliderComponentProps) => {
  const slider = useRef();

  // useEffect(() => {
  //   // @ts-ignore
  //   slider.current.slickGoTo(slideIndex);
  // }, [slideIndex]);
  return (
    <SliderContainer>
      <Slider {...settings} ref={slider} initialSlide={slideIndex}>
        {children}
      </Slider>
    </SliderContainer>
  );
};
