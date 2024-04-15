import { defineStore } from "pinia";

const notes = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam totam ducimus! Dolorem doloremque nesciunt error. Animi fugit maiores numquam ducimus tenetur aut eos repudiandae! Adipisci voluptatibus laboriosam harum totam?",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam totam ducimus! Dolorem doloremque nesciunt error. Animi fugit maiores numquam ducimus tenetur aut eos repudiandae! Adipisci voluptatibus laboriosam harum totam?",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam totam ducimus! Dolorem doloremque nesciunt error. Animi fugit maiores numquam ducimus tenetur aut eos repudiandae! Adipisci voluptatibus laboriosam harum totam?",
  },
];

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes,
    };
  },
  actions: {
    addNote(value) {
      let note = {
        id: parseInt(this.notes.length + 1),
        content: value,
      };
      this.notes = [note, ...this.notes];
    },
  },
});
