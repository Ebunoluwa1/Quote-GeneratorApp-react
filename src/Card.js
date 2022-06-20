import React, { useState } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { IconButton } from '@mui/material';
import './Card.css'

function Card({ quote , author, genre, getQuote  }) {
       
  return (
    <div className='card'>
        <div className='card__body'>
            <div className='card__quote'>
               <h3>"{quote}"</h3>
            </div>

            <div className='card__btn'> 
            
                <div className='card__info'>
                    <div className='card__author'> <h4>{author}</h4></div>
                    <div className='card__genre'> <small>{genre}</small></div>
                </div>
            
                <div className='card__image' >
            
                    <IconButton onClick={getQuote}>
                    <ArrowRightAltIcon className='arrow' />
                    </IconButton>
            
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Card