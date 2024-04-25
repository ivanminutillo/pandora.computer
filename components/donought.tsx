// @ts-ignore
import { useEffect } from "react"
import Chart from 'chart.js/auto';
function Donought() {
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Open", "Pending", "Finalizing", "Arbitrating", "Closed", "Unknown"],
                datasets: [{
                    data: [70, 10, 6, 10, 10, 10],
                    borderColor: [
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                        "rgb(255, 49, 32)",
                        "rgb(95, 129, 232)",
                    ],
                    backgroundColor: [
                        "rgb(75, 192, 192 )",
                        "rgb(255, 205, 86)",
                        "rgb(255, 99, 132)",
                        "rgb(255, 99, 132)",
                        "rgb(255, 49, 32)",
                        "rgb(95, 129, 232)",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
              plugins: {
                legend: {
                    display: true,
                    position: 'left'
                }
            }
                
                // scales: {
                //     xAxes: [{
                //         display: false,
                //     }],
                //     yAxes: [{
                //         display: false,
                //     }],
                // }
            },

        });

        return () => {
          if (myChart) {
              myChart.destroy();
          }
      };
    }, [])


    return (
        <>
            {/* Doughnut chart */}
            <div className="flex mx-auto my-auto">
                <div className='w-full mx-auto h-fit'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>
        </>
    )
}

export default Donought;