import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import './App.css';
import { IconButton } from '@mui/material';

function App() {

   const [ quote, setQuote ] = useState('');
   const [ author, setAuthor ] = useState('');
   const [ genre, setGenre ] = useState('');


   const getQuote = async () => {

     let arrayOfQuotes = [];

     try {
      const data = await axios.get ('https://quote-garden.herokuapp.com/api/v3/quotes/random')
        arrayOfQuotes = data.data.data
        //this gives us our array of quotes
        console.log(arrayOfQuotes)
        // let randomNum = Math.floor(Math.random() * arrayOfQuotes.length)
        //randomization: this is iterating a random number from 0 to length of array, this gives us a random number..
        let randomQuote = arrayOfQuotes[0];
        // accessing a random quote responding with that random number
        setQuote(randomQuote.quoteText)
        setAuthor(randomQuote.quoteAuthor)
        setGenre(randomQuote.quoteGenre);

     } catch (error) {
      console.log(error);
     }
    
   };

   useEffect(() => {
        getQuote();
   }, [])

    
  return (
    <div className="app">
        <div className='random' > 
            <IconButton  onClick={getQuote}>
                <h6>random</h6>
                <AutorenewIcon />
                </IconButton>
        </div>
              <Card quote={quote} author={author} genre={genre} />
              
    </div>
  );
}

export default App;
