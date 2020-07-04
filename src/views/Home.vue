<template>
  <div class="wrapper" :style="cssProps">
    <b-navbar :class="[isDark ? 'is-dracula-background' : 'nord4' ]" class="is-fixed-top">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <p>Adam Morishita</p>
        </b-navbar-item>
        <!-- <b-navbar-item>
          <div class="field" v-on:click="darkSwitch()">
            <span>🌙</span>
            <b-switch size="is-small" type="is-nord13"></b-switch>
            <span>☀️</span>
          </div>
        </b-navbar-item> -->
      <div class="field custom-nav" v-on:click="darkSwitch()">
            <span>🌙</span>
            <b-switch size="is-small" type="is-nord12"></b-switch>
            <span>☀️</span>
      </div>
      </template>
      <template slot="end">
        <b-navbar-item>
          <a href="#about" v-smooth-scroll>About Me</a>
        </b-navbar-item>
        <b-navbar-item>
          <a href="#portfolio" v-smooth-scroll>Portfolio</a>
        </b-navbar-item>
        <b-navbar-item>
          <a href="#contact" v-smooth-scroll>Contact</a>
        </b-navbar-item>
        <b-navbar-item>
          <a href="./Adam_Morishita.pdf" target="_blank">Resume</a>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div orientation="left" class="side__StyledContainer">
      <ul class="social__StyledList">
        <li>                            
            <a href="https://github.com/adam7tt" class="social__StyledLink"><i class="fab fa-github"></i></a>
        </li>
        <li>                            
            <a href="https://www.linkedin.com/in/adam-morishita-19a418170/" class="social__StyledLink"><i class="fab fa-linkedin-in"></i></a>
        </li>
        <li>                            
            <a href="mailto:adam7tt@gmail.com" class="social__StyledLink"><i class="fas fa-envelope"></i></a>
        </li>
      </ul>
    </div>

    <section>
      <div :class="[isDark ? 'is-dracula-purple' : 'nord13']" class="hero is-fullheight has-background">
        <img alt="Los Angeles Skyline" class="hero-background is-transparent" src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&auto=format&fit=crop&w=2530&q=80" />
        <div class="hero-body">
          <div class="container">
            <h1 class="subtitle is-3">Hello, my name is</h1>
            <h1 class="title is-1">Adam Morishita</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-6" id="about">
      <div class="container">
        <h1 :class="[isDark ? 'has-text-dracula-foreground ' : 'has-text-nord0' ]"
          class="title is-2 is-bold has-text-centered">About Me</h1>
        <p :class="[isDark ? 'has-text-dracula-foreground ' : 'has-text-nord0' ]" class="has-text-centered">I'm Adam Morishita, a software
          engineer based in Los Angeles, California.
          I enjoy developing software tools that helps people fulfill their needs. I've had to chance to write code for
          everything from automation scripts to fullstack web applications and even a few mobile
          applications.
          I'm a recent graduate from <a href="https://www.csun.edu/">California State University Northridge</a> where I
          earned a bachelor's in computer science and I have been lucky enough to have
          had internships at organizations like <a href="https://www.metalab.csun.edu/">META + LAB</a> and <a
            href="https://mask-me.net/">HushHush</a>.
          I currently work for <a href="https://gsep.pepperdine.edu/"> Pepperdine University's Graduate School of
            Education and Psychology</a>. Here are a few of the programming languages and technologies I use:
        </p>
        <p :class="[isDark ? 'has-text-dracula-foreground ' : 'has-text-nord0' ]" class="has-text-weight-light has-text-centered">
          Javascript, Python, Node.js, Express, Vue.js, SQL, MongoDB, Django, Selenium, HTML, CSS</p>
      </div>
    </section>
    <section class="mt-6" id="portfolio">
      <div class="container">
        <h1 :class="[isDark ? 'has-text-dracula-foreground ' : 'has-text-nord0' ]" class="title is-2 has-text-centered"
          id="portfolio">Some Things I've Built</h1>
        <div v-for="(project, index) in projects" :key="index"
          :class="[isDark ? 'has-text-dracula-foreground ' : 'has-text-nord0' ]" class="columns mt-2">
          <div class="column is-one-third has-text-centered">
            <a :href=project.heroku>
              <vue-freezeframe class="is-16by9 mx-2" :src=project.gif>
              </vue-freezeframe>
            </a>
            <p class="has-text-weight-light">
              <span>
                <a :href=project.heroku><i class="fas fa-laptop-code"></i>Demo </a> 
                <a :href=project.github><i class="fas fa-code"></i>View Source</a>
              </span>
            </p>
          </div>
          <div class="column is-two-thirds">
            <h1 class="is-size-4 ">{{ project.title }}</h1>
            <p>{{ project.description }}</p>
            <h1 class="is-size-4" >What I Used</h1>
            <p>{{ project.used }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-6" id="contact">
      <h1 :class="[isDark ? 'has-text-dracula-foreground ' : 'has-text-nord0' ]" class="title is-2 is-bold has-text-centered">Get in touch</h1>
      <p :class="[isDark ? 'has-text-dracula-foreground ' : 'has-text-nord0' ]" class=" has-text-centered">I am currently looking for new opportunities, please
        feel free to send me a message and I'll try to get back to you!</p>
      <div :class="[isDark ? ' has-background-dracula-background' : 'nord4' ]" class="mt-6 has-text-centered">
        <a href="mailto:adam7tt@gmail.com">
          <b-button :type="[isDark ? 'is-dracula-purple is-large' : 'is-nord12 is-large' ]" outlined><h1>Contact</h1></b-button>
        </a>
      </div>
    </section>
    <section>
        <footer :class="[isDark ? ' has-background-dracula-background has-text-dracula-foreground' : 'nord4 has-text-nord0' ]" class="footer mt-6">
            <div class="columns">
                <div class="column is-4 is-offset-4">
                    <div class="level sized">
                        <div class="level-item has-text-centered">
                            <font size="20">
                                <a href="https://github.com/adam7tt"><i class="fab fa-github"></i></a>
                            </font>
                        </div>
                        <div class="level-item has-text-centered">
                            <font size="20">
                                <a href="https://www.linkedin.com/in/adam-morishita-19a418170/"><i class="fab fa-linkedin-in"></i></a>
                            </font>
                        </div>
                        <div class="level-item has-text-centered">
                        <font size="20">
                            <a href="mailto:adam7tt@gmail.com"><i class="fas fa-envelope"></i></a>
                        </font>
                    </div>
                </div>     
            </div>
            </div>
      </footer>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {

    },
    methods: {
      darkSwitch(){
        this.isDark = !this.isDark
        if(this.isDark){
        this.color = '#282a36'
        this.linkColor = '#bd93f9'
        } else {
          this.color = '#D8DEE9'        
          this.linkColor = '#BF616A'
          }
      }
    },
    computed: {
      cssProps(){
        return{
          '--test': this.num + 'px',
          '--color': this.color,
          '--link-color': this.linkColor
        }
      }
    },
    data() {
      return {
        color: '#282a36',
        linkColor: '#bd93f9',
        isDark: true,
        projects: [{
            title: 'Realtime Chat',
            description: 'A real time chat application that leverages WebSockets using the Socket.IO library for full-duplex communication between multiple clients. A user can enter into a chat room and chat with other users as well as send their approximate location to other users in a room.',
            used: 'Javascript, Node.js, Socket.io, HTML, CSS',
            heroku: 'https://cryptic-retreat-98541.herokuapp.com/',
            github: 'https://github.com/adam7tt/socketio-chat-app',
            gif: 'images/chatappsped.gif'

          },
          {
            title: 'Task Tracker',
            description: 'Task tracker is a task management system built from the ground up to allow users to create and manage their own daily tasks.',
            used: 'Javascript, Vuejs, Nodejs, Express, MongoDB, Mongoose, Jest, HTML, CSS, Buefy',
            heroku: '',
            github: 'https://github.com/adam7tt/task-app',
            gif: 'images/chatappsped.gif'
          },
          {
            title: 'Weather Report',
            description: 'A weather application that uses the weatherstack API, geocoding, and reverse geocoding to allow a user to query for real time weather information around the world',
            used: 'Javascript, Nodejs, Express, HTML, CSS',
            heroku: 'https://morishita-weather-app.herokuapp.com/',
            github: 'https://github.com/adam7tt/weatherstack-app',
            gif: 'images/weather.png'
          },
          {
            title: 'Internation Community for Collaborative Content Creation',
            description: 'A SPA created for a client to serve as a hub for an international research project and youth learning initative. The application serves as a collection of brochure pages and as a knowledge repository for the youth participants. Organization heads have access to update a student portal via a headless CMS (ButterCMS) that has been integrated in the project which the student portal then consumes.',
            used: 'Javascript, Vue.js, ButterCMS, HTML, CSS',
            heroku: 'https://ic4.site/',
            github: '',
            gif: 'images/ic4.png'
          },
          {
            title: 'Ninja Smoothies',
            description: 'Ninja Smoothies is a Vue.js application that uses Google\'s Firebase. Ninja smoothies allows users to interact with a virtual smoothie recipe making platform where they can save combinations of ingredients. Users can create, update, and delete their recipes. The application interacts with Firebase\'s Firestore databases for persistent storage.',
            used: 'Javascript, Vue.js, Firebase, Firestore, HTML, CSS',
            heroku: 'https://wizardly-khorana-34cc51.netlify.app/',
            github: '',
            gif: 'images/smoothies.png'
          },
          {
            title: 'Stocktrader',
            description: 'Stocktrader is a game-ified stock trading application where users can purchase stock in a company whose valuation will randomly fluctuate. Users can cash out at the end of a day or hold onto their stock in hopes for a bigger payday.',
            used: 'Javascript, Vue.js, HTML, CSS',
            heroku: 'https://morishita-stocktrader.netlify.app/',
            github: '',
            gif: 'images/stocktrader.png'
          },
          {
            title: 'Monster Slayer',
            description: 'Monster slayer is a simple game where the user plays a hero facing a vile monster and perform a variety of moves to defeat it.',
            used: 'Javascript, Vue.js, HTML, CSS',
            heroku: 'https://morishita-monster-slayer.netlify.app/',
            github: '',
            gif: 'images/monsterhunter.png'
            
          }
          // {
          //   title: 'Ninja chat',
          //   description: 'Ninja chat emulates a real time chatroom where users can connect and talk with one another.',
          //   used: 'Javascript, Vue.js, HTML, CSS',
          //   heroku: 'https://morishita-ninjachat.netlify.app/',
          //   github: '',
          //   gif: 'images/ninachat.png'
          // }
        ],
      }
    },
  }
