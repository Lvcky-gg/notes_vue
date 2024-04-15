<template>
  <div class="card mb-4">
    <div class="card-content">
      {{ note.content }}
      <div class="has-text-right has-text-gray-light mt-2">
        <small>{{ characterLength }} </small>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item" @click.prevent="handleDelete"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['deleteClicked'])

const characterLength = computed(
  () =>
    `${props.note.content.length} ${
      props.note.content.length > 1 ? 'characters' : 'character'
    }`
)

const handleDelete = () => {
  emit('deleteClicked', props.note.id)
}
</script>
