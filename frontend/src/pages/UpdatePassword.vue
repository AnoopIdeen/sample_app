<template>
    <div class="flex align-items-center" style="height: 100vh; width: 100%; background-color: #ffffff;">
        <div class="login-container lg:col-6 lg:col-offset-3 md:col-12 md:col-offset-0">
            <div class="flex justify-content-center mb-5">
                <img class="logo" src="../logo/logo-f.png" alt="logo">
            </div>
            <!-- <div class="flex flex-wrap align-items-center mb-3" style="justify-content: center;">
                <p class="font-semibold">Set Password</p>
            </div> -->
            <div class="flex flex-wrap align-items-center mb-3">
                <InputText id="password" v-model="new_password" placeholder="New Password" class="input-text p-3" />
            </div>
            <div class="flex flex-wrap align-items-center mb-3">
                <InputText id="re-password" v-model="confirm_password" placeholder="Confirm Password"
                    class="input-text p-3" />
            </div>
            <Button label="Confirm" class="button-submit p-3 mt-4 font-normal" @click="update_password"
                :disabled="loading"></Button>
        </div>
        <Footer />
        <Toast />
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { call } from 'frappe-ui'
import Footer from '../components/Footer.vue';
import { useRouter } from 'vue-router'
import { useToast } from "primevue/usetoast";
const toast = useToast();

const key = ref('');
const new_password = ref('');
const confirm_password = ref('');
const router = useRouter()
const loading = ref(false);

onMounted(() => {
    const params = new URLSearchParams(window.location.search);
    key.value = params.get('key') || '';
});

const update_password = () => {
    if (new_password.value == confirm_password.value) {
        loading.value = true;
        call('frappe.core.doctype.user.user.update_password', { key: key.value, old_password: "", new_password: new_password.value, confirm_password: confirm_password.value, logout_all_sessions: 1, })
            .then(response => {
                loading.value = false;
                router.push('/')
            })
            .catch(error => {
                loading.value = false;
                toast.add({ severity: 'warn', summary: 'Error', detail: JSON.stringify(error.messages[0]), life: 3000 });
            });
    } else {
        toast.add({ severity: 'info', summary: 'info', detail: 'Passwords do not match', life: 3000 });
    }
}
</script>

<style scoped>
.logo {
    height: 80px;
}

.login-container {
    text-align: center;
    padding: 0px 150px;
}

@media (min-width: 1024px) and (max-width: 1199px) {
    .login-container {
        padding: 0px 50px !important;
    }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .login-container {
        padding: 0px 50px !important;
    }
}

@media (max-width: 576px) {
    .login-container {
        padding: 0px 15px !important;
    }
}

.input-text {
    width: 100%;
    border-radius: 15px;
    border: none;
    font-size: 13px;
    border: 1px solid #DCD2FF;

}

.input-text:enabled:hover {
    /* color: #ffffff; */
    border: 1px solid #DCD2FF;
}

.p-inputtext:enabled:focus {
    border-color: #DCD2FF;
}

.forgot-password {
    font-size: 13px;
    font-weight: 200;
    color: #53b5c6;
}

.button-submit {
    width: 100%;
    border-radius: 15px;
    border: none;
    font-size: 15px;
    background-color: #7C59F4;

}

.p-button:enabled:hover {

    background: #8c6df0;
    color: #ffffff;
    border-color: #8c6df0;
}
</style>
  