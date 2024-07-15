import { getEnergyMix } from '../../backend/API_GET_energyMix.mjs';

getEnergyMix().then(generationPower => {
    const ctx = document.getElementById('energyMixChart').getContext('2d');
    const labels = Object.keys(generationPower);
    const data = Object.values(generationPower);

    const backgroundColors = [
        '#FF6384', '#36A2EB', '#FFCE56', '#cc65fe', '#445ce2', 
        '#e244b1', '#0c420f', '#f78c6c', '#6effe8', '#c45850', 
        '#4bc0c0', '#ff9f40'
    ]; // Different colors for each energy source

    const chart = new Chart(ctx, {
        type: 'pie', // Type of chart
        data: {
            labels: labels,
            datasets: [{
                label: 'Energy Mix',
                data: data,
                backgroundColor: backgroundColors,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Energy Mix'
                }
            }
        }
    });
});