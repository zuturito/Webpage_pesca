window.onload = function () {
    const api_url = "https://api-especies.azurewebsites.net";
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        if (response) {
            //datos_especies_recuperadas
            const arreglo_especies = [];
            for (let r of data.Especies_recuperadas) {
                arreglo_especies.push(r.nombre_especie);
            }
            //console.log(arreglo_especies);
            const arreglo_datasets = [];
            for (let r of data.Especies_recuperadas) {
                arreglo_datasets.push(r.anios);
            }
            const labels = ['2015', '2016', '2017', '2018', '2019', '2020'];
            const datasetValue = [];
            const datasetValue2 = [];
            const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
                '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
                '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
                '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
                '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
                '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
            for (var j = 0; j < arreglo_especies.length; j++) {
                datasetValue[j] =
                {
                    label: arreglo_especies[j],
                    data: [
                        arreglo_datasets[j][2015],
                        arreglo_datasets[j][2016],
                        arreglo_datasets[j][2017],
                        arreglo_datasets[j][2018],
                        arreglo_datasets[j][2019],
                        arreglo_datasets[j][2020],
                    ],
                    borderColor: colorArray[j],
                    yAxisID: "y",
                }
            }
            const dataGrafica = {
                labels: labels,
                datasets: datasetValue
            };
            const config = {
                type: 'line',
                data: dataGrafica,
                options: {
                    responsive: true,
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    stacked: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Especies recuperadas por año (en Kgs.)'
                        }
                    },
                    scales: {
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                        },
                    }
                },
            };
            const myChart = new Chart(
                document.getElementById('chartEspeciesRecuperadas'),
                config
            );
            //datos_crimenes_estado_biodiversidad
            const arreglo_estados = [];
            for (let r of data.Estados) {
                arreglo_estados.push(r.nombre);
            }
            const arreglo_biodiversidad = [];
            for (let r of data.Estados) {
                arreglo_biodiversidad.push(r.biodiversidad);
            }
            const arreglo2015_bio = [];
            for (var j = 0; j < arreglo_biodiversidad.length; j++) {
                arreglo2015_bio.push(arreglo_biodiversidad[j][2015]);
            }
            const arreglo2016_bio = [];
            for (var j = 0; j < arreglo_biodiversidad.length; j++) {
                arreglo2016_bio.push(arreglo_biodiversidad[j][2016]);
            }
            const arreglo2017_bio = [];
            for (var j = 0; j < arreglo_biodiversidad.length; j++) {
                arreglo2017_bio.push(arreglo_biodiversidad[j][2017]);
            }
            const arreglo2018_bio = [];
            for (var j = 0; j < arreglo_biodiversidad.length; j++) {
                arreglo2018_bio.push(arreglo_biodiversidad[j][2018]);
            }
            const arreglo2019_bio = [];
            for (var j = 0; j < arreglo_biodiversidad.length; j++) {
                arreglo2019_bio.push(arreglo_biodiversidad[j][2019]);
            }
            const arreglo2020_bio = [];
            for (var j = 0; j < arreglo_biodiversidad.length; j++) {
                arreglo2020_bio.push(arreglo_biodiversidad[j][2020]);
            }
            const labels2 = arreglo_estados;
            const data2 = {
                labels: labels2,
                datasets: [
                    {
                        label: '2015',
                        data: arreglo2015_bio,
                        borderColor: colorArray[0],
                        backgroundColor: colorArray[0],
                    },
                    {
                        label: '2016',
                        data: arreglo2016_bio,
                        borderColor: colorArray[1],
                        backgroundColor: colorArray[1],
                    },
                    {
                        label: '2017',
                        data: arreglo2017_bio,
                        borderColor: colorArray[2],
                        backgroundColor: colorArray[2],
                    },
                    {
                        label: '2018',
                        data: arreglo2018_bio,
                        borderColor: colorArray[3],
                        backgroundColor: colorArray[3],
                    },
                    {
                        label: '2019',
                        data: arreglo2019_bio,
                        borderColor: colorArray[4],
                        backgroundColor: colorArray[4],
                    },
                    {
                        label: '2020',
                        data: arreglo2020_bio,
                        borderColor: colorArray[5],
                        backgroundColor: colorArray[5],
                    }
                ]
            };
            const config2 = {
                type: 'bar',
                data: data2,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Carpetas de investigación por daño a biodiversidad'
                        }
                    }
                },
            };
            const myChart2 = new Chart(
                document.getElementById('chartCrimenes'),
                config2
            );
            //datos_carpetas_medio_ambiente
            const arreglo_medio = [];
            for (let r of data.Estados) {
                arreglo_medio.push(r.delitos_medio_ambiente);
            }
            const arreglo2015_med = [];
            for (var j = 0; j < arreglo_medio.length; j++) {
                arreglo2015_med.push(arreglo_medio[j][2015]);
            }
            const arreglo2016_med = [];
            for (var j = 0; j < arreglo_medio.length; j++) {
                arreglo2016_med.push(arreglo_medio[j][2016]);
            }
            const arreglo2017_med = [];
            for (var j = 0; j < arreglo_medio.length; j++) {
                arreglo2017_med.push(arreglo_medio[j][2017]);
            }
            const arreglo2018_med = [];
            for (var j = 0; j < arreglo_medio.length; j++) {
                arreglo2018_med.push(arreglo_medio[j][2018]);
            }
            const arreglo2019_med = [];
            for (var j = 0; j < arreglo_medio.length; j++) {
                arreglo2019_med.push(arreglo_medio[j][2019]);
            }
            const arreglo2020_med = [];
            for (var j = 0; j < arreglo_medio.length; j++) {
                arreglo2020_med.push(arreglo_medio[j][2020]);
            }
            const labels3 = arreglo_estados;
            const data3 = {
                labels: labels3,
                datasets: [
                    {
                        label: '2015',
                        data: arreglo2015_med,
                        borderColor: colorArray[0],
                        backgroundColor: colorArray[0],
                    },
                    {
                        label: '2016',
                        data: arreglo2016_med,
                        borderColor: colorArray[1],
                        backgroundColor: colorArray[1],
                    },
                    {
                        label: '2017',
                        data: arreglo2017_med,
                        borderColor: colorArray[2],
                        backgroundColor: colorArray[2],
                    },
                    {
                        label: '2018',
                        data: arreglo2018_med,
                        borderColor: colorArray[3],
                        backgroundColor: colorArray[3],
                    },
                    {
                        label: '2019',
                        data: arreglo2019_med,
                        borderColor: colorArray[4],
                        backgroundColor: colorArray[4],
                    },
                    {
                        label: '2020',
                        data: arreglo2020_med,
                        borderColor: colorArray[5],
                        backgroundColor: colorArray[5],
                    }
                ]
            };
            const config3 = {
                type: 'bar',
                data: data3,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Carpetas de investigación por daño a medio ambiente'
                        }
                    }
                },
            };
            const myChart3 = new Chart(
                document.getElementById('chart_medio_ambiente'),
                config3
            );
        };
    }
    getapi(api_url);
}