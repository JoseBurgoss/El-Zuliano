import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'


export default function Popular() {
    const apiKey = 'GWFtnxTfQA1MIzIwPFiIxpMC5VHO6Xl9';
    const [popular, setPopular] = useState([])
    const [period, setPeriod] = useState('1')
    const [showAllArticles, setShowAllArticles] = useState(false);
    
    useEffect(()=> {
        const fetchData = async () => {
            try{
                const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${apiKey}`)
                setPopular(response.data.results)
            } catch (error) {
                console.log('Error in fetching popular articles:', error.message)
            }
        }
        fetchData();
    }, [period, apiKey])

    const handlePeriodChange = (event) => {
        setPeriod(event.target.value);
    };
    
    const handleShowAll = () => {
        setShowAllArticles(true);
    };
    
    const handleReduce = () => {
        setShowAllArticles(false);
    };

    return (
        <>
            <div className='articles-header'>
                <h2>Articulos Mas Populares</h2>
                <select value={period} onChange={handlePeriodChange}>
                    <option value="1">Ultimo Dia</option>
                    <option value="7">Ultimos 7 Dias</option>
                    <option value="30">Ultimos 30 Dias</option>
                </select>
            </div>

            <section className='articles-container'>
                {showAllArticles ? (
                    popular.map((article, index) => (
                        <div key={index} className='article overlay'>
                            <Link to={article.url} target="_blank" rel="noopener noreferrer">
                                <h3>{article.title}</h3>
                                
                                <div>
                                {article.media && article.media.length > 0
                                    && article.media[0]['media-metadata']
                                    && article.media[0]['media-metadata'].length > 0
                                    && (
                                        <img className='article-img' src={article.media[0]['media-metadata'][2].url} alt="article image" />
                                    )}
                                </div>
                                
                                <img className='eye-icon' src='/eye.png'></img>

                                <div className='author-date'>
                                    <span>{article.byline}</span>
                                    <span>{article.published_date}</span>
                                </div>
                                <p>{article.abstract}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    popular.slice(0, 5).map((article, index) => (
                        <div key={index} className='article overlay'>
                            <Link to={article.url} target="_blank" rel="noopener noreferrer">
                                <h3>{article.title}</h3>

                                <div className='image-container'>
                                {article.media && article.media.length > 0
                                    && article.media[0]['media-metadata']
                                    && article.media[0]['media-metadata'].length > 0
                                    && (
                                        <img className='article-img' src={article.media[0]['media-metadata'][2].url} alt="Article Thumbnail"/>
                                    )}
                                </div>
                                
                                <img className='eye-icon' src='/eye.png'></img>

                                <div className='author-date'>
                                    <span>{article.byline}</span>
                                    <span>{article.published_date}</span>
                                </div>
                                <p>{article.abstract}</p>
                            </Link> 
                        </div>
                    ))
                )}

                {!showAllArticles ? (
                    <div className='popular-button'><button type='button' onClick={handleShowAll}>Mostrar Todos</button></div>
                ) : (
                    <div className='popular-button'><button type='button' onClick={handleReduce}>Reducir</button></div>
                )}

            </section>

            <hr/>
        </>
    )
}
