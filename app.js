const ctx = document.getElementById('braggingRightsChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Guess the Date & Weight',
            data: [
                    { x: new Date(2023, 11, 22), y: 8 , person: "Capt Marquart"},
                    { x: new Date(2023, 11, 29), y: 7.5 , person: "Marshall"},
                    { x: new Date(2023, 12, 6), y: 7.81 , person: "Palmer"},
                    { x: new Date(2023, 11, 27), y: 7.88 , person: "Kari"},
                    { x: new Date(2023, 12, 20), y: 8.75 , person: "Michele"},
                    { x: new Date(2023, 11, 19), y: 8.31 , person: "Erica"},
                    { x: new Date(2023, 11, 28), y: 6.75 , person: "Leah"},
                    { x: new Date(2023, 12, 4), y: 8.13 , person: "Arambula"},
                    { x: new Date(2023, 12, 10), y: 8 , person: "Kim"},
                    { x: new Date(2023, 12, 6), y: 8.31 , person: "Lynn"},
                    { x: new Date(2023, 12, 8), y: 7.31 , person: "Calicia"},
                    { x: new Date(2023, 11, 30), y: 7.69 , person: "Raven"},
                    { x: new Date(2023, 12, 3), y: 6.56 , person: "Varnessa"},
                    { x: new Date(2023, 12, 8), y: 6.56 , person: "McLean"},
                    { x: new Date(2023, 12, 10), y: 7.25 , person: "Shanette"}
            ],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                type: 'time',
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Weight (in lbs)'
                },
                min: 6,
                max: 9
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Bragging Rights: Guess the Date & Weight'
            },
            tooltip: {
            callbacks: {
                title: function(tooltipItem, data) {
                    // Extract the date from the data and format it without the time.
                    let date = data.datasets[tooltipItem[0].datasetIndex].data[tooltipItem[0].index].x;
                    return moment(date).format('MMM D, YYYY');  // Display date without time
                },
                afterBody: function(tooltipItem, data) {
                    // Extract the person's name from the data and display it below the main tooltip text.
                    let person = data.datasets[tooltipItem[0].datasetIndex].data[tooltipItem[0].index].person;
                    return 'Guessed by: ' + person;
                }
            }
        }
        }
    }
});

