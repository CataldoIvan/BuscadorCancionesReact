import { useState } from "react";
import swal from "sweetalert";
import style from '../App.module.css'

const SongForm = ({ handleSearch, search }) => {
  const [form, setForm] = useState({ song: "", artist: "" });

  const handleChange = (e) => {
    // console.log(`${e.target.name} busca ${e.target.value}`);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    if (form.song === "" && form.artist === "") {
      swal("", "Nada que buscar", "warning");
      return;
    }
    let nombre = capitalizarPalabras(form.artist);
    let cancion = capitalizarPalabras(form.song);
    console.log(nombre);
    console.log(cancion);
    setForm({
      ...form,
      song: capitalizarPalabras(form.song),
      artist: capitalizarPalabras(form.artist),
    });
    handleSearch({ ...form });

    clearForm();
  };
  function capitalizarPalabras(val) {
    if (val) {
      return val
        .toLowerCase()
        .trim()
        .split(" ")
        .map((v) => v[0].toUpperCase() + v.substr(1))
        .join(" ");
    } else {
      return null;
    }
  }
  const clearForm = () => setForm({ song: "", artist: "" });

  return (
    <div className={style.form}>
      <h5 className={style.subtittle}>Formulario</h5>
      <input
      className={style.input}
        type="text"
        id="song"
        name="song"
        placeholder="Cancion a Buscar"
        onChange={handleChange}
        value={form.song}
      />

      <input
      className={style.input}

        type="text"
        id="artist"
        name="artist"
        placeholder="Artista a Buscar"
        onChange={handleChange}
        value={form.artist}
      />

      <button 
      className={style.buttonSearch}
      
      onClick={handleClick}>Buscar</button>
    </div>
  );
};

export default SongForm;
