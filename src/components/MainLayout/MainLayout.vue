<!-- eslint-disable vue/no-deprecated-slot-attribute-->
<template>
  <div class="d-column-flex justify-content-center p-5">
    <div class="p-3">
      <slot name="top-component"></slot>
    </div>
    <div class="p-3">
      <div class="d-flex justify-content-center flex-wrap justify-content-between">
        <slot name="small-component"> </slot>
      </div>
    </div>
    <div class="p-3">
      <slot name="button"></slot>
    </div>
  </div>
</template>