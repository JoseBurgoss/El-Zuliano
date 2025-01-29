import React, { useState, useEffect } from 'react';
import Popular from '../components/Popular';
import OtherNews from '../components/othernews-section/OtherNews';
import BookBestSellers from '../components/book-section/BookBestSellers';
import BookReview from '../components/book-section/BookReview';
import styles from './Home.module.css';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newMedia, setNewMedia] = useState(null);

    useEffect(() => {
        const loadingHomepage = async () => {
            try {
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            } catch (error) {
                console.log('Error during loading:', error.message);
            }
        };
        loadingHomepage();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newNewsItem = { title: newTitle, content: newContent, media: newMedia };
        setNews([...news, newNewsItem]);
        setNewTitle('');
        setNewContent('');
        setNewMedia(null);
    };

    const handleMediaChange = (e) => {
        setNewMedia(e.target.files[0]);
    };

    return (
      <>
          {loading ? (
              <span className="loader"></span>
          ) : (
              <>
                  <div className={styles.formContainer}>
                      <h2 className={styles.formTitle}>Agregar Noticia</h2>
                      <form onSubmit={handleSubmit}>
                          <input
                              className={styles.inputField}
                              type="text"
                              placeholder="Título"
                              value={newTitle}
                              onChange={(e) => setNewTitle(e.target.value)}
                          />
                          <textarea
                              className={styles.textAreaField}
                              placeholder="Contenido"
                              value={newContent}
                              onChange={(e) => setNewContent(e.target.value)}
                          ></textarea>
                          <input
                              type="file"
                              onChange={handleMediaChange}
                          />
                          <button className={styles.submitButton} type="submit">Agregar Noticia</button>
                      </form>
                  </div>
                  <div className={styles.newsContainer}>
                      <h2>Noticias</h2>
                      {news.map((newsItem, index) => (
                          <div key={index} className={styles.newsItem}>
                              <h3 className={styles.newsTitle}>{newsItem.title}</h3>
                              <p className={styles.newsContent}>{newsItem.content}</p>
                              {newsItem.media && (
                                  <img src={URL.createObjectURL(newsItem.media)} alt="Media" className={styles.newsMedia} />
                              )}
                          </div>
                            ))}
                        </div>
                    <Popular />
                    <OtherNews />
                    <BookBestSellers />
                    <BookReview />
                </>
            )}
        </>
    );
}