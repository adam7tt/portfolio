<template>
    <b-navbar :class="[isDark ? 'is-dracula-background' : 'is-twitter' ]"  class="is-fixed-top">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <p>Adam Morishita</p>
            </b-navbar-item>
        <b-navbar-item>
            <div class="field" v-on:click="say('hi')">
                <span>🌙</span>
                <b-switch  size="is-small" ></b-switch>
                <span>☀️</span>
            </div>
        </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item>
                    <a href="#about" v-smooth-scroll>About Me</a>
            </b-navbar-item>
            <b-navbar-item>
                    <a href="#portfolio" v-smooth-scroll >Portfolio</a>
            </b-navbar-item>
            <b-navbar-item>
                    <a href="#contact" v-smooth-scroll>Contact</a>
            </b-navbar-item>
            <b-navbar-item>
                    <a href="./Adam_Morishita.pdf" target="_blank">Resume</a>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
    components: {
     },
    data(){
        return{
            isDark: true
        }
    },
    methods: {
        say: function () {
            this.isDark = !this.isDark
        }
    }
}
</script>

<style>
</style>