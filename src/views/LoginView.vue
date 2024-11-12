<template>
    <h1>Login</h1>
    <input type="email" placeholder="email" v-model="email" id="email"/> <br/>
    <input type="password" placeholder="password" v-model="password" id="password"/> <br/><br/>
    <button @click="login">Login</button> <br/>
    <div v-if="error">
        <p class="error"> Wrong email or password </p>
    </div>
</template>
  
<script lang="ts" setup>
    import { ref, Ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useAuth } from '@/stores/useAuth'; 

    const email: Ref<string> = ref('')
    const password: Ref<string> = ref('')
    const error: Ref<boolean> = ref(false)
    const router = useRouter()
    const store = useAuth()

    const login = async () => {
        error.value = !await store.login(email.value, password.value)
        if (store.is_auth) {
            console.log('push')
            router.push({name: 'home'})
        }
    }


</script>
  
<style scoped>
    .error {
        color: red;
    }
</style>
  