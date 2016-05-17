function getUrlVar(key){
  var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
  return result && unescape(result[1]) || ""; 
}

function evURL(tipo)
{
    var s = Cookies.get('sponsor');
    if (s === undefined) {
      s = 'login';
    }
   return 'http://escritoriomovae.com/' + s + '?r=' + tipo;
}

Cookies.set('sponsor', sponsor);
var sponsor = getUrlVar('s') || '';

$('.evcadastro').attr('href', evURL('cadastro'));
$('.evlogin').attr('href', evURL('login'));

