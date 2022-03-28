import React, { useEffect, useState } from 'react';
import { Card, Gradiant, Wapper } from './StyledComponents';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';

const Populaer = () => {
  const [papuler, setpapuler] = useState([])
  useEffect(() => {
    getPopulaer();
  }, [])

  const getPopulaer = async () => {
    const check = localStorage.getItem("populaer");
    if (check) {
      setpapuler(JSON.parse(check))
    } else {

      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_URL}&number=10`);
      const data = await api.json();
      localStorage.setItem("populaer", JSON.stringify(data.recipes))
      setpapuler(data.recipes);
    }

  }
  return (
    <Wapper>
      <h3>Papuler Picks</h3>
      <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '5rem',
      }} >
        {
          papuler.map((rec) => {
            return (
              <SplideSlide key={rec.id}>
                <Link to={'/recipe/' + rec.id}>
                  <Card>
                    <p>{rec.title}</p>
                    <img src={rec.image} alt={rec.title} />
                    <Gradiant />
                  </Card>
                </Link>
              </SplideSlide>
            );
          })
        }
      </Splide>
    </Wapper>
  )
}


export default Populaer;