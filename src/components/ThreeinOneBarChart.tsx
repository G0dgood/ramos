import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	ArcElement,
	Title,
	Tooltip,
	Legend
);



const ThreeinOneBarChart = () => {






	const labels = ['Jan', 'Feb', 'Mar', 'Apr'];


	// Data object containing both line and bar datasets
	const data: any = {
		labels: labels,
		datasets: [
			{
				label: 'Stacked Dataset 1',
				backgroundColor: '#8A5CFF',
				barThickness: 20,
				data: [12, 19, 3, 5, 2],
				stack: 'stack1',
				borderColor: '#8A5CFF',
				borderWidth: 1,
				borderRadius: 10,
			},
			{
				label: 'Stacked Dataset 2',
				backgroundColor: '#A17FFF',
				barThickness: 20,
				data: [10, 15, 7, 8, 6],
				stack: 'stack1', // Assign the same stack identifier to the second dataset
			},
			{
				label: 'Stacked Dataset 2',
				backgroundColor: '#B395FF',
				barThickness: 20,
				data: [10, 15, 7, 8, 6],
				stack: 'stack1', // Assign the same stack identifier to the second dataset
			},
			{
				label: 'Non-Stacked Dataset',
				data: [5, 8, 12, 9, 10],
				backgroundColor: '#FFD027',
				type: 'bar',
				yAxisID: 'bar-y-axis',
			},
		],
	};





	const options: any = {
		scales: {
			x: {
				grid: {
					display: false, // Hide grid lines on the x-axis
				},
			},
			y: {
				display: false, // Hide y-axis
			},
			yAxes: [
				{
					id: 'line-y-axis', // ID for the line y-axis
					type: 'linear',
					position: 'left',
				},
				{
					id: 'bar-y-axis', // ID for the bar y-axis
					type: 'linear',
					position: 'right',
				},
			],
		},
		plugins: {
			legend: {
				display: false, // Hide legend
			},
		},
		responsive: true,
		maintainAspectRatio: false,
	};


	return (
		<div className='three-in-one'>
			<Bar data={data} options={options} height={"100%"} width={"100%"} />
		</div>
	);
}

export default ThreeinOneBarChart