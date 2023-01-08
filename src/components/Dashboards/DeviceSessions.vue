<template>
    <div class="device-content card-box-style">
        <div class="main-title d-flex justify-content-between align-items-center">
            <h3>Device Sessions</h3>

            <select class="form-select form-control" aria-label="Default select example">
                <option selected>30 days</option>
                <option value="1">15 days</option>
                <option value="2">10 days</option>
                <option value="3">5 days</option>
            </select>
        </div>

        <div class="device-chart text-center">
            <div id="chart">
                <apexchart type="radialBar" height="302" :options="deviceChart" :series="device"></apexchart>
            </div>
        </div>

        <div class="row justify-content-center">
            <div 
                class="col-lg-4 col-md-4 col-sm-4"
                v-for="device in devices"
                :key="device.id"
            >
                <div :class="device.class">
                    <span class="title">{{device.title}}</span>
                    <h4>{{device.number}} <span>{{device.symbol}}{{device.percent}}%</span></h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import deviceSessions from './deviceSessions.json'

export default {
    name: 'DeviceSessions',
    data: function() {
        return {
            devices: deviceSessions,
            device: [65, 50, 30],
            deviceChart: {
                chart: { 
                    height: 302, 
                    type: "radialBar" 
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 400,
                        hollow: { 
                            margin: 5, 
                            size: "10%", 
                            background: "transparent", 
                            image: void 0 
                        },
                        track: { 
                            show: !0, 
                            startAngle: void 0, 
                            endAngle: void 0, 
                            background: "#f2f2f2", 
                            strokeWidth: "97%", 
                            opacity: 1, 
                            margin: 15, 
                            dropShadow: { 
                                enabled: !1, 
                                top: 0, 
                                left: 0, 
                                blur: 3, 
                                opacity: 0.5 
                            } 
                        },
                        dataLabels: {
                            name: { 
                                show: !0, 
                                fontSize: "16px", 
                                fontWeight: 600, 
                                offsetY: -10 
                            },
                            value: {
                                show: !0,
                                fontSize: "14px",
                                offsetY: 4,
                                formatter: function (e) {
                                    return e + "%";
                                },
                            },
                        },
                    },
                },
                stroke: { 
                    lineCap: "round" 
                },
                colors: [
                    "#4FCB8D", 
                    "#1765FD", 
                    "#FEC107"
                ],
                labels: [
                    "Desktop", 
                    "Mobile", 
                    "Tablet"
                ],
                legend: { 
                    show: !1 
                },
            },
        };
    },
}
</script>

<style lang="scss">
.device-content {
	padding-bottom: 10px !important;
	border-radius: 30px !important;
	margin-bottom: 24px !important;
	.main-title {
		margin-bottom: 20px;
	}
	.device-chart {
		margin-bottom: 40px;
	}
	.single-device {
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
    .device-content {
        .device-chart {
            margin-bottom: 0;
        }
        .col-md-4 {
            flex: 0 0 auto;
            width: 50%;
        }
        &.website {
            padding-bottom: 0;
        }
    }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
    .device-content {
        &.card-box-style {
            padding-bottom: 5px;
        }
        .col-md-4 {
            flex: 0 0 auto;
            width: 33.33%;
        }
    }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .device-content {
        .device-chart {
            margin-bottom: 30px;
        }
    }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .device-content {
        .main-title {
            margin-bottom: 0;
        }
        &.website  {
            padding-bottom: 5px;
            .main-title {
                margin-bottom: 20px;
            }
        }
        .device-chart {
            margin-bottom: 0;
        }
    }
}
</style>