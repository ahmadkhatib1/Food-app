import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { DetailsWapper, Button, Info } from './Styledpages';

const Recipe = () => {
    const [detailes, setdetailes] = useState({});
    const [activetab, setActivetab] = useState('Instructions');
    const [isReadMore, setIsReadMore] = useState(true);
    const [loading, setLoading] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    let params = useParams();
    const fetshDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_URL}`);
        const result = await data.json();
        setdetailes(result);
    }
    useEffect(() => {
        const loadData = async () => {
            await new Promise((r) => setTimeout(r, 2000));
            setLoading((loading) => !loading);
        };
        loadData();
    }, [])
    useEffect(() => {
        fetshDetails();
        console.log(detailes);
    }, [params.name])
    if (loading) {
        return <div>Loading....</div>
    } else {
        return (
            <DetailsWapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <h2>{detailes.title}</h2>
                    <motion.img
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: '-100vh', opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{
                            scale: [1, 0.8, 1],
                            transition: {
                                duration: 1
                            },
                            rotate: [1, 20, -20, 1],
                        }}
                        src={detailes.image} alt={detailes.title} />
                </div>
                <Info
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Button className={activetab === 'Instructions' ? 'active' : ''} onClick={() => setActivetab('Instructions')} >Instructions</Button>
                    <Button className={activetab === 'Ingredients' ? 'active' : ''} onClick={() => setActivetab('Ingredients')}>Ingredients</Button>
                    {activetab === 'Instructions' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.5 }}  >
                            {isReadMore ? <h3 dangerouslySetInnerHTML={{ __html: detailes.instructions.slice(0, 200) }} ></h3> : <h3 dangerouslySetInnerHTML={{ __html: detailes.instructions }}></h3>}
                            {isReadMore ? <h3 dangerouslySetInnerHTML={{ __html: detailes.summary.slice(0, 200) }} ></h3> : <h3 dangerouslySetInnerHTML={{ __html: detailes.summary }}></h3>}
                            <span onClick={toggleReadMore} >
                                {isReadMore ? "...read more" : " show less"}
                            </span>
                        </motion.div>
                    )}
                    {
                        activetab === 'Ingredients' && (
                            <motion.ul
                                initial={{ x: '-100vw', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: '100vw', opacity: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                {
                                    detailes.extendedIngredients.map((el) => (
                                        < li key={el.id} > {el.original}</li>
                                    ))
                                }
                            </motion.ul>)
                    }
                </Info>
            </DetailsWapper >
        )
    }
}

export default Recipe;