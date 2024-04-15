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

    <Note
      v-for="note in notes.notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
import { ref, toRaw } from 'vue'
import { useStoreNotes } from '../stores/storeNotes'
import Note from '../components/Notes/Note.vue'
const notes = useStoreNotes()

const newNote = ref('')
const newNoteRef = ref(null)

const addNote = () => {
  notes.addNote(newNote.value)
  //   let note = {
  //     id: parseInt(toRaw(notes.value.length + 1)),
  //     content: newNote.value
  //   }
  //   notes.value = [note, ...notes.value]
  newNote.value = ''
  newNoteRef.value.focus()
}

const deleteNote = id =>
  (notes.value = notes.value.filter(note => note.id !== id))
</script>
