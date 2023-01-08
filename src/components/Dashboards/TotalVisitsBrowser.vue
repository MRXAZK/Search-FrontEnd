<template>
    <div class="total-visits-browse-area">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-xxl-6">
                    <TotalVisits />
                </div>

                <div class="col-xxl-6">
                    <BrowserUsedByUsers />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TotalVisits from './TotalVisits'
import BrowserUsedByUsers from './BrowserUsedByUsers'

export default {
    name: 'TotalVisitsBrowser',
    components: {
        TotalVisits,
        BrowserUsedByUsers
    },
}
</script>

<style lang="scss">
.total-visits-browse-area {
	overflow: auto;
}
</style>