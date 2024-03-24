import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);



const LineChart4 = ({ className }: any) => {


	const data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
		datasets: [{
			data: [30, 40, 60, 60, 80, 70, 80, 80, 90],
			fill: false,
			borderColor: '#FFD027',
			tension: 0.1
		}]
	};

	const options: ChartOptions<'line'> = {
		maintainAspectRatio: false,
		aspectRatio: 1,
		scales: {
			x: {
				grid: {
					display: false,
				}
			},
			y: {
				display: false
			}
		},
		plugins: {
			legend: {
				display: false // Hide legend
			}
		},
		elements: {
			point: {
				radius: 4, // Specify the radius of the data points
				backgroundColor: 'transparent',
				pointStyle: 'circle' // Customize point style (optional)
			},
			line: {
				borderColor: 'red', // Remove graph lines
				// borderWidth: 0 // Remove graph lines
			},

		}
	};

	return (
		<div className={className} >
			<h3>Visit statistics</h3>
			<div>
				<Line
					data={data}
					options={options}
				/>

			</div>
		</div>
	)
}

export default LineChart4