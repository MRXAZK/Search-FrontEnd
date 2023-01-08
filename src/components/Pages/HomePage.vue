<template>
    <div class="all-section-area">
        <MainHeader />
        <main class="main-content-wrap">
            <SingleFeatures />
            <OverviewContent />
            <DeviceWebsite />
            <TotalVisitsBrowser />
            <FooterArea />
        </main>
    </div>
</template>

<script>
import MainHeader from '../Layouts/MainHeader'
import SingleFeatures from '../Dashboards/SingleFeatures'
import OverviewContent from '../Dashboards/OverviewContent'
import DeviceWebsite from '../Dashboards/DeviceWebsite'
import TotalVisitsBrowser from '../Dashboards/TotalVisitsBrowser'
import FooterArea from '../Layouts/FooterArea'

export default {
    name: 'HomePage',
    components: {
        MainHeader,
        SingleFeatures,
        OverviewContent,
        DeviceWebsite,
        TotalVisitsBrowser,
        FooterArea,
    },
    mounted() {
        document.body.classList.add('body-bg-f8faff')
    },
}
</script>