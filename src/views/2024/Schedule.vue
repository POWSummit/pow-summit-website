<template>
	<!-- hero section with navbar starts here -->
	<section class="proofHeroSecion">
		<Navbar />
	</section>
	<section class="p-0">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-12 col-lg-12">
					<section id="example">
						<div style="overflow-x: auto; width: calc(100% + 30px); padding-right: 30px">
						<pretalx-schedule event-url="https://cfp.powsummit.com/2024/" locale="en" style="--pretalx-clr-primary: #3aa57c;"></pretalx-schedule>
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
	import Navbar from "@/components/2024/Navbar";

	export default {
		data: () => ({
			event_url: 'https://pretalx.com/democon/'
		}),
		components: {
			Navbar
		},
		mounted() {
			let recaptchaScript = document.createElement('script')
			recaptchaScript.setAttribute('src', 'https://pretalx.com/democon/schedule/widget/v2.en.js')
			document.head.appendChild(recaptchaScript)

			function waitForPretalx() {

				console.log("heartbeat - waitForPretalx")

				var shadowHost = document.querySelector('pretalx-schedule');
		
		
				if (shadowHost) {

					console.log("shadowHost ready");
					console.log(shadowHost);

					var shadowRoot = shadowHost.shadowRoot;
					
					if(shadowRoot){

						console.log("shadowRoot ready");
						console.log(shadowRoot);

						console.log(shadowRoot.querySelector('.bunt-tabs.days.grid-tabs'));

						var shadowRootElements = shadowRoot.querySelector('.bunt-tabs.days');

						if (shadowRootElements){
							
							console.log("shadowRootElements ready");
							console.log(shadowRootElements);

							// Modify its inline style
							shadowRootElements.style.display = 'none'; // Hide the element

						} else {
							// Try again after a short delay
							setTimeout(waitForPretalx, 100);
						}


					} else{

						// Try again after a short delay
						setTimeout(waitForPretalx, 100);

					}				
					
				} else {
					// Try again after a short delay
					setTimeout(waitForPretalx, 100);
				}
			}

			// Start polling to wait for the element to load
			waitForPretalx();
		}
	}
</script>
