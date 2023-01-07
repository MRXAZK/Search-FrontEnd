<template>
	<div class="verification-area">
		<div class="d-table">
			<div class="d-table-cell">
				<div class="verification-content">
					<div class="row align-items-center">
						<div class="col-lg-12 col-sm-12">
							<div class="text-start">
								<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"
									style="display: block; margin: 0 auto; margin-bottom: 10px;">
									<path
										d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"
										fill="rgb(5, 54, 16)" />
								</svg>
								<p class="verification-text">Your Verification Token Successfully Sent To Your Email</p>
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
	name: 'VerificationEmailPage',
}
</script>

<style lang="scss">
.verification-area {
	height: 100vh;
	background-image: url(../../assets/images/coming-soon-bg.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}

.verification-text {
	background-color: rgba(8, 204, 57, 0.475);
	color: rgb(5, 54, 16);
	text-align: center;
	border-radius: 5px;
	padding: 10px;
	margin-top: 20px;
}

.verification-content {
	max-width: 700px;
	border-radius: 5px;
	overflow: hidden;
	text-align: center;
	padding: 60px;
	background-color: var(--white-color);
	box-shadow: var(--box-shadow);
	margin: auto;

	h2 {
		font-size: 40px;
		margin-top: -10px;
		margin-bottom: 0;
	}

}

@media (max-width: 991px) {
	.verification-content {
		padding: 30px;
	}
}

@media (max-width: 767px) {
	.verification-content {
		padding: 15px;
	}
}
</style>