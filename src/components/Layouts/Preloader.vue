<template>
    <div class="preloader">
        <img src="../../assets/images/main-logo.svg" alt="main-logo">
    </div>
</template>

<script>
export default {
    name: 'PreLoader'
}
</script>

<style lang="scss">
.preloader {
	display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: var(--white-color);
	z-index: 99999;
	&.preloader-deactivate {
		visibility: hidden;
	}
}
@keyframes rotate-five {
    0%{
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(360deg);
    }
}
</style>