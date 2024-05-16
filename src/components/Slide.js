import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './styles/images/slides/microndas.png';
import image2 from './styles/images/slides/forno.png';
import image3 from './styles/images/slides/entrega.jpg';
import image4 from './styles/images/slides/acessorios.png';
import image5 from './styles/images/slides/reforma.png';
import image6 from './styles/images/slides/novos.png';

function Slide() {
  const sliderRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(null);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleMouseEnter = (index) => {
    setFocusedIndex(index);
    sliderRef.current.slickGoTo(index);
  };

  const handleMouseLeave = () => {
    setFocusedIndex(null);
  };

  const data = [
    {
      name: 'Conserto de Microondas',
      img: image1,
      review:
        'Consertamos o seu aparelho em 30 minutos, Temos mais de 2 mil tipos de componentes para substituição imediata. Serviço com garantia e pagamento em até 3x no cartão! Busca e entrega nos contate via Telefone ou Whatsapp',
    },
    {
      name: 'Conserto de Forno Elétrico',
      img: image2,
      review:
        'Consertamos o seu forno em 4 horas. Serviço com garantia e pagamento em até 3x no cartão! Busca e entrega nos contate via Telefone ou Whatsapp',
    },
    {
      name: 'Acessórios',
      img: image4,
      review: 'Temos Pratos, Roldanas, Cruzetas, e muito mais!',
    },
    {
      name: 'Reforma',
      img: image5,
      review:
        'Se o seu aparelho é antigo e tem ferrugem, vale a pena reformar. Aparelhos antigos são mais duráveis, são mais potentes e não vazam microondas, podem durar até 30 anos ou mais ',
    },
    {
      name: 'Compra de novos',
      img: image6,
      review:
        'Temos microondas a pronta entrega de diversas marcas e modelos direto da fábrica de 110v e 220v. Também locamos microondas',
    },
    {
      name: 'Busca e Entrega',
      img: image3,
      review: 'Buscamos seu aparelho em toda Curitiba',
    },
  ];

  return (
    <div className=''>
      <div className=''>
        <Slider ref={sliderRef} {...settings}>
          {data.map((d, index) => (
            <div
              className='slide-content'
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`card-wrapper ${focusedIndex !== null && focusedIndex !== index ? 'blur' : ''}`}>
                <div className='cards'>
                  <div className='image-content'>
                    <span className='overlay'></span>
                    <div className='card-image'>
                      <img src={d.img} alt='microondas' className='card-img'></img>
                    </div>
                  </div>
                  <div className='card-content'>
                    <h2 className='tipo-serviço'>{d.name}</h2>
                    <p className='descriçao'>{d.review}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;