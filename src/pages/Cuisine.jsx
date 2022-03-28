import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gride, Card } from './Styledpages';
const Cuisine = () => {
    const [cuisine, setcuisine] = useState([])
    let params = useParams();
    let typeCuisine = params.type;
    useEffect(() => {
        getcuisine(typeCuisine);
        console.log(cuisine);
    }, [typeCuisine])

    const getcuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_URL}&cuisine=${name}`);
        const recipe = await api.json();
        setcuisine(recipe.results);
    }
    return (
        <Gride
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ deuration: 0.5 }}
        >
            {
                cuisine.map((cus) => {
                    return (
                        <Card
                            whileHover={{
                                scale: [1, 1.2, 1],
                                transition: {
                                    duration: 1
                                },
                                rotate: [1, 20, -20, 1],
                            }}
                            key={cus.id}>
                            <Link to={'/recipe/' + cus.id}>
                                <img src={cus.image} alt={cus.title} />
                                <h4>{cus.title}</h4>
                            </Link>
                        </Card>
                    );
                })
            }
        </Gride>
    )
}

export default Cuisine;