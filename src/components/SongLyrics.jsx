import style from '../App.module.css'
const SongLyrics = ({ lyric }) => {
  return (
    <div className={style.lyric}>

      {lyric?.err ? (
        lyric.status === 404 ? (
          "Cancion no encontrada"
        ) : (
          lyric.statusText
        )
      ) : (
        <p >{`${lyric?.lyrics}`}</p>
      )}
    </div>
  );
};

export default SongLyrics;
