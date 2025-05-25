<template>
  <div id="app-container">
    <div class="quote-box">
      <div class="quote-content">
        <span class="quote-icon">🙶</span>
        <p class="quote-text">{{ text }}</p>
      </div>
      <div class="quote-author">
        - {{ author }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      text: "Selamat pagi tutor, ini adalah tugas kedua saya",
      author: "Muhammad Perdiansyah"
    }
  }
}
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Raleway:400,500");
  
  body {
    font-family: Raleway, sans-serif;
    margin: 0;
  }

  #app-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: orange;
  }

  .quote-box {
    background-color: white;
    padding: 50px;
    max-width: 800px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .quote-content {
    display: flex;
    gap: 20px;
  }

  .quote-icon {
    font-size: 90px;
    color: #555;
  }

  .quote-text {
    color: orange;
    font-size: 40px;
  }

  .quote-author {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    color: #555;
  }
</style>
