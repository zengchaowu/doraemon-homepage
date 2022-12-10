<template>
  <div class="absolute inset-0 flex flex-col">
    <TheHeader />
    <div class="flex-grow overflow-y-auto">
      <div class="max-w-390 self-center py-10">
        <slot />
      </div>
    </div>
  </div>
</template>
