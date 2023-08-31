<template>
    <div class="topbar">
        <div class="logo">
            <!-- <img src="/path/to/logo.png" alt="Logo" /> -->
        </div>
        <button @click="logout">Logout</button>
    </div>
</template>
  
<script setup>
import { call } from 'frappe-ui';
import { useRouter } from 'vue-router'

const router = useRouter()


const logout = () => {
    call('logout')
        .then(response => {
            router.push('/login')
        })
        .catch(error => {
            console.log(error);
        });
    // Perform logout actions here
    console.log('Logged out'); // Placeholder, replace with actual logout logic
};
</script>
  
<style scoped>
.topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: white;
}

.logo img {
    max-height: 40px;
}

button {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
}
</style>
  