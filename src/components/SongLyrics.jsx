import { useEffect, useState } from 'react';
import style from '../App.module.css'
import  {capitalizarPalabras}   from '../Helper/helperFunctions.js';
const SongLyrics = ({ lyric }) => {
  const [dataSearch,setDataSearch]=useState({})
  useEffect(()=>{
    if(lyric){
      setDataSearch({
        
        song:capitalizarPalabras(lyric.song),
        artist:capitalizarPalabras(lyric.artist)
      
      })
      
    }
  },[lyric])
  return (
    <div className={style.lyric}>
      {console.log(lyric)}
      {lyric?.err ? (
        lyric.status === 404 ? (
          "Cancion no encontrada"
        ) : (
          lyric.statusText
        )
      ) : (<>
    
       <h4>{`${dataSearch?.song} - ${dataSearch?.artist}`}</h4> 
      <p >{`${lyric?.lyrics}`}</p>
      </>
      )}
    </div>
  );
};

export default SongLyrics;
