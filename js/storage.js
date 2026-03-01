const LS_KEY = 'intercambios';

function saveState(){
    localStorage.setItem(LS_KEY, JSON.stringify(state));
}

function escHtml(s){
    return String(s).replace(/&/g, '&amp;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function formatDate(iso){
    if(!iso) return '-';
    const [y,m,d] = iso.split('-');
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return `${parseInt(d)} de ${months[parseInt(m)-1]} de ${y}`;
}