<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Foot.vue'

export default {
  components:{
    Navbar,
    Foot
  }
}
</script>

<style lang="scss">



// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);
$dracula-background: #282a36;
$dracula-background-invert: findColorInvert($dracula-background);
$dracula-current-line: #44475a;
$dracula-current-line-invert: findColorInvert($dracula-current-line);
$dracula-foreground: #f8f8f2;
$dracula-foreground-invert: findColorInvert($dracula-foreground);
$dracula-comment: #6272a4;
$dracula-comment-invert: findColorInvert($dracula-comment);
$dracula-cyan: #8be9fd;
$dracula-cyan-invert: findColorInvert($dracula-cyan);
$dracula-green: #50fa7b;
$dracula-green-invert: findColorInvert($dracula-green);
$dracula-orange: #ffb86c;
$dracula-orange-invert: findColorInvert($dracula-orange);
$dracula-pink: #ff79c6;
$dracula-pink-invert: findColorInvert($dracula-pink);
$dracula-purple: #bd93f9;
$dracula-purple-invert: findColorInvert($dracula-purple);
$dracula-red: #ff5555;
$dracula-red-invert: findColorInvert($dracula-red);
$dracula-yellow: #f1fa8c;
$dracula-yellow-invert: findColorInvert($dracula-yellow);
$nord0: #2E3440;
$nord0-invert: findColorInvert($nord0);
$nord1: #3B4252;
$nord2: #434C5E;
$nord3: #4C566A;
$nord4: #D8DEE9;
$nord5: #E5E9F0;
$nord5-invert: findColorInvert($nord5);
$nord6: #ECEFF4;
$nord7: #8FBCBB;
$nord8: #88C0D0;
$nord9: #81A1C1;
$nord10: #5E81AC;
$nord11: #BF616A;
$nord12: #D08770;
$nord12-invert: findColorInvert($nord12);
$nord13: #EBCB8B;
$nord14: #A3BE8C;
$nord15: #B48EAD;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert),
    "dracula-background": ($dracula-background, $dracula-background-invert),
    "dracula-current-line": ($dracula-current-line, $dracula-current-line-invert),
    "dracula-foreground": ($dracula-foreground, $dracula-foreground-invert),
    "dracula-comment": ($dracula-comment, $dracula-comment-invert),
    "dracula-cyan": ($dracula-cyan, $dracula-cyan-invert),
    "dracula-green": ($dracula-green, $dracula-green-invert),
    "dracula-orange": ($dracula-orange, $dracula-orange-invert),
    "dracula-pink": ($dracula-pink, $dracula-pink-invert),
    "dracula-purple": ($dracula-purple, $dracula-purple-invert),
    "dracula-red": ($dracula-red, $dracula-red-invert),
    "dracula-yellow":($dracula-yellow, $dracula-yellow-invert),
    "nord0": ($nord0, $nord0-invert),
    "nord5": ($nord5, $nord5-invert),
    "nord12": ($nord12, $nord12-invert)
);
// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
