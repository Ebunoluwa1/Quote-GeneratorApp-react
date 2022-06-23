import React, { useEffect, useState } from 'react';
import axios from 'axios';
 import './App.css';
 import './Quote.css';
 import AutorenewIcon from '@mui/icons-material/Autorenew';
 import { Link, useParams} from "react-router-dom";
import { IconButton } from '@mui/material';


const Quote = () => {

    let { author:id } = useParams();
    const [moreQuote, setMoreQuote] = useState([])
    const [ author, setAuthor ] = useState('');

    const moreQuoteApi = async () => {
        let loadQuote = [];

        try{
      const data = await axios.get('https://quote-garden.herokuapp.com/api/v3/quotes',  { params: { author: id, limit: 3 } });
        let loadQuote = data.data.data;
        console.log(loadQuote);
        // let randomMoreNum = Math.floor(Math.random() * loadQuote.length)
 
        let randomMoreQuote = loadQuote[0];
        
        setAuthor(randomMoreQuote.quoteAuthor)
        setMoreQuote(loadQuote)
        console.log(loadQuote)
      } catch (error) {
        console.log(error);
       }
      
    }

    useEffect(() => {
      moreQuoteApi();
    }, [])

    
  return (
    <div className='quote'>
      <div className='quote__body'>
         
        <div className='random' >
         <Link to='/'>
         <IconButton>
         <h6>random</h6>
          <AutorenewIcon />
         </IconButton>
         </Link>
        </div>

        <div className='card__main'>
            <div className='card__moreInfo'>
              <div className='card__moreAuthor'><h2>{author}</h2>
              </div>
            </div>
           
            {moreQuote?.map((quote, index) => 
               (<div className='card__moreQuote' key={index}>
               <h3>
                   "{quote.quoteText}"</h3>
              
                 </div>)
            ) }
            
        </div>
        
      </div>

    </div>
  )
}

export default Quote