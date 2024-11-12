<template>
    <h1>{{ post.title }}</h1>
    <p> {{ post.body }}</p>
    <RouterLink :to="{name:'home'}" class="link">Volver atras</RouterLink>
</template>
  
<script lang="ts" setup>
    import PostService from '@/services/PostService';
    import { useRoute } from 'vue-router'
    import { onMounted } from 'vue';

    const postService = new PostService()
    const post = postService.getPost()

    onMounted( async () => {
        const router = useRoute()
        const elm = router.params.id
        
        await postService.fetchById(elm)
    })
</script>
  
<style scoped>
</style>
  