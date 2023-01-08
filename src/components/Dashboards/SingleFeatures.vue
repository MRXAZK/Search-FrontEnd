<template>
    <div class="features-area">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="single-features">
                        <div class="row align-items-center">
                            <div class="col-xl-6 col-sm-6">
                                <div class="single-click-content">
                                    <span class="features-title">CLICK THROUGH</span>
                                    <h3>9,670 <span>-0.21%</span></h3>
                                    <p>Lorem ipsum dolor sit amet, conset etur sadipscing elitr, sed.</p>
                                </div>
                            </div>

                            <div class="col-xl-6 col-sm-6">
                                <div class="single-click-chart">
                                    <div id="chart">
                                        <apexchart type="area" height="50" :options="clickChart" :series="click"></apexchart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-features color-style-1765fd">
                        <div class="row align-items-center">
                            <div class="col-xl-6 col-sm-6">
                                <div class="single-click-content">
                                    <span class="features-title">VIEW THROUGH</span>
                                    <h3>5,952 <span>+0.21%</span></h3>
                                    <p>Lorem ipsum dolor sit amet, conset etur sadipscing elitr, sed.</p>
                                </div>
                            </div>

                            <div class="col-xl-6 col-sm-6">
                                <div class="single-click-chart">
                                    <div id="chart">
                                        <apexchart type="area" height="50" :options="viewChart" :series="view"></apexchart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="single-features color-style-5c31d6">
                        <div class="row align-items-center">
                            <div class="col-xl-6 col-sm-6">
                                <div class="single-click-content">
                                    <span class="features-title">TOTAL CONVERSIONS</span>
                                    <h3>10,302 <span>+0.21%</span></h3>
                                    <p>Lorem ipsum dolor sit amet, conset etur sadipscing elitr, sed.</p>
                                </div>
                            </div>

                            <div class="col-xl-6 col-sm-6">
                                <div class="single-click-chart">
                                    <div id="chart">
                                        <apexchart type="area" height="50" :options="conversionsChart" :series="conversions"></apexchart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleFeatures',
    data: function() {
        return {
            click: [{
                name: 'CLICK',
                    data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
                },
            ],
            clickChart: {
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

            view: [{
                name: 'VIEW',
                    data: [0, 50, 70, 5, 42, 15, 47, 75, 65, 19, 14]
                },
            ],
            viewChart: {
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

            conversions: [{ 
                name: "CONVERSIONS", 
                data: [0, 50, 100, 50, 42, 150, 47, 75, 10, 100, 14] 
            }],
            conversionsChart: {
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
        };
    },
}
</script>

<style lang="scss">
.single-features {
	background: #FFFFFF 0% 0% no-repeat padding-box;
	box-shadow: 0px 2px 15px #00000005;
	border: 1px solid #DFE9FF;
	border-radius: 20px;
	opacity: 1;
	padding: 28px;
	margin-bottom: 24px;
	.features-title {
		font-size: 13px;
		color: #4FCB8D;
		font-weight: 500;
		display: block;
		margin-bottom: 5px;
		letter-spacing: -0.26px;
	}
	h3 {
		font-size: 20px;
		margin-bottom: 8px;
		letter-spacing: -0.4px;
		span {
			font-size: 12px;
			font-weight: 500;
			color: #FE5957;
			position: relative;
			top: -1px;
			letter-spacing: 0px;
		}
	}
	p {
		font-size: 12px;
	}
    // .single-click-chart {
    //     .apexcharts-xaxis-texts-g, .apexcharts-yaxis-texts-g, .apexcharts-xaxistooltip, .apexcharts-tooltip, .apexcharts-gridlines-horizontal, .apexcharts-grid-borders {
    //         display: none;
    //     }
    // }
	&.color-style-1765fd {
		.features-title {
			color: #1765FD;
		}
		h3 {
			span {
				color: #28C76F;
			}
		}
	}
	&.color-style-5c31d6 {
		.features-title {
			color: #5C31D6;
		}
		h3 {
			span {
				color: #28C76F;
			}
		}
	}
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .single-features {
        padding: 15px;
        border-radius: 10px;
    }
}

/* Min width 576px to Max width 767px */
@media only screen and (min-width: 576px) and (max-width: 767px) {
    .single-features {
        padding: 25px;
    }
}

/* Min width 768px to Max width 991px */
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .single-features {
        padding: 20px;
    }
}

/* Min width 992px to Max width 1199px */
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .single-features {
        padding: 14px;
    }
}

/* Min width 1200px to Max width 1320px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
    .single-features {
        padding: 20px;
    }
}
</style>