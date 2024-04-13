<template>
     <!-- Banner główny -->
  <section class="main-banner">
    <h1>Welcome to ClickFashion</h1>
    <p>Discover the latest trends in fashion!</p>
    <a href="#" class="btn">Shop Now</a>
  </section>

  <!-- Sekcja z produktami -->
  <section class="product-section">
    <h2>Featured Products</h2>
    <!-- Lista produktów -->
    <div class="product-list">
      <!-- Produkt 1 -->
      <div class="product">
        <img src="assets/product1.png" alt="Product 1">
        <h3>Product 1</h3>
        <p>Description of product 1</p>
        <a href="#" class="btn">View Details</a>
      </div>
      <!-- Produkt 2 -->
      <div class="product">
        <img src="assets/product2.png" alt="Product 2">
        <h3>Product 2</h3>
        <p>Description of product 2</p>
        <a href="#" class="btn">View Details</a>
      </div>
      <!-- Więcej produktów -->
      <!-- Dodaj kolejne divy z produktami -->
    </div>
  </section>

  <!-- Sekcja z promocjami -->
  <section class="promotion-section">
    <h2>Special Offers</h2>
    <!-- Lista promocji -->
    <div class="promotion-list">
      <!-- Promocja 1 -->
      <div class="promotion">
        <img src="assets/promotion1.png" alt="Promotion 1">
        <h3>Special Offer 1</h3>
        <p>Description of special offer 1</p>
        <a href="#" class="btn">Shop Now</a>
      </div>
      <!-- Promocja 2 -->
      <div class="promotion">
        <img src="assets/promotion2.png" alt="Promotion 2">
        <h3>Special Offer 2</h3>
        <p>Description of special offer 2</p>
        <a href="#" class="btn">Shop Now</a>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: 'main'
};
</script>

<style scoped lang="scss">
// Stylizacja dla głównego baneraa
.main-banner {
  background-image: url('banner.jpg');
  background-size: cover;
  color: #fff;
  text-align: center;
  padding: 100px 0;
}

.main-banner h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.main-banner p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.main-banner .btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff5a5f;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.main-banner .btn:hover {
  background-color: #e0454d;
}

// Stylizacja dla sekcji z produktami
.product-section {
  padding: 50px 0;
  text-align: center;
}

.product-section h2 {
  font-size: 2.5em;
  margin-bottom: 30px;
  /* Dodaj efekt animacji */
  animation: fadeInUp 1s ease-out;
}

/* Dodaj animację do tytułu */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.product {
  margin: 0 20px 40px;
  /* Dodaj efekt cieniowania */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

/* Dodaj efekt przy najechaniu kursorem */
.product:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
}

.product img {
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  /* Dodaj efekt przy najechaniu kursorem */
  transition: transform 0.3s ease-out;
}

/* Dodaj efekt przy najechaniu kursorem na obrazek */
.product img:hover {
  transform: scale(1.05);
}

.product h3 {
  margin-top: 10px;
}

.product p {
  margin-bottom: 10px;
}

.product .btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff5a5f;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.product .btn:hover {
  background-color: #e0454d;
}

// Stylizacja dla sekcji z promocjami
/* Stylizacja dla sekcji z promocjami */
.promotion-section {
  background-color: #f4f4f4;
  padding: 50px 0;
  text-align: center;
}

/* Dodaj efekt animacji dla tytułu */
.promotion-section h2 {
  font-size: 2.5em;
  margin-bottom: 30px;
  animation: fadeInUp 1s ease-out;
}

/* Dodaj animację do tytułu */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.promotion-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.promotion {
  margin: 0 20px 40px;
  /* Dodaj efekt cieniowania */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
}

/* Dodaj efekt przy najechaniu kursorem */
.promotion:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
}

.promotion img {
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  /* Dodaj efekt przy najechaniu kursorem */
  transition: transform 0.3s ease-out;
}

/* Dodaj efekt przy najechaniu kursorem na obrazek */
.promotion img:hover {
  transform: scale(1.05);
}

.promotion h3 {
  margin-top: 10px;
}

.promotion p {
  margin-bottom: 10px;
}

.promotion .btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff5a5f;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.promotion .btn:hover {
  background-color: #e0454d;
}

</style>