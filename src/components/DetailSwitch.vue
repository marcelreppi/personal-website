<template>
  <div>
    <div class="detail-switch" @click="onDetailClick">
      <div class="arrow" ref="arrow"></div>
      <div>{{ switchWord }} details</div>
    </div>
    <slot v-if="showSlot"></slot>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showSlot: false,
      switchWord: "More",
    }
  },
  methods: {
    onDetailClick: function() {
      this.showSlot = !this.showSlot

      if (this.showSlot) {
        this.$refs.arrow.style.marginTop = "-6px"
        this.$refs.arrow.style.transform = "rotate(135deg)"
        this.switchWord = "Less"
      } else {
        this.$refs.arrow.style.marginTop = "0px"
        this.$refs.arrow.style.transform = "rotate(45deg)"
        this.switchWord = "More"
      }
    },
  },
}
</script>

<style>
.detail-switch {
  color: rgb(95, 95, 95);
  display: flex;
  align-items: center;
}

.detail-switch:hover {
  cursor: pointer;
}

.rotate {
  transform: rotate(135deg);
  margin-top: -6px;
}

.arrow {
  transition: all 0.5s;
  margin-right: 8px;
  margin-left: -5px;
  width: 6px;
  height: 6px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  transform: rotate(45deg);
}
</style>