/* Pegue o horário atual e dependendo do horário, printe uma mensagem no console, 
   dizendo boa madrugada, bom dia, boa tarde ou boa noite
*/

const date = new Date
const currentTime = date.getHours();

if(currentTime >= 0 && currentTime < 4){
    console.log('Boa madrugada!');
} 
else if(currentTime >= 4 && currentTime < 12){
    console.log('Bom dia!');
} 
else if(currentTime >= 12 && currentTime < 18){
    console.log('Boa tarde!');
} 
else {
    console.log('Boa noite!')
}


