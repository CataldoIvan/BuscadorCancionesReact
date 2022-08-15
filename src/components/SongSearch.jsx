import { useEffect, useState } from "react";
import Loading from "./Loading";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import { helpHttp } from "../Helper/helperFetch";
import style from "../App.module.css";
import Footer from "./Footer";
const SongSeach = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;
    const { artist, song } = search;
    let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
    let songurl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

    console.log(songurl);
    const fetchData = async () => {
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songurl),
      ]);
      /* VALIDACIONES DE EL FETCH DE ARTISTA */
      artistRes.artists === null
        ? setBio({
            err: true,
            statusText: "Nombre de Artista ingresado no encontrado",
          })
        : artistRes.err
        ? setBio({
            err: true,
            statusText: artistRes.statusText,
          })
        : setBio({ artists: artistRes.artists });
      /* VALIDACIONES DE EL FETCH DE CANCION */

      setLyric({ ...songRes });
    };
    setLoading(true);
    fetchData();
    setLoading(false);
    clearData();
    clearData();
  }, [search]);

  const handleSearch = (data) => {
    setSearch({ ...data });
    console.log(search);
  };
  const clearData = () => {
    setSearch(null);
    setLyric(null);
    setBio(null);
    setLoading(false);
  };

  return (
    <div >
      <h1 className={style.tittle}>Buscador de Canciones</h1>
      <div className={style.container}>
        {loading ? <Loading /> : null}
        <SongForm handleSearch={handleSearch} search={search} />
        <br />
        <SongDetails bio={bio} lyric={lyric} />
      <Footer/>
      </div>
    </div>
  );
};

export default SongSeach;
