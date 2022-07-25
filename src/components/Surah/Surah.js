import React, { useEffect, useState } from 'react';
import SingleSurah from '../SingleSurah/SingleSurah';
import './Surah.css' ;
const Surah = () => {
  const [surah, setSurah] = useState([]);

  useEffect(() =>{
    fetch('http://api.alquran.cloud/v1/surah')
    .then(res => res.json())
    .then(data => setSurah(data.data))
  }, [])
  return (
    <div>
      <h2>Al-Quran Surah:{surah.length}</h2>
     <div className='surah'>
       
     {
        surah?.map(surah => <SingleSurah surah = {surah}></SingleSurah>)
      }
     </div>
      
    </div>
  );
};

export default Surah;