import { useEffect, useState, useRef } from "react";

import * as C from "../../styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/static/shoes.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth + 150;
  };

  if (!data || !data.length) return null;

  if (carousel.current !== null) {
    console.warn(carousel.current.offsetWidth, "dsysdgysdg");
  }
  return (
    <C.Container>
      <C.Carousel>
        <div className="carousel" ref={carousel}>
          {data.map(({ id, name, price, oldPrice, image }) => (
            <C.Item key={id}>
              <C.Title>
                <h3>Título do Evento..</h3>
              </C.Title>
              <C.Info>
                <p>
                  Lorem ipsum turpis conubia turpis cubilia viverra est netus
                  lectus neque nullam dictumst lorem, hendrerit ad litora nam
                  turpis hac iaculis sit vitae viverra tellus. donec a tempus
                  nibh leo metus ac sem pulvinar nulla, et integer vestibulum
                  quis suscipit massa per cras, mattis ultrices cras adipiscing
                  sagittis dictum dolor lectus.
                </p>
              </C.Info>
              <aside>
                <button>Saiba mais</button>
              </aside>
            </C.Item>
          ))}
        </div>
        <C.Button onClick={handleLeftClick}>
          <MdKeyboardArrowLeft />
        </C.Button>
        <C.Button onClick={handleRightClick}>
          <MdKeyboardArrowRight />
        </C.Button>
      </C.Carousel>
    </C.Container>
  );
}

export default App;
