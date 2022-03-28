import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { DetailsWapper, Button, Info } from './Styledpages';
const Recipe = () => {
    const [detailes, setdetailes] = useState({});
    const [activetab, setActivetab] = useState('Instructions');
    let params = useParams();
    const fetshDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_URL}`);
        const result = await data.json();
        setdetailes(result);
    }
    useEffect(() => {
        fetshDetails();
        console.log(detailes);
    }, [params.name])

    return (
        <DetailsWapper>
            <div>
                <h2>{detailes.title}</h2>
                <img src={detailes.image} alt={detailes.title} />
            </div>
            <Info>
                <Button className={activetab === 'Instructions' ? 'active' : ''} onClick={() => setActivetab('Instructions')} >Instructions</Button>
                <Button className={activetab === 'Ingredients' ? 'active' : ''} onClick={() => setActivetab('Ingredients')}>Ingredients</Button>
                {activetab === 'Instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: detailes.summary }} ></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: detailes.instructions }} ></h3>
                    </div>
                )}
                {
                    activetab === 'Ingredients' && (<ul>
                        {
                            detailes.extendedIngredients.map((el) => (
                                < li key={el.id} > {el.original}</li>
                            ))
                        }
                    </ul>)
                }
            </Info>
        </DetailsWapper >
    )
}

export default Recipe;