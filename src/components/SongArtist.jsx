import { useEffect, useState } from "react";
import Slider from "./Slider";
import style from '../App.module.css'

const SongArtist = ({ bio }) => {
  const [imgSli,setImgSli]=useState(null)

  useEffect(()=>{
    if(bio && !bio.err){
      setImageSlider()
    }
  },[bio])

  const setImageSlider=()=>{
    setImgSli([
      bio.artists[0].strArtistFanart,
      bio.artists[0].strArtistFanart4,
      bio.artists[0].strArtistFanart2,
      bio.artists[0].strArtistFanart3    
    ])
  }

 
  return (
    <>
     
      {bio ? (
        !bio.err ? (
          <>
          <section className={style.sectionArt}>
            <h3 className={style.subtittle}>{bio.artists[0].strArtist}</h3>
            <Slider imagenes={imgSli}/>
            <p>{`${bio.artists[0].intBornYear} - ${bio.artists[0].intDiedYear || "Presente"} `}</p>
            <p>{`${bio.artists[0].strCountry}  `}</p>
            <p >
              <a href={`http://${bio.artists[0].strWebsite}`} target="_blank" rel="norederrer">{`http://${bio.artists[0].strWebsite}`}</a>
            </p>
            <p className={style.bio} >{`${bio.artists[0].strBiographyES}  `}</p>
          </section>
           
          </>
        ) : (
          <p>{bio.statusText}</p>
        )
      ) : null}
    </>
  );
};

export default SongArtist;
