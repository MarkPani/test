import Highway from '@dogstudio/highway';
import Fade from './transition';
//https://www.youtube.com/watch?v=1dJT-99KpiI
const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});
