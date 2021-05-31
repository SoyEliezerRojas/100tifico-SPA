const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const urlAPI = id ? `${API}${id}` : API;
    //Si recib el id entonces se lo concatena a la API, sino, hará render de los personajes
    try{
        const response = await fetch(urlAPI); //Espero la respuesta de la API
        const data = await response.json();//Lo transformo a un Json
        return data;//Retorno la data 
    }catch(error){
        console.log('Fetch error ', error); //Caso de error
    };
};

export default getData;