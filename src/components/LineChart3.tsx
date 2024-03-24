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



const LineChart3 = ({ className }: any) => {


	const data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "",],
		datasets: [{
			data: [30, 39, 60, 60, 72, 70, 80, 80, 90],
			fill: false,
			borderColor: '#FFD027',
			tension: 0.4
		}]
	};

	const options: ChartOptions<'line'> = {
		maintainAspectRatio: false,
		aspectRatio: 1,
		scales: {

			x: {
				position: 'top',

				grid: {
					display: false,

				},
				ticks: {
					display: true,
					mirror: true,
					padding: -400
				},
			},
			y: {
				display: false,
			},
		},
		plugins: {
			legend: {
				display: false
			},
		},
		elements: {
			point: {
				radius: 0,
				backgroundColor: 'transparent',
				pointStyle: 'circle',
			},
		}
	};



	return (
		<div className={className} >
			<div>
				<Line
					data={data}
					options={options}
				/>

			</div>
		</div>
	)
}

export default LineChart3


