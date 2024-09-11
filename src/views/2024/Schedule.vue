<template>
	<!-- hero section with navbar starts here -->
	<section class="proofHeroSecion">
		<nav class="navbar navbar-expand-lg proofNav">
			<div class="container-fluid">
				<button
					class="navbar-toggler order-lg-1 order-1"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					class="collapse navbar-collapse order-lg-2 order-3"
					id="navbarSupportedContent"
				>
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="/"
								>POW Summit</a
							>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</section>
	<section class="p-0">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-12">
					<section id="example">
						<div style="overflow-x: auto; width: calc(100% + 30px); padding-right: 30px">
						<pretalx-schedule event-url="https://pretalx.com/democon/" locale="en" style="--pretalx-clr-primary: #3aa57c;"></pretalx-schedule>
						</div>
						<noscript>
						<div class="pretalx-widget">
								<div class="pretalx-widget-info-message">
									JavaScript is disabled in your browser. To access our schedule without JavaScript,
									please <a target="_blank" href="https://pretalx.com/democon/schedule/">click here</a>.
								</div>
							</div>
						</noscript>
					</section>
				</div>
			</div>
		</div>
	</section>
	<footer class="proofFooter">
		<div class="footerContainer">
			<ul class="footerLinks">
				<li>
					<a href="/">POW Summit</a>
				</li>
			</ul>
			<h1>BROUGHT TO YOU BY</h1>
			<div class="footerLogo">
				<a href="https://litecoin.net">
					<img src="@/assets/images/footer-logo1.png" alt="" />
				</a>
				<a href="https://etccooperative.org">
					<img src="@/assets/images/footer-logo2.png" alt="" />
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
  export default {
    data: () => ({
      event_url: 'https://pretalx.com/democon/'
    }),
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://pretalx.com/democon/schedule/widget/v2.en.js')
      document.head.appendChild(recaptchaScript)
    }
  }
</script>
