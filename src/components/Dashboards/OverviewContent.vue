<template>
    <div class="overview-area">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <AudienceOverview />
                </div>

                <div class="col-lg-4">
                    <TrafficChannel />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AudienceOverview from './AudienceOverview'
import TrafficChannel from './TrafficChannel'

export default {
    name: 'OverviewContent',
    components: {
        AudienceOverview,
        TrafficChannel
    },
}
</script>

<style lang="scss">
.overview-content {
	margin-bottom: 30px;
	h3 {
		font-size: 16px;
		font-weight: 600;
		margin-bottom: 6px;
	}
	span {
		font-size: 12px;
		color: #67748E;
		letter-spacing: -0.24px;
	}
	.total-overview {
		padding: 0;
		margin-bottom: 0;
		list-style-type: none;
		li {
			display: inline-block;
			margin-right: 20px;
			&:last-child {
				margin-right: 0;
			}
			button {
				background-color: transparent;
				font-size: 12px;
				letter-spacing: -0.24px;
				border-radius: 10px;
				background-color: var(--white-color);
				border: 1px solid var(--white-color);
				width: 30px;
				height: 30px;
				line-height: 30px;
				transition: var(--transition);
				&.today {
					width: 55px;
				}
				&.active {
					color: #292D32;
					border-color:#292D32;
					background-color: #F8FAFF;
				}
				&:hover {
					color: #292D32;
					border-color:#292D32;
					background-color: #F8FAFF;
				}
			}
		}
	}
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
    .overview-content.d-flex {
        display: block !important;
        .total-overview {
            margin-top: 10px;
            li {
                margin-right: 8px;
            }
        }
    }
}

/* Min width 458px to Max width 576px */
@media only screen and (min-width: 458px) and (max-width: 576px) {
    .overview-content.d-flex {
        display: flex !important;
    }
}
</style>