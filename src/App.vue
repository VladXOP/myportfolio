
<template >
  <div class="portfolio">
    <header class="header">
      <div class="header-content">
        <h1>Портфоліо</h1>
        <p>Владислава</p>
        <p1>, веб-розробника</p1>
        <img class="avatar" alt="Моє лого" src="./assets/user.jpg">
      </div>
    </header>
    <h1>Мої реалізовані проєкти:</h1>
    <section class="projects">
      <div class="project" v-for="project in projects" :key="project.id">
        <!-- Перевірка на ID 6 -->
        <template v-if="project.id === 6">
          <div class="add-project" @click="showMessage">
            <span>{{ project.title }}</span>
          </div>
        </template>
        <template v-else>
          
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <a :href="project.link" target="_blank">Переглянути</a>
            
          </div>
        </template>
      </div>
    </section>


    <footer class="footer">
      <p>Зв'яжіться зі мною:</p>
      <a href="mailto:lokerfray@gmail.com">lokerfray@gmail.com</a>
    </footer>
  </div>
</template>

<script src="./PortfolioPage.js"></script>

<style src="./PortfolioPage.css"></style>
