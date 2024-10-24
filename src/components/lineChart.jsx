import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Tooltip,
 } from 'chart.js'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Tooltip,
)

ChartJS.defaults.font.size = 12;
ChartJS.defaults.font.family = 'Manrope';
ChartJS.defaults.color = 'black';

const LineChart = ({ chartData }) => {

    const options = {
        responsive: true,
        elements: {
            point: {
                radius: 7,
            },
            line: {
                borderWidth: 2
            }
        },
        scales: {
            x: {
                grid: {
                  display: false
                }
              },
        }
    }

    const bloodPressureSystolic = []
    const bloodPressureDiastolic = []

    //adding 6 month data to data array
    for (let i = 5; i >= 0; i--) {
        if (chartData) bloodPressureSystolic.push(chartData[i]?.blood_pressure.systolic.value)
        if (chartData) bloodPressureDiastolic.push(chartData[i]?.blood_pressure.diastolic.value)
    }

    const data = {
        labels: [
            'Oct, 2023',
            'Nov, 2023',
            'Dec, 2023',
            'Jan, 2024',
            'Feb, 2024',
            'Mar, 2024'
        ],
        datasets: [
            {
                label: "Systolic",
                data: bloodPressureSystolic,
                tension: 0.4,
                backgroundColor: '#E66FD2',
                borderColor: "#C26EB4",
                pointBorderColor: 'white',
                stack: 'line'
            },
            {
                label: "Diastolic",
                data: bloodPressureDiastolic,
                backgroundColor: '#8C6FE6',
                borderColor: "#7E6CAB",
                pointBorderColor: 'white',
                tension: 0.4,

            },
        ]
    }

  return (
    <Line  data={data} options={options} height={140}/>
  )
}

export default LineChart