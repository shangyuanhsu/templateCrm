import "./css/Dashboard.css";
// import { useEffect } from 'react';
import ToDoList from "../componets/ToDoList";
import ToDoNavBar from "../componets/ToDoNavBar";
import NewToDoFrom from "../componets/NewToDoFrom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from 'chart.js';


ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title, ArcElement, Tooltip, Legend);



export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];




const Dashboard = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const data2 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [100, 200, 500, 100, 700, 280, 321, 600],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [56, 40, 100, 200, 40, 400, 300, 200],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };



    return (
        <div className="dashboard">
            <div className="box box0">
                <ToDoNavBar />
                <ToDoList />
            </div>
            <div className="box box1">  <NewToDoFrom /></div>
            <div className="box box2"><Line options={options} data={data2} /></div>
            <div className="box box3">3</div>
            <div className="box box4">4</div>
            <div className="box box5"><Pie data={data} /></div>
            <div className="box box6">6</div>
        </div>
    );
}

export default Dashboard;