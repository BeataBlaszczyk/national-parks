<template>
  <main-layout>
    <template v-slot:top-component>
      <img
        src="https://pcweb2.azureedge.net/-/media/WET4/pn-np/pn-np-plan/AB-JAS-2014-198-1920x480.jpg?modified=20221125165428"
        class="w-100 height-img"
      />

      <p class="text-white-50 text-center pt-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will
        be distracted by the readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
        to using 'Content here, content here', making it look like readable English. Many desktop
        publishing packages and web page editors now use Lorem Ipsum as their default model text,
        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
        versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is
        not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
        College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
      </p>
      <div class="d-flex justify-content-center">
        <img src="https://picsum.photos/id/11/2500/1667" class="w-25 p-4 rounded-circle" />
        <img src="https://picsum.photos/id/10/2500/1667" class="w-25 p-4 rounded-circle" />
        <img src="https://picsum.photos/id/17/2500/1667" class="w-25 p-4 rounded-circle" />
      </div>
    </template>
  </main-layout>
</template>


<script setup>
import MainInfoComponent from '../components/MainInfoComponent/MainInfoComponent.vue'
import MainLayout from '../components/MainLayout/MainLayout.vue'
</script>

<style scoped>
.height-img {
  height: 50%;
}
</style>