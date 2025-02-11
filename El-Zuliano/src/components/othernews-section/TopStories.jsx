import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './othernews.css'


export default function Topstories() {
    const apiKey = "GWFtnxTfQA1MIzIwPFiIxpMC5VHO6Xl9";
    const [section, setSection] = useState('home');
    const [topStories, setTopStories] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        const fetchData = async() => {
            try{
                const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`);
                setTopStories(response.data.results.slice(0, 6))
            } catch(error){
                console.log('Error in fetching articles from top stories:', error.message)
            }
        }
        fetchData();
    }, [section, apiKey])

    const handleSectionChange = (event) => {
        setSection(event.target.value);
    };

    const handleMore = (e) => {
        e.preventDefault();
        navigate('/all-top-stories', { state: { section: section } })
    }


    return (
        <div className='b section-container'>

            <div className='articles-header' style={{margin: 0}}>
                <h2>Historias Populares</h2>
                <select value={section} onChange={handleSectionChange}>
                    <option value='home'>Hogar</option>
                    <option value='arts'>Artes</option>
                    <option value='fashion'>Moda</option>
                    <option value='business'>Negocios</option>
                    <option value='technology'>Tecnologia</option>
                    <option value='opinion'>Opiniones</option>
                    <option value='science'>Ciencia</option>
                    <option value='travel'>Viaje</option>
                    <option value='sports'>Deportes</option>
                    <option value='food'>Comida</option>
                </select>
            </div>

            <div className='main-item'>
                {topStories && topStories.map((article, index) => (
                    <div key={index} className='article overlay'>
                        <Link to={article.url} target="_blank" rel="noopener noreferrer">
                            <h4>{article.title}</h4>
                        
                            <div>
                            {article.multimedia && article.multimedia.length > 0 && (
                                <img className='article-img' src={article.multimedia[0].url} alt='article image' 
                                style={{height: '150px'}}/>
                            )}
                            </div>
            
                            <img className='eye-icon' src='/eye.png'></img>
                        </Link>
                    </div>
                ))}
            </div>

            <div className='popular-button' style={
                {display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center', 
                margin: '2rem 0'}}>
                    <button type='button' onClick={handleMore}>Mas...</button>
            </div>

        </div>
    )
}