</script>

<style>@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Open+Sans&display=swap');

html,
body,
section {
  background-color: var(--color)
}

h1 {
  font-family: 'Inconsolata', monospace;
}

p {
  font-family: 'Open Sans', sans-serif;
}

section {
  padding-bottom: 100px;
}

.wrapper {
  z-index: -10;
  background-color: var(--color)
}

.wrapper a{
  color: var(--link-color)
}

.wrapper .navbar-menu{
  background-color: var(--color)
}

.wrapper .navbar-item.is-active{
  background-color: var(--color)
}

.wrapper a.navbar-item {
  background-color: var(--color)
}

.custom-nav {
  margin-top: 0.75em;
}

.hero-name{
  font-size: 40rem;
}

.nord4 {
  background-color: #D8DEE9 !important;
}

.nord11 {
  color: #BF616A !important;
}

.nord13 {
  color: #EBCB8B !important;
  background-color: #EBCB8B !important;
}

.side__StyledContainer {
  -webkit-font-smoothing: antialiased;
  line-height: 1.3;
  font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  font-size: 20px;
  box-sizing: inherit;
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: rgb(168, 178, 209);
}

.social__StyledList {
  -webkit-font-smoothing: antialiased;
  line-height: 1.3;
  font-size: 20px;
  color: rgb(168, 178, 209);
  box-sizing: inherit;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
  list-style: none;
}

.social__StyledList::after {
  content: "";
  display: block;
  width: 1px;
  height: 80px;
  background-color: rgb(168, 178, 209);
  margin: 0px auto;
}

.social__StyledLink {
  -webkit-font-smoothing: antialiased;
  line-height: 1.3;
  font-size: 20px;
  list-style: none;
  box-sizing: inherit;
  display: inline-block;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  padding: 10px;
}

.hero.has-background {
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
}

.hero-background.is-transparent {
  opacity: 0.4;
}

.footer {
  display: none;
}

@media screen and (max-width: 1408px) {
  .footer {
    display: block
  }
}

@media screen and (max-width: 1408px) {
  .side__StyledContainer {
    display: none
  }
}

</style>