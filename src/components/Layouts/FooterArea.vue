<template>
    <div class="footer-area">
        <div class="container-fluid">
            <div class="footer-content">
                <p>© Odix is Proudly Owned by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterArea'
}
</script>

<style lang="scss">
.footer-content {
	text-align: center;
	background: #EBF1FF 0% 0% no-repeat padding-box;
	border: 1px solid #CAD6F2;
	border-radius: 20px;
	padding: 20px;
	margin-bottom: 12px;
	p {
		font-size: 14px;
		font-weight: 600;
		color: #292D32;
		a {
			color: #1765FD;
		}
	}
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
	.footer-content {
        padding: 15px;
        border-radius: 10px;
        p {
            font-size: 13px;
        }
    }
}
</style>