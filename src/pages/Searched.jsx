import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Gride, Card } from './Styledpages';
const Searched = () => {
  let params = useParams();
  const [searched, setsearched] = useState([]);
  const getsearched = async (name) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_URL}&query=${name}`);
    const recipe = await api.json();
    setsearched(recipe.results);
  }
  useEffect(() => {
    getsearched(params.search);
  }, [params.search])
  return (
    < Gride >
      {
        searched.map((e) => {
          return (
            <Link to={'/recipe/' + e.id}>
              <Card key={e.id}>
                <img src={e.image} alt={e.title} />
                <h4>{e.title}</h4>
              </Card>
            </Link>
          );
        })
      }
    </Gride >

  )
}

export default Searched