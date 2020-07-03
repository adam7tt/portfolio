<template>
    <section>
        <footer class="footer mt-6 has-text-dracula-foreground has-background-dracula-background">
            <div class="columns">
                <div class="column is-4 is-offset-4">
                    <div class="level sized">
                        <div class="level-item has-text-centered">
                        <!-- https://stackoverflow.com/questions/34300467/font-awesome-icon-not-resizing -->
                            <font size="20">
                                <a href="https://www.google.com"><i class="fab fa-github"></i></a>
                            </font>
                        </div>
                        <div class="level-item has-text-centered">
                            <font size="20">
                                <a href="https://www.google.com"><i class="fab fa-linkedin-in"></i></a>
                            </font>
                        </div>
                        <div class="level-item has-text-centered">
                        <font size="20">
                            <a href="https://www.google.com"><i class="fas fa-envelope"></i></a>
                        </font>
                    </div>
                </div>     
            </div>
            </div>
      </footer>
    </section>
</template>

<script>
export default {
    name: 'Foot'
}
</script>

<style>
.footer{
    display:none;
}
@media screen and (max-width: 1408px) {
  .footer {
      display:block
  }
}
</style>