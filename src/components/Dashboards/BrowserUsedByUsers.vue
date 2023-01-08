<template>
    <div class="total-browse-content card-box-style">
        <div class="main-title d-flex justify-content-between align-items-center">
            <h3>Browser Used By Users</h3>

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
                    <th scope="col">BROWSER</th>
                    <th scope="col">SESSIONS</th>
                    <th scope="col">BOUNCE RATE</th>
                    <th scope="col">CONVERSION RATE</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="total in totals" :key="total.id">
                    <th scope="row">
                        <router-link to="/">
                            <img :src="require(`../../assets/images/${total.image}`)" alt="chrome">
                            <span class="ms-2">{{ total.browserName }}</span>
                        </router-link>
                    </th>
                    <td>
                        <span>{{ total.sessions }}</span>
                    </td>
                    <td>
                        <span>{{ total.bounceRate }}%</span>
                    </td>
                    <td>
                        <span>{{ total.conversionRate }}%</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import totalBrowser from './totalBrowser.json'

export default {
    name: 'BrowserUsedByUsers',
    data() {
        return {
            totals: totalBrowser
        }
    }
}
</script>