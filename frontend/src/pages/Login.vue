<template>
    <div class="flex align-items-center" style="height: 100vh; width: 100%; background-color: var(--background-color);">
        <div v-if="!is_forgot" class="login-container lg:col-6 lg:col-offset-3 md:col-12 md:col-offset-0">
            <div class="flex justify-content-center mb-5">
                <img class="logo" src="../logo/logo-f.png" alt="logo">
            </div>
            <div class="flex flex-wrap align-items-center mb-3">
                <InputText type="email" id="email" v-model="username" placeholder="Email" class="input-text p-3"
                    @keyup.enter="login" />
            </div>
            <div class="flex flex-wrap align-items-center">
                <Password id="password1" v-model="password" placeholder="Password" :toggleMask="true" class="w-full mb-3"
                    inputClass="w-full"
                    inputStyle="padding:1rem; border: 1px solid #DCD2FF; font-size: 13px; border-radius: 15px;"
                    :feedback="false" @keyup.enter="login">
                </Password>
            </div>
            <div class="flex flex-row-reverse">
                <a class="forgot-password font-medium no-underline text-right cursor-pointer">
                    <span @click="() => is_forgot = true">
                        Forgot password?
                    </span>
                </a>
            </div>
            <Button label="Sign In" class="button-submit p-3 mt-4 font-normal" @click="login" :disabled="loading"></Button>
        </div>
        <div v-else class="login-container lg:col-6 lg:col-offset-3 md:col-12 md:col-offset-0">
            <div class="flex justify-content-center mb-5">
                <img class="logo" src="../logo/logo-f.png" alt="logo">
            </div>
            <!-- <div class="flex flex-wrap align-items-center mb-3" style="justify-content: center;">
                <p class="font-semibold" style="color: var(--primary-color);">Forgot Password</p>
            </div> -->
            <div class="flex flex-wrap align-items-center mb-3">
                <InputText type="email" id="re-email" v-model="reset_email" placeholder="Email" class="input-text p-3"
                    @keyup.enter="reset_password" />
            </div>
            <Button label="Reset Password" class="button-submit p-3 mt-4 font-normal" @click="reset_password"
                :disabled="loading"></Button>

            <div class="flex flex-wrap align-items-center mt-5" style="justify-content: center;">
                <a class="forgot-password font-medium no-underline cursor-pointer" style="align-self: center;">
                    <span @click="() => is_forgot = false">
                        Back to Login
                    </span>
                </a>
            </div>
        </div>
        <Footer />
        <Toast />
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { call } from 'frappe-ui'
import Footer from '../components/Footer.vue';
import { useRouter } from 'vue-router'

import { useToast } from "primevue/usetoast";
const toast = useToast();
var baseUrl = window.location.origin

const is_forgot = ref(false)
const username = ref('');
const password = ref('');
const reset_email = ref('')
const loading = ref(false);



const router = useRouter()

var baseUrl = window.location.origin


const login = () => {
    loading.value = true;
    call('login', { usr: username.value, pwd: password.value })
        .then(response => {
            console.log(response);
            if (response.full_name == 'Administrator') {
                window.location.href = baseUrl + '/app/build';
            } else {
                router.push('/')
            }
            loading.value = false;
        })
        .catch(error => {
            toast.add({ severity: 'info', summary: 'info', detail: 'Invalid Credentials', life: 3000 });
            loading.value = false;
            console.log(error);
        });
};

const reset_password = () => {
    loading.value = true;
    call('frappe.core.doctype.user.user.reset_password', { user: reset_email.value })
        .then(response => {
            loading.value = false;
            toast.add({ severity: 'success', summary: 'Password Email Sent', detail: 'Password reset instructions have been sent to your email', life: 3000 });
        })
        .catch(error => {
            loading.value = false;
            toast.add({ severity: 'warn', summary: 'User Not Found', detail: 'Please check your email and try again ', life: 3100 });

        });
}
</script>

<style scoped>
:root {
    --primary-color: #7C59F4;
    --primary-color-hoover: #8c6df0;
    --background-color: #ffffff;
    --textbox-border-color: #DCD2FF;
}

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
    /* border-color: var(--textbox-border-color); */
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
    color: #7C59F4;
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