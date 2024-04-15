<template>
  <div class="card" v-for="i in 3">
    <header class="card-header">
      <p class="card-header-title">Component</p>
      <button class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </header>
    <div class="card-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam totam
      ducimus! Dolorem doloremque nesciunt error. Animi fugit maiores numquam
      ducimus tenetur aut eos repudiandae! Adipisci voluptatibus laboriosam
      harum totam?
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a href="#" class="card-footer-item">Delete</a>
    </footer>
  </div>
</template>
