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
        
	</section>
    <!-- hero section with navbar ends here -->
    <section class="gallerySection">
        <div class="galleryContainer">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12 col-12 px-md-3">
                    <div class="heroCard">
                        <div class="heroCardContent">
                            <a href="/2024/photos-opening-night" class="ticketCard"><button>Opening Night Party</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-12 px-md-3">
                    <div class="heroCard">
                        <div class="heroCardContent">
                            <a href="/2024/photos-day-1-stage-1" class="ticketCard"><button>Day 1 Stage 1</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-12 px-md-3">
                    <div class="heroCard">
                        <div class="heroCardContent">
                            <a href="/2024/photos-day-1-stage-2" class="ticketCard"><button>Day 1 Stage 2</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-12 px-md-3">
                    <div class="heroCard">
                        <div class="heroCardContent">
                            <a href="/2024/photos-day-2-stage-1" class="ticketCard"><button>Day 2 Stage 1</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-12 px-md-3">
                    <div class="heroCard">
                        <div class="heroCardContent">
                            <a href="/2024/photos-day-2-stage-2" class="ticketCard"><button>Day 2 Stage 2</button></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-12 px-md-3">
                    <div class="heroCard">
                        <div class="heroCardContent">
                            <a href="/2024/photos-hive-closing-party" class="ticketCard"><button>HIVE Closing Party</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <template v-for="(item, i) in this.gallery_data" :key="i"">
                    <h2>{{ item.title }}</h2>
                    <template v-for="(imageName, j) in item.images" :key="j">
                        <div class="p-2 galleryImg" :class="getImageClass(j)">
                            <img v-lazy="require(`@/assets/images/photos/2024/${imageName}`)" @click="() => showImg(i, j)" alt="gallery-img" />
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
            gallery: 'Opening Night Party',
            gallery_data: []
        }
    },
    methods: {
        getImageClass(index) {
            const modC = Math.ceil((index + 1) / 6) * 6;
            return (index + 1) <= modC - 2 ? 'col-md-3 col-6' : 'col-lg-6 col-12';
        },
        limitData(galleryTitle) {
            return this.photos.data.filter(item => item.title===galleryTitle);
        },
        showImg(i, j) {
            let value = 0;
            for (let k = 0; k < i; k++) {
                value += this.gallery_data[k].images.length;
            }
            this.indexRef = value + j
            this.visibleRef = true
        },
        onHide() {
            this.visibleRef = false
        }
    },
    mounted() {
        this.gallery_data = this.photos.data.filter(item => item.title===this.gallery);
        for (let i = 0; i < this.gallery_data.length; i++) {
            this.imagesArr = this.imagesArr.concat(
                this.gallery_data[i].images.map(item => {
                    return require(`@/assets/images/photos/2024/${item}`)
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
