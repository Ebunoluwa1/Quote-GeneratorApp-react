import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Card from './Card';
import './App.css';

function App() {

   const [ quote, setQuote ] = useState('');
   const [ author, setAuthor ] = useState('');
   const [ genre, setGenre ] = useState('');

   const [visible, setVisible ] = useState(2);

   const getQuote = async () => {

     let arrayOfQuotes = [];

     try {
      const data = await axios.get ('https://quote-garden.herokuapp.com/api/v3/quotes')
        arrayOfQuotes = data.data.data
        //this gives us our array of quotes
           console.log(arrayOfQuotes)
        let randomNum = Math.floor(Math.random() * arrayOfQuotes.length)
        //radomization: this is iterating a random number from 0 to length of array, this gives us a random number..
        let randomQuote = arrayOfQuotes[randomNum];
        // accessing a random quote responding with that random number
        setQuote(randomQuote.quoteText)
        setAuthor(randomQuote.quoteAuthor)
        setGenre(randomQuote.quoteGenre);

    //     const loadMore = (quote) => {
    //         const load = quote.slice(0, visible).map(randomQuote) 
    //           return ((visible < quote.length) &&
    //            setVisible(visible + 2) )
    //  }
       
     } catch (error) {
      console.log(error);
     }
    
   };

   useEffect(() => {
        getQuote();
   }, [])

    
  return (
    <div className="app">
        <Card quote={quote} author={author} genre={genre} getQuote={getQuote}  />
    </div>
  );
}

export default App;
