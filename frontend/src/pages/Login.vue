<template>
    <div class="login-container">
        <Card style="width: 30em; padding: 20px;">
            <template #title> Login </template>
            <template #content>
                <div class="flex flex-column gap-2">
                    <label for="username">Username</label>
                    <InputText id="username" v-model="username" placeholder="Username" />
                </div>
                <div class="flex flex-column gap-2">
                    <label for="password">Password</label>
                    <InputText id="password" type="password" v-model="password" placeholder="Password"
                        @keyup.enter="login" />
                </div>


            </template>
            <template #footer>
                <Button label="Login" @click="login" />
            </template>
        </Card>
        <Toast />
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { call } from 'frappe-ui'
import { useRouter } from 'vue-router'

import { useToast } from "primevue/usetoast";
const toast = useToast();


const username = ref('');
const password = ref('');


const router = useRouter()

var baseUrl = window.location.origin


const login = () => {

    //  const login = call('login', { usr: username.value, pwd: password.value })

    call('login', { usr: username.value, pwd: password.value })
        .then(response => {
            console.log(response);
            if (response.full_name == 'Administrator') {
                window.location.href = baseUrl + '/app/build';
            } else {
                router.push('/')
            }

        })
        .catch(error => {
            toast.add({ severity: 'info', summary: 'info', detail: 'Invalid Credentials', life: 3000 });

            console.log(error);
        });
};
</script>
<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.login-card {
    width: 300px;
    padding: 20px;
}
</style>