<template>
  <div class="container">
    <ImageSlider :slides="slides" />
  </div>
</template>

<script>
import ImageSlider from "./components/ImageSlider.vue";

export default {
  name: "App",
  components: {
    ImageSlider,
  },
  data() {
    return {
      slides: [
        { url: "https://picsum.photos/id/231/700/400", title: "Image slide 1" },
        { url: "https://picsum.photos/id/232/700/400", title: "Image slide 2" },
        { url: "https://picsum.photos/id/233/700/400", title: "Image slide 3" },
        { url: "https://picsum.photos/id/234/700/400", title: "Image slide 4" },
        { url: "https://picsum.photos/id/235/700/400", title: "Image slide 5" },
      ],
    };
  },
};
</script>

<style>
.container {
  margin: 100px auto 0;
  width: 700px;
  height: 400px;
}
</style>
