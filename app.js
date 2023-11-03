const ctx = document.getElementById('braggingRightsChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Guess the Date & Weight',
            data: [
                    { x: new Date(2023, 10, 22), y: 8 },
                    { x: new Date(2023, 10, 29), y: 7.5 },
                    { x: new Date(2023, 11, 6), y: 7.81 },
                    { x: new Date(2023, 10, 27), y: 7.88 },
                    { x: new Date(2023, 11, 26), y: 8.75 },
                    { x: new Date(2023, 10, 19), y: 8.31 },
                    { x: new Date(2023, 10, 23), y: 6.75 },
                    { x: new Date(2023, 11, 4), y: 8.13 },
                    { x: new Date(2023, 11, 6), y: 8.31 },
                    { x: new Date(2023, 10, 30), y: 7.69 },
                    { x: new Date(2023, 11, 3), y: 6.56 },
                    { x: new Date(2023, 11, 8), y: 6.56 }
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
            }
        }
    }
});

