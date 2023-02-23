import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Cyberpath.css'
import './SearchForm.js'

const Cyberpath = () => {

  //--- This is a code block for News --- //
  const [articles, setArticles] = useState([])
  const [term, setTerm] = useState('everything')
  const [isLoading, setIsLoading] = useState(true)

  useEffect (() => {
    const fetchArticles = async () =>{
    try {
        const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=stjhSgyvGMx0LZCCz2A4VdXLBQWsDrGE`)
        const articles = await res.json()
        console.log(articles.response.docs)
        setArticles(articles.response.docs)
      } catch (error) {
        console.error(error);
      }
      }
    fetchArticles();
  }, [])

  //--- This is the END of a code block for News --- //

  return (
    <div className='articles'>
      <div className='container'>
          <div className='showcase'>
            <div className='overlay'>
              <h1 className='text-4xl font-bold text-white text-center mb-4'>These are acricles about {term}</h1>
            </div>
          </div>

          <section className='grid grid-cols-1 gap-10 px-5 pt-10 pb-20'>
            {articles.map((article) => {
              const {
                abstract, 
                headline: {main}, 
                byline:{original}, 
                lead_paragraph, 
                news_desk, 
                section_name, 
                web_url, _id, 
                word_count} = article

                return (
                  <article key={_id} 
                  className="article-bg py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto">
                    <h2 className='font-bold text-2xl mb-5 lg:text-4xl'>{main}</h2>
                    <p>{abstract}</p>
                    <p>{lead_paragraph}</p>

                    <ul className='my-4'>
                      <li>{original}</li>
                      <li><span className="font-bold">News Desk: {news_desk}</span></li>
                      <li><span className="font-bold">Section Name: {section_name}</span></li>
                      <li><span className="font-bold">Words Count: {word_count}</span></li>
                    </ul>

                    <a href= {web_url} target='_blank' className='underline'>
                      Web Resources
                    </a>
                  </article>
                )
            })}
          </section>

      </div>
    </div>
  )
}

export default Cyberpath