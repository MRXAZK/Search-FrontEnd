<template>
    <div class="device-content website card-box-style">
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
            <div class="col-lg-12 col-sm-6">
                <div class="single-website-performance d-flex justify-content-between align-items-center">
                    <div class="website-performance-content">
                        <h5>Bounce Rate (avg)</h5>
                        <h4>24.67% <span>+04.18%</span></h4>
                    </div>
                    <div class="website-chart">
                        <div id="chart">
                            <apexchart type="area" height="50" :options="bounceRate" :series="bounce"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-sm-6">
                <div class="single-website-performance d-flex justify-content-between align-items-center">
                    <div class="website-performance-content color-style-fe5957">
                        <h5>Page Views (avg)</h5>
                        <h4>7.32% <span>-0.21%</span></h4>
                    </div>
                    <div class="website-chart">
                        <div id="chart">
                            <apexchart type="area" height="50" :options="pageViews" :series="page"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-12 col-sm-6">
                <div class="single-website-performance d-flex justify-content-between align-items-center">
                    <div class="website-performance-content">
                        <h5>Time On Site (avg)</h5>
                        <h4>1min 30s <span>+2.50%</span></h4>
                    </div>
                    <div class="website-chart">
                        <div id="chart">
                            <apexchart type="area" height="50" :options="timeOnSite" :series="time"></apexchart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WebsitePerformance',
    
    data: function() {
        return {
            bounce: [{
                name: 'Bounce Rate (avg)',
                    data: [0, 50, 100, 50, 42, 150, 47, 75, 10, 100, 14]
                },
            ],
            bounceRate: {
                chart: { 
                    type: "area", 
                    height: 50, 
                    sparkline: { 
                        enabled: !0 
                    } 
                },
                stroke: { 
                    curve: "smooth", 
                    width: 4,
                    lineCap: "round" 
                },
                colors: [
                    "#5C31D6"
                ],
                fill: { 
                    type: "gradient", 
                    gradient: { 
                        shadeIntensity: 0, 
                        inverseColors: !0, 
                        opacityFrom: 0, 
                        opacityTo: 0, 
                        stops: [
                            75, 100, 100, 100
                        ] 
                    } 
                },
                tooltip: { 
                    fixed: { 
                        enabled: !1 
                    }, 
                    x: { 
                        show: !1 
                    }, 
                    marker: { 
                        show: !1 
                    } 
                },
            },
            page: [{
                name: '"Page Views (avg)',
                    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
                },
            ],
            pageViews: {
                chart: { 
                    type: "area", 
                    height: 50, 
                    sparkline: { 
                        enabled: !0 
                    } 
                },
                stroke: { 
                    curve: "smooth", 
                    width: 4,
                    lineCap: "round" 
                },
                colors: [
                    "#4FCB8D"
                ],
                fill: { 
                    type: "gradient", 
                    gradient: { 
                        shadeIntensity: 0, 
                        inverseColors: !0, 
                        opacityFrom: 0, 
                        opacityTo: 0, 
                        stops: [
                            75, 100, 100, 100
                        ] 
                    } 
                },
                tooltip: { 
                    fixed: { 
                        enabled: !1 
                    }, 
                    x: { 
                        show: !1 
                    }, 
                    marker: { 
                        show: !1 
                    } 
                },
            },
            time: [{ 
                name: "Time On Site (avg)", 
                data: [0, 50, 70, 5, 42, 15, 47, 75, 65, 19, 14] 
            }],
            timeOnSite: {
                chart: { 
                    type: "area", 
                    height: 50, 
                    sparkline: { 
                        enabled: !0 
                    } 
                },
                stroke: { 
                    curve: "smooth", 
                    width: 4,
                    lineCap: "round" 
                },
                colors: [
                    "#1765FD"
                ],
                fill: { 
                    type: "gradient", 
                    gradient: { 
                        shadeIntensity: 0, 
                        inverseColors: !0, 
                        opacityFrom: 0, 
                        opacityTo: 0, 
                        stops: [
                            75, 100, 100, 100
                        ] 
                    } 
                },
                tooltip: { 
                    fixed: { 
                        enabled: !1 
                    }, 
                    x: { 
                        show: !1 
                    }, 
                    marker: { 
                        show: !1 
                    } 
                },
            },
        };
    },
}
</script>

<style lang="scss">
.device-content {
	padding-bottom: 10px;
	border-radius: 30px;
	margin-bottom: 24px;
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
.single-website-performance {
	background: #FFFFFF 0% 0% no-repeat padding-box;
	box-shadow: 0px 5px 25px #CAD6F266;
	border: 1px solid #DFE9FF;
	border-radius: 20px;
	padding: 28px 30px;
	transition: var(--transition);
	margin-bottom: 20px;
	.website-performance-content {
		h5 {
			font-weight: 500;
			font-size: 13px;
			color: var(--body-color);
			margin-bottom: 10px;
			letter-spacing: -0.26px;
		}
		h4 {
			letter-spacing: -0.32px;
			font-size: 16px;
			margin-bottom: 0;
			span {
				font-size: 12px;
				color: #28C76F;
				font-weight: 500;
				letter-spacing: 0;
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
	.website-chart {
		max-width: 200px;
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
    .single-website-performance.d-flex {
        display: block !important;
        padding: 15px;
        border-radius: 10px;

        .website-performance-content {
            margin-bottom: 15px;
        }
        .website-chart {
            max-width: 100%;
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
    .single-website-performance {
        padding: 25px;
    }
}

/* Min width 458px to Max width 576px */
@media only screen and (min-width: 458px) and (max-width: 576px) {
    .single-website-performance {
        .website-chart {
            max-width: 100%;
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
    .single-website-performance.d-flex {
        display: block !important;
        .website-chart {
            max-width: 100%;
            margin-top: 10px;
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
    .single-website-performance {
        padding: 20px;
    }
}
</style>