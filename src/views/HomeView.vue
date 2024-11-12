<template>
  <h1> Home </h1>
  <button @click="logOut">Logout</button>
  <h1> Posts</h1>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <routerLink :to="{name:'detail', params: {id:post.id}}">
        <h5>{{ post.title }}</h5>
      </routerLink> 
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from 'vue';
import { useAuth } from '@/stores/useAuth';
import { useRouter } from 'vue-router';
import PostService from '@/services/PostService';
import IPost from '@/interfaces/IPost';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const router = useRouter()
    const postService = new PostService()
    const posts: Ref<Array<IPost>> = postService.getPosts()
    const posts2: Ref<Array<IPost>> = ref([])

    const logOut = () => {
      const store = useAuth()
      console.log('logout');
      store.logOut();
      router.push({ name: 'login' })
    }

    onMounted( async () => {
      await postService.fetchAll()
    })

    return {
      logOut,
      posts
    };
  },
});
</script>
