import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './categories.css'


export default function Categories() {
  const [dropdownStates, setDropdownStates] = useState([
    { category: 'EE.UU', isOpen: false },
    { category: 'Mundo', isOpen: false },
    { category: 'Negocios', isOpen: false },
    { category: 'Cultura', isOpen: false },
    { category: 'Deportes', isOpen: false },
    { category: 'Ciencia y Tecnologia', isOpen: false },
    { category: 'Estilo de Vida', isOpen: false },
  ]);

  const dropdownRefs = useRef([]);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      for (let i = 0; i < dropdownRefs.current.length; i++) {
        if (dropdownRefs.current[i].current && !dropdownRefs.current[i].current.contains(event.target)) {
          setDropdownStates(prevStates => prevStates.map((state, index) => index === i ? { ...state, isOpen: false } : state));
        }
      }
    }
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (categoryIndex) => {
    const updatedDropdownStates = dropdownStates.map((dropdownState, index) => ({
      ...dropdownState,
      isOpen: index === categoryIndex ? !dropdownState.isOpen : false
    }));
    setDropdownStates(updatedDropdownStates);
  }

  const handleDropdownClick = (event) => {
    event.stopPropagation();
  };


  const buttonMapping = {
    'USA News': 'us',
    'Politic' : 'politics',
    'Upshot': 'upshot',
    'New York': 'nyregion',
    'Health': 'health',
    'Education': 'education',
    'Obituaries': 'obituaries',
    'Europe': 'europe',
    'Middle East': 'middleeast',
    'Africa': 'africa',
    'Americas': 'americas',
    'Asia': 'asiapacific',
    'Business': 'business',
    'Economy': 'economy',
    'Deal Book': 'dealbook',
    'Media': 'mediaandadvertising',
    'Your money': 'yourmoney',
    'Jobs': 'jobs',
    'Automotive': 'automobiles',
    'Small business': 'smallbusiness',
    'Arts': 'arts',
    'Dance': 'dance',
    'Theater': 'theater',
    'Movies': 'movies',
    'Music': 'music',
    'Art & Design': 'artanddesign',
    'TV': 'television',
    'Sport news': 'sports',
    'Soccer': 'soccer',
    'Tennis': 'tennis',
    'Baseball': 'baseball',
    'Golf': 'golf',
    'Hockey': 'hockey',
    'Football': 'profootball',
    'Basket': 'probasketball',
    'Technology': 'technology',
    'Science': 'science',
    'Climate': 'climate',
    'Personal tech': 'personaltech',
    'Energy': 'energyenvironment',
    'Space': 'space',
    'Well': 'well',
    'Style': 'style',
    'Travel': 'travel',
    'Food': 'food',
    'Real estate': 'realestate',
    'Weddings': 'weddings',
    'T Magazine': 'tmagazine'
  }


  const handleDropdownItemClick = (category, buttonName) => {
    const section = buttonMapping[buttonName];
    navigate(`/category/${category.toLowerCase()}/${buttonName.toLowerCase()}`, { state: {section} });
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='hamburger-container'>
        <button className='hamburger-button' onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src='/hamburger-close-menu.png' alt='close-menu' style={{ width: '30px' }} />
          ) : (
            <img src='/hamburger-menu.png' alt='open-menu' style={{ width: '30px' }} />
          )}
        </button>
      
      <ul className={`categories-container ${isMenuOpen ? 'open' : ''}`}>
        {dropdownStates.map((dropdownState, index) => {
          const dropdownRef = dropdownRefs.current[index] || React.createRef();
          dropdownRefs.current[index] = dropdownRef;

          return (
            <li className='category' key={index} onClick={() => toggleDropdown(index)} ref={dropdownRef}>
              <a className={`category-title ${dropdownState.isOpen ? 'colored' : ''}`}>{dropdownState.category}</a>
              {dropdownState.isOpen && (
                <ul className='dropdown' onClick={(event) => handleDropdownClick(event, index)}>
                  {dropdownState.category === 'EE.UU' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'USA News')}>Noticias de EE.UU.</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Politic')}>Politicas</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Upshot')}>Analisis de Datos</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'New York')}>Nueva York</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Health')}>Salud</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Education')}>Educacion</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Obituaries')}>Obituarios</button></li>
                    </>
                  )}
                  {dropdownState.category === 'Mundo' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Europe')}>Europa</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Middle East')}>Medio Oriente</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Africa')}>Africa</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Americas')}>Americas</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Asia')}>Asia</button></li>
                    </>
                  )}
                  {dropdownState.category === 'Negocios' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Business')}>Negocios</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Economy')}>Economia</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Deal Book')}>Transacciones Mundiales</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Media')}>Media</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Your money')}>Dinero</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Automotive')}>Automotriz</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Small business')}>Negocios Pequeños</button></li>
                    </>
                  )}
                  {dropdownState.category === 'Cultura' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Arts')}>Artes</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Dance')}>Baile</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Theater')}>Teatro</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Movies')}>Peliculas</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Music')}>Musica</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Art & Design')}>Arte & Diseño</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'TV')}>TV</button></li>
                    </>
                  )}
                  {dropdownState.category === 'Deportes' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Sport news')}>Noticias de Deportes</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Soccer')}>Futbol</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Tennis')}>Tenis</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Baseball')}>Beisbol</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Golf')}>Golf</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Hockey')}>Hockey</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Football')}>Futbol Americano</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Basket')}>Baloncesto</button></li>
                    </>
                  )}
                  {dropdownState.category === 'Ciencia y Tecnologia' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Technology')}>Tecnologia</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Science')}>Ciencia</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Climate')}>Clima</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Personal tech')}>Tecnologia Personal</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Energy')}>Energia</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Space')}>Espacio</button></li>
                    </>
                  )}
                  {dropdownState.category === 'Estilo de Vida' && (
                    <>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Well')}>Salud</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Style')}>Estilo</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Travel')}>Viajes</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Food')}>Comida</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Real estate')}>Bienes y Raices</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'Weddings')}>Bodas</button></li>
                      <li><button className='dropdown-btn' onClick={() => handleDropdownItemClick(dropdownState.category, 'T Magazine')}>Revistas</button></li>
                    </>
                  )}
                </ul>
              )}
            </li>
          );

      })}
      </ul>
      </div>

    </>
  )
}
