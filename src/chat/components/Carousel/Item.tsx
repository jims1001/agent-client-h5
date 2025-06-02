import React, {ReactNode} from 'react';

interface CarouselItemProps {
  width: string;
  children: ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  const { width, children } = props;

  return (
    <div className="Carousel-item" style={{ width }}>
      {children}
    </div>
  );
};
