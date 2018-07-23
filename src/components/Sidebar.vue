<template>
    <div class="sidebar">
        <div class="overview">
            <h1>Charles Xie</h1>
            <h5>Flower to Plato</h5>
        </div>
        <div class="info">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>
