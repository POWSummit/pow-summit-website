import { createRouter, createWebHistory } from "vue-router";

import HomeView_2023 from "@/views/2023/HomeView";
import HomeView_2024 from "@/views/2024/HomeView";

import CookiePolicy from "@/views/CookiePolicy.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";

import Videos_2023 from "@/views/2023/Videos.vue";
import Videos_2024 from "@/views/2024/Videos.vue";
import Photos_2023 from "@/views/2023/Photos.vue";
import Photos_2023_Opening_Night from "@/views/2023/Photos-Opening-Night.vue";
import Photos_2023_Day_1 from "@/views/2023/Photos-Day-1.vue";
import Photos_2023_Day_2 from "@/views/2023/Photos-Day-2.vue";
import Photos_2024 from "@/views/2024/Photos.vue";
import Photos_2024_Opening_Night from "@/views/2024/Photos-Opening-Night.vue";
import Photos_2024_Day_1_Part_1 from "@/views/2024/Photos-Day-1-Part-1.vue";
import Photos_2024_Day_1_Part_2 from "@/views/2024/Photos-Day-1-Part-2.vue";
import Photos_2024_Day_2_Part_1 from "@/views/2024/Photos-Day-2-Part-1.vue";
import Photos_2024_Day_2_Part_2 from "@/views/2024/Photos-Day-2-Part-2.vue";
import Photos_2024_Hive_Closing_Party from "@/views/2024/Photos-Hive-Closing-Party.vue";
import PostView from "@/views/PostView.vue";
import Blog from "@/views/Blog.vue";
import Schedule from "@/views/2024/Schedule.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView_2024,
	},
	{
		path: "/2023",
		name: "2023",
		component: HomeView_2023,
	},
	{
		path: "/2024",
		name: "2024",
		component: HomeView_2024,
	},
	{
		path: "/cookie-policy",
		name: "cookie",
		component: CookiePolicy,
	},
	{
		path: "/privacy-policy",
		name: "privacy",
		component: PrivacyPolicy,
	},
	{
		path: "/2024/schedule",
		name: "2024schedule",
		component: Schedule,
	},
	{
		path: "/2024/videos",
		name: "2024videos",
		component: Videos_2024,
	},
	{
		path: "/2023/videos",
		name: "2023videos",
		component: Videos_2023,
	},
	{
		path: "/photos",
		name: "photos",
		component: Photos_2024,
	},
	{
		path: "/videos",
		name: "videos",
		component: Videos_2024,
	},
	{
		path: "/2023/photos",
		name: "2023photos",
		component: Photos_2023,
	},
	{
		path: "/2023/photos-opening-night",
		name: "2023-photos-opening-night",
		component: Photos_2023_Opening_Night,
	},
	{
		path: "/2023/photos-day-1",
		name: "photos-day-1",
		component: Photos_2023_Day_1,
	},
	{
		path: "/2023/photos-day-2",
		name: "photos-day-2",
		component: Photos_2023_Day_2,
	},
	{
		path: "/2024/photos",
		name: "2024photos",
		component: Photos_2024,
	},
	{
		path: "/2024/photos-opening-night",
		name: "2024-photos-opening-night",
		component: Photos_2024_Opening_Night,
	},
	{
		path: "/2024/photos-day-1-part-1",
		name: "photos-day-1-part-1",
		component: Photos_2024_Day_1_Part_1,
	},
	{
		path: "/2024/photos-day-1-part-2",
		name: "photos-day-1-part-2",
		component: Photos_2024_Day_1_Part_2,
	},
	{
		path: "/2024/photos-day-2-part-1",
		name: "photos-day-2-part-1",
		component: Photos_2024_Day_2_Part_1,
	},
	{
		path: "/2024/photos-day-2-part-2",
		name: "photos-day-2-part-2",
		component: Photos_2024_Day_2_Part_2,
	},
	{
		path: "/2024/photos-hive-closing-party",
		name: "photos-hive-closing-party",
		component: Photos_2024_Hive_Closing_Party,
	},
	{
		path: "/blog",
		name: "blog",
		component: Blog,
	},
	{
		path: "/posts/:alias",
		name: "posts",
		component: PostView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		window.scrollTo({ top: 0, behavior: "instant" });
	},
});

export default router;
