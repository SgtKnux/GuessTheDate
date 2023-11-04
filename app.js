const ctx = document.getElementById('braggingRightsChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Guess the Date & Weight',
            data: [
                    { x: new Date(2023, 10, 22), y: 8 , person: "Capt Marquart"},
                    { x: new Date(2023, 10, 29), y: 7.5 , person: "Marshall"},
                    { x: new Date(2023, 11, 6), y: 7.81 , person: "Palmer"},
                    { x: new Date(2023, 10, 27), y: 7.88 , person: "Kari"},
                    { x: new Date(2023, 11, 20), y: 8.75 , person: "Michele"},
                    { x: new Date(2023, 10, 19), y: 8.31 , person: "Erica"},
                    { x: new Date(2023, 10, 28), y: 6.75 , person: "Leah"},
                    { x: new Date(2023, 11, 4), y: 8.13 , person: "Arambula"},
                    { x: new Date(2023, 11, 10), y: 8 , person: "Kim"},
                    { x: new Date(2023, 11, 6), y: 8.31 , person: "Lynn"},
                    { x: new Date(2023, 11, 8), y: 7.31 , person: "Calicia"},
                    { x: new Date(2023, 10, 30), y: 7.69 , person: "Raven"},
                    { x: new Date(2023, 11, 3), y: 6.56 , person: "Varnessa"},
                    { x: new Date(2023, 11, 8), y: 6.56 , person: "McLean"},
                    { x: new Date(2023, 11, 10), y: 7.25 , person: "Shanette"}
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
                title: function(tooltipItem) {
                    // This uses moment.js to format the date without the time
                    return moment(tooltipItem[0].parsed.x).format('MMM D, YYYY');
                },
                label: function(context) {
                    var label = context.label || '';
                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += context.parsed.y.toFixed(2) + ' lbs';
                    }
                    // Add the person's name
                    label += ' (Guessed by: ' + context.raw.person + ')';
                    return label;
                }
            }
        }
    }
    }
});

