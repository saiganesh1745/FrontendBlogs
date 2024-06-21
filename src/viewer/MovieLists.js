import React, { useState, useEffect } from 'react';
import Card from './Card';
import Footer from '../main/Footer';
import {  FaArrowDown } from "react-icons/fa6";

let API_key = "&api_key=ca8888219810ad443be18f1a60ac374d";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"];

const MovieLists = () => {

    const [isAtBottom, setIsAtBottom] = useState(false);

    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    };
    

    const [movieData, setMovieData] = useState([]);
    const [urlSet, setUrl] = useState(url);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(urlSet)
            .then(res => res.json())
            .then(data => {
                setMovieData(data.results);
            });
            const handleScroll = () => {
                const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
                setIsAtBottom(isBottom);
              };
          
              window.addEventListener('scroll', handleScroll);
          
              return () => {
                window.removeEventListener('scroll', handleScroll);
              };
    }, [urlSet]);

    const getData = (movieType) => {
        let newUrl = '';
        switch (movieType) {
            case "Popular":
                newUrl = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
                break;
            case "Theatre":
                newUrl = base_url + "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22" + API_key;
                break;
            case "Kids":
                newUrl = base_url + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" + API_key;
                break;
            case "Drama":
                newUrl = base_url + "/discover/movie?with_genres=18&primary_release_year=2014" + API_key;
                break;
            case "Comedie":
                newUrl = base_url + "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" + API_key;
                break;
            default:
                newUrl = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
        }
        setUrl(newUrl);
    };

    const searchMovie = (evt) => {
        if (evt.key === "Enter") {
            let searchUrl = base_url + "/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=" + search;
            setUrl(searchUrl);
            setSearch('');
        }
    };

    return (
        <div className='bodym'>
            <div className="header1">
                <div className='navi'>
                    <ul>
                        {arr.map((value, pos) => (
                            <li key={pos}>
                                <a href="#" onClick={() => getData(value)}>{value}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <form>
                    <div className="search-btn">
                        <input
                            type="text"
                            placeholder="Enter Movie Name"
                            className="inputText"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={searchMovie}
                        />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="container">
                {movieData.length === 0 ? (
                    <p className="notfound">Not Found</p>
                ) : (
                    movieData.map((res, pos) => (
                        <Card key={pos} info={res} />
                    ))
                )}
            </div>
            <div 
        className={`scroll-bottom ${isAtBottom ? 'hidden' : ''}`} 
        onClick={scrollToBottom}
      >
        <FaArrowDown />
      </div>
            <Footer />
        </div>
    );
};

export default MovieLists;
