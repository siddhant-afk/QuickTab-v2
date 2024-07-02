import { Chart as ChartJS, defaults} from "chart.js/auto";
import {Line} from "react-chartjs-2";
import salesData from "../data/salesData.json"


defaults.maintainAspectRatio = false;
defaults.responsive = true;
function TotalSalesChart(){

    return(
       <section className="sales-chart">
       {console.log(salesData)}
        <Line
        data = {
            {
            labels : salesData.map((data) => data["month"]),
            datasets : [
                {
                    label : "Total Sales",
                    data : salesData.map((data) => data["totalSales"]),
                    backgroundColor : "blue",
                    borderColor : "blue"
                },
                {
                    label : "Total Expenses",
                    data : salesData.map((data) => data["expenses"]),
                    backgroundColor : "red",
                    borderColor : "red"
                }


            ]
        }} />

       
       </section>
    )
}

export default TotalSalesChart;