<template>
    <div class="website-up-down card-box-style">
        <div class="main-title d-flex justify-content-between align-items-center">
            <h3>Website Performance</h3>

            <select class="form-select form-control" aria-label="Default select example">
                <option selected>30 days</option>
                <option value="1">15 days</option>
                <option value="2">10 days</option>
                <option value="3">5 days</option>
            </select>
        </div>

        <div class="row justify-content-center">
            <div 
                class="col-lg-4 col-md-4 col-sm-4"
                v-for="perform in performance"
                :key="perform.id"
            >
                <div class="single-up-and-down d-flex justify-content-between align-items-center">
                    <div :class="perform.class">
                        <h5>{{perform.title}}</h5>
                        <h4><span>{{perform.symbol}}{{perform.percent}}%</span></h4>
                    </div>
                    <div class="total">
                        <h4 class="mb-0">{{perform.number}}%</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="sessions-chart">
            <div class="chart-wrap">
                <div id="chart">
                    <apexchart type="candlestick" height="245" :options="chartOptions" :series="series"></apexchart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import websitePerformance from './websitePerformance.json'
export default {
    name: 'WebsitePerformanceChart',
    data: function() {
        return {
            performance: websitePerformance,
            series: [{
                data: [{
                    x: new Date(15388452e5),
                    y: [6595.97, 6602.01, 6588.17, 6602]
                }, {
                    x: new Date(1538847e6),
                    y: [6602, 6607, 6596.51, 6599.95]
                }, {
                    x: new Date(15388488e5),
                    y: [6600.63, 6601.21, 6590.39, 6591.02]
                }, {
                    x: new Date(15388506e5),
                    y: [6591.02, 6603.08, 6591, 6591]
                }, {
                    x: new Date(15388524e5),
                    y: [6591, 6601.32, 6585, 6592]
                }, {
                    x: new Date(15388542e5),
                    y: [6593.13, 6596.01, 6590, 6593.34]
                }, {
                    x: new Date(1538856e6),
                    y: [6593.34, 6604.76, 6582.63, 6593.86]
                }, {
                    x: new Date(15388578e5),
                    y: [6593.86, 6604.28, 6586.57, 6600.01]
                }, {
                    x: new Date(15388596e5),
                    y: [6601.81, 6603.21, 6592.78, 6596.25]
                }, {
                    x: new Date(15388614e5),
                    y: [6596.25, 6604.2, 6590, 6602.99]
                }, {
                    x: new Date(15388632e5),
                    y: [6602.99, 6606, 6584.99, 6587.81]
                }, {
                    x: new Date(1538865e6),
                    y: [6587.81, 6595, 6583.27, 6591.96]
                }, {
                    x: new Date(15388668e5),
                    y: [6591.97, 6596.07, 6585, 6588.39]
                }, {
                    x: new Date(15388686e5),
                    y: [6587.6, 6598.21, 6587.6, 6594.27]
                }, {
                    x: new Date(15388704e5),
                    y: [6596.44, 6601, 6590, 6596.55]
                }, {
                    x: new Date(15388722e5),
                    y: [6598.91, 6605, 6596.61, 6600.02]
                }, {
                    x: new Date(1538874e6),
                    y: [6600.55, 6605, 6589.14, 6593.01]
                }, {
                    x: new Date(15388758e5),
                    y: [6593.15, 6605, 6592, 6603.06]
                }]
            }],
            chartOptions: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                xaxis: {
                    type: "datetime",
                    labels: {
                        minHeight: 20,
                        maxHeight: 20,
                        style: {
                            colors: "#A9A9C8",
                        },
                    }
                },
                yaxis: {
                    tooltip: {
                        enabled: !0
                    },
                    labels: {
                        style: {
                            colors: "#A9A9C8",
                        },
                    }
                },
                plotOptions: {
                    candlestick: {
                            colors: {
                            upward: '#4FCB8D',
                            downward: '#1765FD'
                        }
                    }
                }
            },
        };
    },
}
</script>

<style lang="scss">
.website-up-down {
    padding-bottom: 10px !important;
    border-radius: 30px !important;
    margin-bottom: 24px !important;
	.main-title {
		margin-bottom: 20px;
	}
}

.single-up-and-down {
	background: #FFFFFF 0% 0% no-repeat padding-box;
	border: 1px solid #CAD6F2;
	border-radius: 20px;
	padding: 20px;
	transition: var(--transition);
	margin-bottom: 24px;
	.up-and-down-content {
		h5 {
			font-weight: 500;
			font-size: 14px;
			color: var(--body-color);
			margin-bottom: 10px;
			letter-spacing: -0.28px;
		}
		h4 {
			letter-spacing: -0.4px;
			font-size: 20px;
			margin-bottom: 0;
			span {
				font-size: 12px;
				color: #28C76F;
				font-weight: 500;
				letter-spacing: 0px;
			}
		}
		&.color-style-fe5957 {
			h4 {
				span {
					color: #fe5957;
				}
			}
		}
	}
	.total {
		h4 {
			font-size: 20px;
		}
	}
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .single-up-and-down {
        border-radius: 10px;
    }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
    .single-up-and-down {
        padding: 15px;
        margin-bottom: 0;
        .total {
            h4 {
                font-size: 18px;
            }
        }
    }
}
</style>