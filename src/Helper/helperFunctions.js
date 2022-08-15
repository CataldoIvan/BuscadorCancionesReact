 

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
export  {capitalizarPalabras}
 

