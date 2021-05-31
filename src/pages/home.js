import getData from '../utils/getData'; //La funcion que hace fetch a la API

const Home = async () => {

    const characters = await getData(); //Será un json con la data de todos los personajes

    const vew = `
            <div class="Characters">
                ${characters.results.map(character => 
                //itera en cada uno de los personajes recibidos
                    `
                    <article class="Characters-item">
                        <a href="#/${character.id}/">
                            <img src="${character.image}" alt="${character.name}">
                            <h2>${character.name}</h2>
                        </a>
                        
                    </article>
                `).join('')}
            </div>

    `;
    return vew;
};

export default Home;