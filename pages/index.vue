<template>
  <div class="grid grid-cols-3 gap-8">
    <div
      v-for="i in 10"
      :key="i"
      class="flex transition-all hover:drop-shadow-2xl"
    >
      <img
        class="w-full rounded-xl"
        src="https://pixso-public.oss-accelerate.aliyuncs.com/cmt-activity/cover_13?1670292087"
      />
    </div>
  </div>
</template>
