import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";
import style from "../App.module.css";

const SongDetails = ({ lyric, bio, setLoading }) => {
  return (
    <>
      {bio ? (
        <>
        {setLoading(false)}
          <h2 className={style.subtittle}>Resultados</h2>
          <div className={style.details}>
            <SongLyrics  lyric={lyric} />
            <br />
            <SongArtist bio={bio} />
          </div>
        </>
      ) : null}
    </>
  );
};

export default SongDetails;
