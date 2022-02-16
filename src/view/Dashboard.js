import "./css/Dashboard.css";
import { useEffect } from 'react';
import ToDoList from "../componets/ToDoList";
import ToDoNavBar from "../componets/ToDoNavBar";
import NewToDoFrom from "../componets/NewToDoFrom";
import ToDoContextProvider from "../contexts/ToDoContext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';


ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement, Tooltip, Legend);



export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }
    },
};

const labels = ['JavaScript', 'ReactJS', 'VueJS', 'PHP', 'Laravel', 'HMTL', 'CSS'];




const Dashboard = () => {
    const data = {
        labels: ['Blue', 'Yellow'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19],
                backgroundColor: [

                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',

                ],
                borderColor: [

                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };
    const data2 = {
        labels,
        datasets: [
            {
                label: 'like',
                data: [100, 50, 500, 100, 700, 280, 321, 600],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'student',
                data: [56, 40, 100, 200, 40, 400, 300, 200],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    useEffect(() => {
        window.addEventListener("resize", function () {
            this.location.reload();
        })
    }, [])

    return (
        <div className="dashboard">
            <ToDoContextProvider>
                <div className="box box0">
                    <ToDoNavBar />
                    <ToDoList />
                </div>
                <div className="box box1">
                    <h3>Add To-do</h3>
                    <NewToDoFrom />
                </div>
            </ToDoContextProvider>
            <div className="box box2">
                <h3>Category Follow</h3>
                <Line options={options} data={data2} /></div>
            <div className="box box3">
                <h3>Today's admin</h3>
                <div className="member">
                    <div><span className="online"></span>Harry James Potter</div>
                    <div><span className="online"></span>Hermione Jean Granger</div>
                    <div><span ></span>Draco Malfo</div>
                    <div><span></span>Neville Longbottom</div>
                </div>
            </div>
            <div className="box box4">
                <h3>Recent Activities</h3>

                <div className="activity">
                    <div>2022-03-01</div>
                    <p>Thanksgiving in March</p>
                </div>

            </div>
            <div className="box box5">
                <h3>Sales status</h3>
                <Pie data={data} />
            </div>
        </div>
    );
}

export default Dashboard;