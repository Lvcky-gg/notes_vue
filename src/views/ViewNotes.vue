<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea v-model="newNote" class="textarea" placeholder="Add Note" />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">
            Add Note
          </button>
        </div>
      </div>
    </div>

    <div v-for="note in notes" :key="note.id" class="card mb-4">
      <header class="card-header">
        <p class="card-header-title">Component</p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div class="card-content">
        {{ note.content }}
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newNote = ref('')

const notes = ref([
  {
    id: 1,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam totam ducimus! Dolorem doloremque nesciunt error. Animi fugit maiores numquam ducimus tenetur aut eos repudiandae! Adipisci voluptatibus laboriosam harum totam?'
  },
  {
    id: 2,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam totam ducimus! Dolorem doloremque nesciunt error. Animi fugit maiores numquam ducimus tenetur aut eos repudiandae! Adipisci voluptatibus laboriosam harum totam?'
  },
  {
    id: 3,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam totam ducimus! Dolorem doloremque nesciunt error. Animi fugit maiores numquam ducimus tenetur aut eos repudiandae! Adipisci voluptatibus laboriosam harum totam?'
  }
])
</script>
