import React from 'react'
import data from './Data';
import { useState, useEffect } from 'react';

const NewsFeed = ({searchValue}) => {

    const [country,setCountry] = useState("in");
    const [category,setCategory] = useState("general");
    const [articles,setArticles] = useState(data["articles"]);
    useEffect(()=>{
    
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_API}`)
        .then(response => response.json())
        .then(data => {
            setArticles(data["articles"])
        })
        .catch(error => {
            alert(error);
        });


    },[country,category]);

    useEffect(()=>{

        
        if(searchValue)
        {
            fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${process.env.REACT_APP_API}`)
            .then(response => response.json())
            .then(data => {
                setArticles(data["articles"])
            })
            .catch(error => {
                alert(error);
            });
        }

    },[searchValue]);

    return (
        <>

            <div className='flexBox1 flexBox' >

                <button onClick={() => setCategory('general')}>GENERAL</button>
                <button onClick={() => setCategory('technology')}>TECHNOLOGY</button>
                <button onClick={() => setCategory('sports')}>SPORTS</button>
                <button onClick={() => setCategory('entertainment')}>ENTERTAINMENT</button>
                <button onClick={() => setCategory('business')}>BUSINESS</button>
                <button onClick={() => setCategory('health')}>HEALTH</button>
                <button onClick={() => setCategory('science')}>SCIENCE</button>

            </div>

            <div className='flexBox2 flexBox'>

                <button onClick={() => setCountry('in')}>INDIA</button>
                <button onClick={() => setCountry('ar')}>ARGENTINA</button>
                <button onClick={() => setCountry('au')}>AUSTRALIA</button>
                <button onClick={() => setCountry('at')}>AUSTRIA</button>
                <button onClick={() => setCountry('br')}>BRAZIL</button>
                <button onClick={() => setCountry('ca')}>CANADA</button>
                <button onClick={() => setCountry('cn')}>CHINA</button>
                <button onClick={() => setCountry('de')}>GERMANY</button>
                <button onClick={() => setCountry('eg')}>EGYPT</button>
                <button onClick={() => setCountry('fr')}>FRANCE</button>
                <button onClick={() => setCountry('hk')}>HONG KONG</button>
                <button onClick={() => setCountry('id')}>INDONESIA</button>
                <button onClick={() => setCountry('it')}>ITALY</button>
                <button onClick={() => setCountry('jp')}>JAPAN</button>
                <button onClick={() => setCountry('mx')}>MEXICO</button>
                <button onClick={() => setCountry('nz')}>NEW ZEALAND</button>
                <button onClick={() => setCountry('ru')}>RUSSIA</button>
                <button onClick={() => setCountry('sa')}>SAUDI ARABIA</button>
                <button onClick={() => setCountry('sg')}>SINGAPORE</button>
                <button onClick={() => setCountry('kr')}>SOUTH KOREA</button>
                <button onClick={() => setCountry('ch')}>SWITZERLAND</button>
                <button onClick={() => setCountry('tw')}>TAIWAN</button>
                <button onClick={() => setCountry('th')}>THAILAND</button>
                <button onClick={() => setCountry('tr')}>TURKEY</button>
                <button onClick={() => setCountry('gb')}>UNITED KINGDOM</button>

            </div>

            <div className="newsContainer">
                {articles.map((article, index) => (
                    <div className="card" key={index}>

                        {article["urlToImage"] ? <img src={article["urlToImage"]}
                            alt="" /> : <img src="https://www.rbs.ca/wp-content/themes/rbs/images/news-placeholder.png"
                                alt="" />}

                        {article["title"] ? <h3>{article["title"].slice(0, 100) + "..."}</h3> : <h3>{article["title"]}</h3>}

                        {article["description"] ? <p>{article["description"].slice(0, 100) + "..."}</p> : <p>{article["description"]}</p>}

                        <a href={article["url"]} target='_blank' rel="noreferrer"><button>Read More...</button></a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default NewsFeed;