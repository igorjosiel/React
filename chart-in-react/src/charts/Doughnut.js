import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { transparentize } from 'polished';

const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            `${transparentize(0.5, "red")}`,
            `${transparentize(0.5, "blue")}`,
            `${transparentize(0.5, "yellow")}`,
            `${transparentize(0.5, "green")}`,
            `${transparentize(0.5, "purple")}`,
            `${transparentize(0.5, "orange")}`,
        ],
        borderColor: [
            "red",
            "blue",
            "yellow",
            "green",
            "purple",
            "orange",
        ]
    }]
};

function DoughnutChart() {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Doughnut Chart</h1>
            <div style={{ width: "500px", margin: "0 auto" }}>
                <Doughnut data={data} />
            </div>
        </div>
    );
}

export default DoughnutChart;