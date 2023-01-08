<template>
	<div class="total-visits-content card-box-style">
		<div class="main-title d-flex justify-content-between align-items-center">
			<h3>Total Visits</h3>

			<select class="form-select form-control" aria-label="Default select example">
				<option selected>30 days</option>
				<option value="1">15 days</option>
				<option value="2">10 days</option>
				<option value="3">7 days</option>
			</select>
		</div>

		<table class="table align-middle">
			<thead>
				<tr>
					<th scope="col">LINK</th>
					<th scope="col">PAGE TITLE</th>
					<th scope="col">PERCENTAGE (%)</th>
					<th scope="col" class="present">VALUE</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="visit in visits" :key="visit.id">
					<th scope="row">
						<router-link to="/">
							<img src="../../assets/images/icon/link.svg" alt="link">
						</router-link>
					</th>
					<td>
						<span>{{ visit.title }}</span>
					</td>
					<td>
						<div :class="visit.class">
							<div class="progress-bar" role="progressbar" aria-label="Example with label"
								:style="{ width: visit.percent + '%' }" :aria-valuenow="visit.percent" aria-valuemin="0"
								aria-valuemax="100">
							</div>
						</div>
					</td>
					<td class="present">
						<span>{{ visit.percent }}%</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import totalVisits from './totalVisits.json'

export default {
	name: 'TotalVisits',
	data() {
		return {
			visits: totalVisits,
		}
	}
}
</script>

<style lang="scss">
.total-visits-content {
	margin-bottom: 24px;
	overflow: hidden;

	.main-title {
		margin-bottom: 15px;
	}

	.table {
		border-color: #dee2e6;

		&>tbody {
			border-color: #F8FAFF;
		}

		&>:not(caption)>*>* {
			padding: 20px 10px;
		}

		.present {
			position: relative;
			left: 50px;
		}

		thead {
			tr {
				th {
					font-size: 12px;
					letter-spacing: 0px;
					border-color: #F8FAFF;
					font-weight: 400;
					color: #67748E;
				}
			}
		}

		tbody {
			tr {
				td {
					span {
						font-size: 14px;
						font-weight: 500;
						color: #292D32;
					}

					.progress {
						background-color: transparent;
						position: relative;
						z-index: 1;
						border-radius: 30px;
						height: 10px;

						&::before {
							content: "";
							position: absolute;
							top: 3px;
							left: 0;
							width: 100%;
							height: 5px;
							background-color: #E2EAFB;
							z-index: -1;
							border-radius: 30px;
						}

						&.services {
							&::before {
								background-color: #E5FFF2;
							}

							.progress-bar {
								background-color: #28C76F;
							}
						}

						&.products {
							&::before {
								background-color: #F3EFFF;
							}

							.progress-bar {
								background-color: #5C31D6;
							}
						}

						&.blog {
							&::before {
								background-color: #FFFAEB;
							}

							.progress-bar {
								background-color: #FEC107;
							}
						}

						&.contact {
							&::before {
								background-color: #FFEEEE;
							}

							.progress-bar {
								background-color: #FE5957;
							}
						}

						.progress-bar {
							border-radius: 30px !important;
							height: 10px;
						}
					}
				}
			}
		}
	}

	.single-devic {
		margin-bottom: 0;
	}
}

.total-browse-content {
	padding: 30px;
	margin-bottom: 24px;

	.main-title {
		margin-bottom: 15px;
	}

	.table {
		border-color: #dee2e6;

		&>tbody {
			border-color: #F8FAFF;
		}

		&>:not(caption)>*>* {
			padding: 15px 10px;
		}

		.present {
			position: relative;
			left: 50px;
		}

		thead {
			tr {
				th {
					font-size: 12px;
					letter-spacing: 0px;
					border-color: #F8FAFF;
					font-weight: 400;
					color: #67748E;
				}
			}
		}

		tbody {
			tr {
				td {
					span {
						font-size: 14px;
						font-weight: 500;
						color: #292D32;
					}

					a {
						span {
							font-size: 14px;
							font-weight: 500;
						}
					}
				}

				th {
					a {
						span {
							font-size: 14px;
							font-weight: 500;
							color: #292D32;
						}
					}
				}
			}
		}
	}
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
	.total-visits-content {
		overflow: auto;

		table {
			thead {
				tr {
					th {
						white-space: nowrap;
					}
				}
			}

			tbody {
				tr {
					td {
						white-space: nowrap;
						padding: 15px;
					}
				}
			}
		}
	}

	.total-browse-content {
		overflow: auto;

		table {
			thead {
				tr {
					th {
						white-space: nowrap;
						padding-right: 140px !important;
					}
				}
			}

			tbody {
				tr {
					td {
						white-space: nowrap;
						padding: 15px;
					}
				}
			}
		}
	}
}

/* Min width 1200px to Max width 1320px */
@media only screen and (min-width: 1200px) and (max-width: 1399px) {
	.total-visits-content {
		overflow: hidden;
	}
}
</style>