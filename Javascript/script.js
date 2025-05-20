// スキルチャートの色を赤と黒のテーマに変更
const ctx = document.getElementById('skillChart').getContext('2d');

// グラデーションの設定を赤と黒に変更
const redGradient = ctx.createLinearGradient(0, 0, 0, 400);
redGradient.addColorStop(0, 'rgba(230, 0, 0, 0.8)');
redGradient.addColorStop(1, 'rgba(153, 0, 0, 0.2)');

const borderGradient = ctx.createLinearGradient(0, 0, 0, 400);
borderGradient.addColorStop(0, 'rgba(230, 0, 0, 1)');
borderGradient.addColorStop(1, 'rgba(153, 0, 0, 1)');

// レーダーチャートの設定
const skillChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Java', 'HTML/CSS', 'PHP', 'COBOL', 'C#/C++', 'シーシャ'],
        datasets: [{
            label: 'スキルレベル',
            data: [5, 4, 3, 3, 2, 5],
            backgroundColor: redGradient,
            borderColor: borderGradient,
            pointBackgroundColor: '#e60000',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#e60000',
            borderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    lineWidth: 1
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    circular: true
                },
                pointLabels: {
                    font: {
                        size: 14,
                        family: "'Noto Sans JP', sans-serif"
                    },
                    color: '#f5f5f5'
                },
                suggestedMin: 0,
                suggestedMax: 5,
                ticks: {
                    stepSize: 1,
                    backdropColor: 'transparent',
                    color: 'rgba(255, 255, 255, 0.7)',
                    font: {
                        size: 10
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: {
                    size: 14,
                    family: "'Noto Sans JP', sans-serif"
                },
                bodyFont: {
                    size: 14,
                    family: "'Noto Sans JP', sans-serif"
                },
                callbacks: {
                    label: function(context) {
                        return `レベル: ${context.raw}/5`;
                    }
                }
            }
        }
    }
});

