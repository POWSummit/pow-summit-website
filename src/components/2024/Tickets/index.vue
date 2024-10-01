<template>

<section class="assocatedEventsSection"> 
		<div class="proofMainContainer assocatedEventsContainer">
			<div class="title">
				<h1>ASSOCIATED EVENTS</h1>
				<h4>Hackers Congress Paralelní Polis</h4>
				<h5>Oct. 4th – 6th, 2024 | Prague, Czechia</h5>
			</div>
			<div class="row">
				<div class="col-lg-6 pe-lg-4 pe-3 order-lg-1 order-2">
					<a href="https://tix.hcpp.cz/24/redeem?voucher=POW24" target="_blank">
						<img src="@/assets/images/signal-2024-09-10-113225_002.png" alt="" />
					</a>
				</div>
				<div class="col-lg-6 mb-lg-0 mb-5 order-lg-2 order-1 text-center">
					<p>
						Attended by over 500 fans &amp; IT experts from around the 
						world since 2014, HCPP is the flagship event of Paralelní
						Polis.
					</p>
					<p>
						<a href="https://tix.hcpp.cz/24/redeem?voucher=POW24" target="_blank">Hackers Congress Paralelní Polis</a> is a 3-day international conference on freedom, cryptoanarchy, decentralized finances, hacking and tech | October 4-6, 2024
					</p>
					<a href="https://tix.hcpp.cz/24/redeem?voucher=POW24" class="ticketCard" target="_blank"><button>GET YOUR TICKET</button></a>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import ticketsConfig from "@/config/2024/tickets.json";
export default {
	data() {
		return {
			tickets: ticketsConfig.data,
		};
	},
};
</script>
