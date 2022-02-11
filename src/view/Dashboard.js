import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";
import { useEffect } from "react";
import "./css/Dashboard.css";

const Dashboard = () => {
    let grid = null;
    useEffect(() => {
        var items = [
            {
                "id": 1, "x": 0, "y": 0, "w": 6, "h": 3, "noResize": true,
                "content": `
                <div class="card">
                    <div class="title"> 
                        <p class="title_header">My Textarea</p>
                        <p class="title_footer"><span>Sherry</span><span>2022-01-27</span></p>
                    </div>
                    <p class="textarea_con">Whether you’ve used a Bullet Journal for years or have never seen one before, the international best-selling book The Bullet Journal Method will show </p>
                </div>
               `, "title": "My Textarea", "manager": "Sherry", "chart": "text"
            }
        ];
       
        grid = GridStack.init({
            float: true,
            minRow: 1,
            minWidth: 500,
            column: 12,
            cellHeight: "80px",
        });

        grid.addWidget(items[0]);
    })
    return (
        <div className="dashboard">
            <section className="grid-stack"></section>
        </div>
    );
}

export default Dashboard;