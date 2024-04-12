<template>
    <div class="contact-form">
      <h1>Napisz do nas</h1>
      <form @submit.prevent="submitForm">
        <label for="name">
          Imię*
          <input type="text" id="name" v-model="form.name" required>
        </label>
        <label for="email">
          E-mail*
          <input type="email" id="email" v-model="form.email" required>
        </label>
        <label for="phone">
          Numer telefonu
          <input type="tel" id="phone" v-model="form.phone">
        </label>
        <label for="message">
          Co masz na myśli?*
          <textarea id="message" v-model="form.message" required></textarea>
        </label>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          message: ''
        }
      }
    },
    methods: {
      submitForm() {
        console.log(this.form)
      }
    }
  }
  </script>
  
  <style scoped>
.contact-form {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.contact-form h1 {
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 5px;
}
.form-group input, .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1.1rem;
}
.form-group input:focus, .form-group textarea:focus {
  outline: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
}
button:hover {
  background-color: #45a049;
}
</style>