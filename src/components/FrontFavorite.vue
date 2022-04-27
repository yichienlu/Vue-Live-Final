<template>
  <router-link to="/favorites" class="nav-link text-center" style="cursor: pointer">
    <div data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <i class="bi bi-heart position-relative" style="font-size: 24px">
        <div v-if="favorite.length" class="bg-dark rounded-pill position-absolute top-0 start-100 translate-middle text-white text-center" style="width:20px; height:20px; font-size: 10px; line-height: 20px; font-style: normal;">
          {{ favorite.length }}
        </div>
      </i>
      <div class="d-lg-none">
        <small>
          收藏清單
        </small>
      </div>
    </div>
  </router-link>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  name: 'FrontFavorite',
  data () {
    return {
      favorite: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  methods: {
    getFavorite () {
      this.favorite = JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  mounted () {
    emitter.on('get-favorite', () => {
      this.getFavorite()
    })
  }
}
</script>
