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
        // Handle form submission here
        console.log(this.form)
      }
    }
  }
  </script>