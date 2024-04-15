<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add Note"
            ref="newNoteRef"
          />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="newNote === ''"
            class="button is-link has-background-success"
          >
            Add Note
          </button>
        </div>
      </div>
    </div>

    <Note v-for="note in notes" :key="note.id" :note="note" />

    <!-- <div v-for="note in notes" :key="note.id" class="card mb-4">
      <div class="card-content">
        {{ note.content }}
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div> -->
  </div>
</template>

<script setup>
import { ref, toRaw } from 'vue'
import Note from '../components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)
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

const addNote = () => {
  let note = {
    id: parseInt(toRaw(notes.value.length + 1)),
    content: newNote.value
  }
  notes.value = [note, ...notes.value]
  newNote.value = ''
  newNoteRef.value.focus()
}
</script>
