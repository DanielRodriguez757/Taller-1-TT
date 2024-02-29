
function consumir_taller() {
    var endPoint = document.getElementById('endPoint').value;
    fetch(endPoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data); 
            var continentData = {};
            for (var i = 0; i < data.length; i++) {
                var continent = data[i].region || "Desconocido"; 
                var population = data[i].population || 0;
                var country = data[i].name.official || "Desconocido"; 
                if (!continentData[continent]) {
                    continentData[continent] = {
                        countries: [],
                        populations: [],
                        color: 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')' // Asigna un color aleatorio al continente
                    };
                }
                continentData[continent].countries.push(country);
                continentData[continent].populations.push(population);
            }
            var grafica = [];
            for (var continent in continentData) {
                if (continentData.hasOwnProperty(continent)) {
                    grafica.push({
                        x: continentData[continent].countries,
                        y: continentData[continent].populations,
                        type: 'bar',
                        name: continent,
                        marker: {
                            color: continentData[continent].color
                        }
                    });
                }
            }
            var layout = {
                barmode: 'group',
                title: 'Población por país y continente',
                xaxis: {
                    title: 'País'
                },
                yaxis: {
                    title: 'Población'
                }
            };

            Plotly.newPlot('myDiv', grafica, layout);
        })
        .catch(function (error) {
            console.error('Error en la solicitud fetch:', error);
        });
}





