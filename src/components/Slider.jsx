import React, { useEffect } from "react";
import { useState } from "react";
import style from "../App.module.css";

const Slider = ({ imagenes }) => {
    //Creo un estado para saber que imagen esta mostrandose
  const [imgActive, setImgActive] = useState(0);

  let interval
  useEffect(()=>{
    //creo la funcion para que las imagenes avancen automaticamente
    interval=setTimeout(() => {
        next()
    }, 8000)
  },[imgActive])

  const next = () => {
    //para que no se superpongan la ejecucion del timeOut, elimino el que se ejecuta
    clearTimeout(interval)
    imgActive === imagenes.length - 1? setImgActive(0): setImgActive(imgActive + 1);
  };
  const back = () => {
    clearTimeout(interval)
    imgActive === 0? setImgActive(imagenes.length - 1): setImgActive(imgActive - 1);
  };
 
  return (
    <>
      <section  className={style.containerSlider} >
        <button  className={style.back}  onClick={back}>
          ❰
        </button>

        {
        imagenes?.map((imagen, index) => {
            //solo se va a mostrar la imagen que se encuentra activa en el estado
          if (imgActive === index) return <img className={style.slider} /* className={styles.img} */ key={index} src={imagen} alt="" />;
        })
        }

        <button className={style.next} onClick={next}>
          ❱
        </button>
      </section>
      
    </>
  );
};

export default Slider;