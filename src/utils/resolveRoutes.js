const resolveRoutes = (route)=> {
    //Recibe una ruta
    if(route.length <= 3){
        //como, segun la API, no hay menos de 1000 elementos, entonces tomo como maximo 3 caracteres
        let validRoute = route === '/' ? route : '/:id';
        //               route será un '/' o un id, segun lo que reciba 
        return validRoute;
    }

    return `/${route}`;
    //Si no es <= 3, entonces retorno lo que recibí. Ej 'About'
}


export default resolveRoutes;