import React from 'react';
import './SingleSurah.css' ;

const SingleSurah = ({surah}) => {
  console.log(surah);
  const {englishName, numberOfAyahs, number,  revelationType} = surah ;
  return (
    <div className='singleSurah'>
     
    <h3> <span>{number}.</span> {englishName}</h3>
   
   <b> <p> Revelation: {revelationType}</p></b>
   <p>Number of Ayahs: {numberOfAyahs}</p>
    </div>
  );
};

export default SingleSurah;