<template>
  <div class="slider">
    <div class="arrow-left" @click="onPrevious()">❰</div>
    <div class="arrow-right" @click="onNext()">❱</div>
    <div
      class="slide"
      style="{background-image: `url(' + slides[currentIndex].url + ')`}"
    ></div>
    <!-- <div class="indicators">
      <div
        class="indicator"
        :class="{ active: currentIndex === index }"
        v-for="{item,index} in slides"
        :key="index"
        @click="onIndex(index)"
      >
        ●
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  props: ["slides"],
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    onPrevious() {
      const isFirstIndex = this.currentIndex === 0;
      this.currentIndex = isFirstIndex ? this.slides.length - 1 : this.currentIndex - 1;
    },
    onNext() {
      const isLastIndex = this.currentIndex === this.slides.length - 1;
      this.currentIndex = isLastIndex ? 0 : this.currentIndex + 1;
    },
    onIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.slider {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
}

.arrow-left {
  position: absolute;
  top: calc(50% - 34px);
  left: 30px;
  font-size: 72px;
  color: white;
  opacity: 0.3;
  cursor: pointer;
}
.arrow-left:hover {
  opacity: 1;
}
.arrow-right {
  position: absolute;
  top: calc(50% - 34px);
  right: 30px;
  font-size: 72px;
  color: white;
  opacity: 0.3;
  cursor: pointer;
}
.arrow-right:hover {
  opacity: 1;
}

.indicators {
  display: flex;
  justify-content: center;
}
.indicator {
  font-size: 30px;
  margin: 5px;
  cursor: pointer;
}

.active {
  color: gray;
  cursor: no-drop;
}
</style>
