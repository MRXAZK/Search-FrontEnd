<template>
    <div class="all-section-area">
        <MainHeader />
        <main class="main-content-wrap">
            <PageTitle mainTitle="Profile" pageTitle="Profile" />
            <ProfileContent />
            <div class="flex-grow-1"></div>
            <FooterArea />
        </main>
    </div>
</template>

<script>
import MainHeader from '../Layouts/MainHeader'
import PageTitle from '../Common/PageTitle'
import ProfileContent from '../Profile/ProfileContent'
import FooterArea from '../Layouts/FooterArea'

const ProfilePage = () => {
    return (
        <div class="all-section-area">
            <MainHeader />
            <main class="main-content-wrap">
                <PageTitle mainTitle="Profile" pageTitle="Profile" />
                <ProfileContent />
                <div class="flex-grow-1"></div>
                <FooterArea />
            </main>
        </div>
    )
}

export default ProfilePage

</script>