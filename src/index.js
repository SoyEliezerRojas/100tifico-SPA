import './styles/styles.css';
import router from './routes/index';

window.addEventListener('load', router); // Cuando carga
window.addEventListener('hashchange', router); // Cuando hay un cambio