<template>
  <div>
    <div class="chapter-overview">
      <span class="icon-container">
        <img class="icon-img" :src="icon" alt="" />
      </span>
      <b>{{ title }}</b>
      <span class="icon-container">
        <img class="icon-img" src="../static/img/location.png" alt="" />
      </span>
      <div>{{ location }}</div>
      <span class="icon-container">
        <img class="icon-img" src="../static/img/duration.png" alt="" />
      </span>
      <div>{{ duration }}</div>
    </div>
    <div class="chapter-details">
      <div v-if="details">
        <ul>
          <li :key="i" v-for="(d, i) in details">{{ d }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    location: String,
    duration: String,
    details: Array,
  },
}
</script>

<style>
.chapter-overview {
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-rows: repeat(3, auto);
  row-gap: 10px;
}

.chapter-details {
  padding-left: 15px;
}
</style>
