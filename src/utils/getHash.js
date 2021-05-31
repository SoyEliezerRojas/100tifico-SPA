const getHash = ()=> 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    //Obtiene la locacion (URL) y el hash ('#') con su respectivo valor. Ej: '#/1/'
    //Uso el slice para eliminar el '#' quedando así: '/1/'
    //Transformo todo a minuscula 
    //Uso el split para convertir todo a un arreglo y elimino los '/' quedando asi: ['']['1']['']
    //Accedo a la posicion 1 (0,1,2) del array que es donde esta el id. Ej: '1'

export default getHash;