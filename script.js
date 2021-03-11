//Ville initiale
let villeChoisie = "Dubai"
recevoirTemperature(villeChoisie)

//Click boutton changer de ville
$('#changer').click( () => {
    villeChoisie = prompt('Quelle ville voulez vous choisir ?');
    recevoirTemperature(villeChoisie);
})

//requete AJAX ds une fonction
function recevoirTemperature(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${villeChoisie}&appid=d99897bcbb91f8c4224052c9f6e9db33&units=metric`
    
  /*
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var reponse     = request.response;
                let temperature = reponse.main.temp;
                let ville       = reponse.name;

                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            }
            else{
                alert('un probleme est survenu, revenez plus tard.')
            }
        }
    }*/

    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            //console.log(data);
            $('#temperature_label').text(data.main.temp)
            $('#ville').text(data.name)
        },
        error: () => {
            alert('Un probleme est survenu, revenez plus tard.')
        }
    })


}