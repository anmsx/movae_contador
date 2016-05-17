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

var sponsor = getUrlVar('s') || '';

if(Cookies.get('sponsor') === undefined || Cookies.get('sponsor') == '' || Cookies.get('sponsor') != sponsor) {
  Cookies.set('sponsor', sponsor);
}

$('.evcadastro').attr('href', evURL('cadastro'));
$('.evlogin').attr('href', evURL('login'));

