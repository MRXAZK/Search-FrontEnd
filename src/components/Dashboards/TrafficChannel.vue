<template>
    <div class="traffic-content card-box-style">
        <div class="main-title d-flex justify-content-between align-items-center">
            <h3>Traffic Channel</h3>

            <select class="form-select form-control" aria-label="Default select example">
                <option selected>15 days</option>
                <option value="1">16 days</option>
                <option value="2">17 days</option>
                <option value="3">18 days</option>
            </select>
        </div>

        <div class="traffic-chart text-center">
            <div class="chart-wrap">
                <div id="chart">
                    <apexchart type="donut" height="315" :options="trafficChart" :series="traffic"></apexchart>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-xxl-3 col-md-3 col-sm-3">
                <div class="single-traffic">
                    <span class="title">Organic Search</span>
                    <h4>19,202 <span>+32.50%</span></h4>
                </div>
            </div>

            <div class="col-xxl-3 col-md-3 col-sm-3">
                <div class="single-traffic border-style-5c31d6">
                    <span class="title">Social Media</span>
                    <h4>15,202 <span>+32.50%</span></h4>
                </div>
            </div>

            <div class="col-xxl-3 col-md-3 col-sm-3">
                <div class="single-traffic border-style-4fcb8d">
                    <span class="title">Email</span>
                    <h4>502 <span>+2%</span></h4>
                </div>
            </div>

            <div class="col-xxl-3 col-md-3 col-sm-3">
                <div class="single-traffic border-style-fec107">
                    <span class="title">Referrals</span>
                    <h4>1,202 <span>+32.50%</span></h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrafficChannel',
    data: function() {
        return {
            traffic: [60, 20, 15, 5],
            trafficChart: {
                chart: { 
                    type: "donut", 
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            height: 250
                        },
                    }
                }],
                dataLabels: {
                    enabled: false
                },
                labels: [
                    "Email", 
                    "Social Media",
                    "Referrals", 
                    "Organic Search"
                ], 
                colors: [
                    "#4FCB8D", 
                    "#5C31D6", 
                    "#FEC107",
                    "#1765FD", 
                ], 
                legend: { 
                    show: !1 
                }, 
                plotOptions: { 
                    pie: { 
                        donut: { 
                            size: "60%" 
                        } 
                    } 
                } 
            },
        };
    },
}
</script>

<style lang="scss">
.traffic-content {
	padding: 30px 28px !important;
	padding-bottom: 10px !important;
	margin-bottom: 20px !important;
	.traffic-chart {
		margin-bottom: 49px;
        .apexcharts-canvas {
            margin: auto;
        }
	}
	.single-traffic {
		padding-left: 10px;
		margin-bottom: 20px;
		position: relative;
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 2px;
			height: 100%;
			background-color: #1765fd;
			border-radius: 30px;
		}
		.title {
			font-size: 13px;
			font-weight: 500;
			letter-spacing: -0.26px;
			display: block;
			margin-bottom: 4px;
			letter-spacing: -0.26px;
		}
		h4 {
			font-size: 14px;
			letter-spacing: -0.28px;
			margin-bottom: 0;
			span {
				font-size: 11px;
				color: #BCC2CF;
				font-weight: 500;
				letter-spacing: 0;
			}
		}
		&.border-style-5c31d6 {
			&::before {
				background-color: #5c31d6;
			}
		}
		&.border-style-4fcb8d {
			&::before {
				background-color: #4fcb8d;
			}
		}
		&.border-style-fec107 {
			&::before {
				background-color: #fec107;
			}
		}
	}
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .traffic-content {
        padding: 30px 10px !important;

        .traffic-chart {
            margin-bottom: 20px;
        }
        .col-md-3 {
            flex: 0 0 auto;
            width: 50%;
        }
    }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
    .traffic-content {
        &.card-box-style {
            padding-bottom: 5px;
        }
        .single-traffic {
            .title {
                font-size: 12px;
            }
        }
    }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .traffic-content {
        .traffic-chart {
            margin-bottom: 30px;
        }
    }
}

/* Min width 1200px to Max width 1320px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
    .traffic-content {
        .main-title {
            margin-bottom: 30px;
        }
        .traffic-chart {
            margin-bottom: 26px;
        }
    } 
}

/* Min width 1400px to Max width 1700px */
@media only screen and (min-width: 1400px) and (max-width: 1700px) {
    .traffic-content {
        .main-title {
            margin-bottom: 0;
        }
        .traffic-chart {
            margin-bottom: 0;
        }
        .col-xxl-3 {
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
}
</style>