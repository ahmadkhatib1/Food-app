import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Wapper, Card, Gradiant } from './StyledComponents';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Link } from 'react-router-dom';
const Veggie = () => {
  const [veggie, setveggie] = useState([])
  useEffect(() => {
    getveggie();
  }, [])

  const getveggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setveggie(JSON.parse(check))
    } else {

      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_URL}&number=10&tags=vegetarian`);
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes))
      setveggie(data.recipes);
    }

  }
  return (
    <Wapper>
      <h3>Our Vegetarin picks</h3>
      <Splide options={{
        perPage: 3,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '5rem',
      }} >
        {
          veggie.map((rec) => {
            return (
              <SplideSlide key={rec.id}>
                <Link to={'/recipe/' + rec.id} >
                  <Card
                    whileHover={{
                      y: [0, 15, -15, 0],
                    }}
                  >
                    <p>{rec.title}</p>
                    <img
                    src={rec.image}
                     alt={rec.title} />
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

export default Veggie