<template>
    <Nav></Nav>
    <router-view></router-view>
</template>

<script>
import Main from "./components/Main.vue";
import Nav from "./components/Nav.vue";

export default {
    name: "App",
    components: {Nav, Main}
}
</script>

<style>

</style>
