<template>
    <div class="overview-content-wrap card-box-style">
        <div class="overview-content d-flex justify-content-between align-items-center">
            <div class="overview-title">
                <h3>Audience Overview</h3>
                <span>1 July, 2021 - 14 July, 2021</span>
            </div>

            <ul class="total-overview">
                <li>
                    <button class="today">Today</button>
                </li>
                <li>
                    <button>7d</button>
                </li>
                <li>
                    <button class="active">2w</button>
                </li>
                <li>
                    <button>1m</button>
                </li>
                <li>
                    <button>3m</button>
                </li>
                <li>
                    <button>1y</button>
                </li>
            </ul>
        </div>
        
        <div class="audience-content-wrap">
            <SingleAudience />

            <div class="audience-chart">
                <div id="chart">
                    <apexchart type="area" height="245" :options="chartOptions" :series="series"></apexchart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SingleAudience from './SingleAudience'

export default {
    name: 'AudienceOverview',
    components: {
        SingleAudience
    },
    data: function() {
        return {
            series: [{
                name: 'New Visits',
                data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 120]
            },{
                name: 'Unique Visits',
                data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 110]
            }],
            chartOptions: {
                chart: { 
                    type: "area", 
                    stacked: !0, 
                    toolbar: { 
                        show: !1, 
                        autoSelected: "zoom" 
                    } 
                },
                colors: [
                    "#1765fd", 
                    "#bbc6cf"
                ],
                dataLabels: { 
                    enabled: !1 
                },
                stroke: { 
                    curve: "smooth", 
                    width: [5, 2], 
                    dashArray: [0, 4], 
                    lineCap: "round"
                },
                grid: { 
                    padding: { 
                        left: 0, 
                        right: 0 
                    }, 
                    strokeDashArray: 1
                },
                markers: { 
                    size: 0, 
                    hover: { 
                        size: 0 
                    } 
                },
                xaxis: { 
                    type: "month", 
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], axisBorder: { 
                        show: !0 
                    }, 
                    axisTicks: { 
                        show: !0 
                    },
                    labels: {
                        style: {
                            colors: "#A9A9C8",
                        },
                    },
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: "#A9A9C8",
                        },
                        offsetX: -10,
                    },
                },
                fill: { 
                    type: "gradient", 
                    gradient: { 
                        shadeIntensity: 1, 
                        opacityFrom: 0, 
                        opacityTo: 0, 
                        stops: [0, 90, 100] 
                    } 
                },
                tooltip: { 
                    x: { 
                        format: "dd/MM/yy HH:mm" 
                    } 
                },
                legend: { 
                    position: "bottom", 
                    horizontalAlign: "right",  
                    show: false 
                },
            },
        }
    },
}
</script>