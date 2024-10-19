<template>
    <!-- hero section with navbar starts here -->
	<section class="proofHeroSecion">
		<Navbar />

        <div class="proofOfWorkMainContainer" id="proofOfWorkMainContainer">
            <div class="proofOfWorkContainer">
                <div class="proofMainContainer">
                    <div class="proofOfWorkImg">
                        <img src="@/assets/images/proof-of-work-2024.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="galleryHeroContainer">
            <h1>Proof of Work 2024 Conference Photos - Frankurt</h1>
        </div>
        <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 px-md-3">
                    <div class="heroCard">
                        <div class="heroCardImg">
                            <h3>Opening Night Party</h3>
                        </div>
                        <div class="heroCardContent">
                            <a href="/photos-2023-opening-night" class="ticketCard"><button>View Gallery</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 px-md-3">
                    <div class="heroCard">
                        <div class="heroCardImg">
                            <h3>Day 1</h3>
                        </div>
                        <div class="heroCardContent">
                            <a href="/photos-2023-day-1" class="ticketCard"><button>View Gallery</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6 col-12 px-md-3">
                    <div class="heroCard">
                        <div class="heroCardImg">
                            <img src="@/assets/images/heroImg3-2023.png" alt="" />
                        </div>
                        <div class="heroCardImg">
                            <h3>Day 2</h3>
                        </div>
                        <div class="heroCardContent">
                            <a href="/photos-2023-day-2" class="ticketCard"><button>View Gallery</button></a>
                        </div>
                    </div>
                </div>
            </div>
	</section>
    <!-- hero section with navbar ends here -->
    <section class="gallerySection">
        <div class="galleryContainer">
            <div class="row">
                <template v-for="(item, i) in photos.data" :key="i">
                    <h2>{{ item.title }}</h2>
                    <template v-for="(imageName, j) in item.images" :key="j">
                        <div class="p-2 galleryImg" :class="getImageClass(j)">
                            <img v-lazy="require(`@/assets/images/photos/2023/${imageName}`)" @click="() => showImg(i, j)" alt="gallery-img" />
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </section>

    <vue-easy-lightbox :visible="visibleRef" :imgs="imagesArr" :index="indexRef" @hide="onHide" :moveDisabled="true" :rotateDisabled="true"></vue-easy-lightbox>

	<!-- location section starts here -->
	<Footer />
	<!-- location section ends here -->
</template>
<script>
import photos from "@/config/2024/photos.json";
import Navbar from "@/components/2024/Navbar";
import Footer from "@/components/2024/Footer";
import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox';

export default {
    components: {
		Navbar,
		Footer,
        VueEasyLightbox,
	},
    data() {
        return {
            photos,
            visibleRef: false,
            indexRef: 0,
            imagesArr: [],
        }
    },
    methods: {
        getImageClass(index) {
            const modC = Math.ceil((index + 1) / 6) * 6;
            return (index + 1) <= modC - 2 ? 'col-md-3 col-6' : 'col-lg-6 col-12';
        },
        showImg(i, j) {
            let value = 0;
            for (let k = 0; k < i; k++) {
                value += this.photos.data[k].images.length;
            }
            this.indexRef = value + j
            this.visibleRef = true
        },
        onHide() {
            this.visibleRef = false
        },
    },
    mounted() {
        for (let i = 0; i < this.photos.data.length; i++) {
            this.imagesArr = this.imagesArr.concat(
                this.photos.data[i].images.map(item => {
                    return require(`@/assets/images/photos/2023/${item}`)
                }));
        }
    },
}
</script>
<style>
.galleryContainer h2 {
    color: #fff;
    text-align: center;
    padding-top: 40px;
}
</style>
