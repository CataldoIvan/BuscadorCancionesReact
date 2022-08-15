
export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const headerDefault = {
      accept: "application/json",
    };

    const controller = new AbortController();
    options.signal = controller.signal;

    options.method = options.method || "GET";
    options.header = options.header
      ? {
          ...headerDefault,
          ...options.header,
        }
      : headerDefault;
    options.body = JSON.stringify(options.body) || false;

    if (!options.body) delete options.body;

    setTimeout(() => {
      controller.abort();
    }, 4000);
    return fetch(endpoint, options)
      .then((response) =>
      response.ok
          ? response.json()
          : Promise.reject({
              err: true,
              status: response.status || "00",
              statusText: response.statusText || "Ocurrio un error en la peticion",
            })
      ).catch((err) => { return {
        err: true,
        status: err.status || "00",
        statusText: err.statusText || "Ocurrio un error en la conexion con la Api",
      }})
  };

  const get=(url,options={})=>{
    options.method="GET"
    return customFetch(url,options)
  }
  return {get}
};
