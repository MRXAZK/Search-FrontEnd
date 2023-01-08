<template>
    <div class="device-website-area">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-xxl-7">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <DeviceSessions />
                        </div>

                        <div class="col-lg-6">
                            <WebsitePerformance />
                        </div>
                    </div>
                </div>
                <div class="col-xxl-5">
                    <WebsitePerformanceChart />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DeviceSessions from './DeviceSessions'
import WebsitePerformance from './WebsitePerformance'
import WebsitePerformanceChart from './WebsitePerformanceChart'

export default {
    name: 'DeviceWebsite',
    components: {
        DeviceSessions,
        WebsitePerformance,
        WebsitePerformanceChart,
    },
}
</script>

<style lang="scss">
/* Min width 1400px to Max width 1700px */
@media only screen and (min-width: 1400px) and (max-width: 1700px) {
    .device-website-area {
        .col-xxl-7 {
            flex: 0 0 100%;
            max-width: 100%;
        }
        .col-xxl-5 {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
}
</style>