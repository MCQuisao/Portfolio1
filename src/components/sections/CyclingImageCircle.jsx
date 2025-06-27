import { useEffect, useState } from "react";
import photo1 from "../../assets/img/photo1.jpg";
import photo2 from "../../assets/img/photo2.jpg";
import photo3 from "../../assets/img/photo3.jpg";

const images = [photo1, photo2, photo3];

export const CyclingImageCircle = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-96 h-96 rounded-full overflow-hidden border-5 border-blue-500 shadow-lg relative">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Cycle ${i}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};
