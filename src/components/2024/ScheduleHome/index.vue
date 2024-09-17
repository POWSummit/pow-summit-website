<template>
	<section class="scheduleHomeSection" id="registerSpeakerSection">
		<div class="proofMainContainer registerSpeakerContainer">
			<a
				href="./2024/schedule"
				class="text-decoration-none"
			>
				<button>Event Schedule</button>
			</a>
		</div>
	</section>
</template>
<script>
import { getButton } from "@/config/2024/buttons.js";
export default {
	data() {
		return {
			becomeVolunteerButton: getButton("become_volunteer"),
			becomeSponsorButton: getButton("become_sponsor"),
		};
	},
};
</script>
