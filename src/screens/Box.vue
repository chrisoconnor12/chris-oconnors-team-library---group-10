<template>
  <div class="box">
    <img
      class="group"
      alt="Group"
      src="https://c.animaapp.com/2NPaOU9a/img/group-10.png"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Box',
});
</script>

<style scoped>
.box {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: auto;
}

.group {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
