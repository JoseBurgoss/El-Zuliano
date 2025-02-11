import { Link, useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";


export default function AllTopStories() {
    const apiKey = "GWFtnxTfQA1MIzIwPFiIxpMC5VHO6Xl9";
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { section } = location.state;
    const [allTopStories, setAllTopStories] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`);
                setAllTopStories(response.data.results);
            } catch (error) {
                console.log('Error in fetching all top stories:', error.message);
            } finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [section, apiKey]);

    const handleBack = () => {
        navigate(-1)
    }

    const capitalizeText = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    

    return (
        <>
        <Helmet>
            <title>Noticias Populares - El Zuliano</title>
            <meta name="description" content="¡Historias increíbles de todo el mundo!" />
        </Helmet>
        {loading ? (
            <span className="loader"></span>
        ) : (
        <div>
            <div className="articles-header">
                <button type='button' className='back-button' onClick={handleBack}>
                    <img src='/arrow-left.png'></img>
                </button>
                <h2>Noticias Populares - {capitalizeText(section)}</h2>
            </div>

            <div className="articles-container">
                {allTopStories.map((article, index) => {
                    const dateString = article.published_date
                    const dateOnly = dateString.split("T")[0];

                    return (
                        <div key={index} className='article overlay'>
                        <Link to={article.url} target="_blank" rel="noopener noreferrer">
                            <h3>{article.title}</h3>

                            <div>
                                {article.multimedia && article.multimedia.length > 0 && (
                                    <img className='article-img' src={article.multimedia[0].url} alt='article image'
                                    style={{height: '150px'}}/>
                                )}
                            </div>
                            
                            <img className='eye-icon' src='/eye.png'></img>

                            <div className='author-date'>
                                <span>{article.byline}</span>
                                <span>{dateOnly}</span>
                            </div>
                            
                            <p>{article.abstract}</p>
                        </Link>
                        </div>
                    )
                })}
            </div>
        </div>
        )}
        </>
    )
}
