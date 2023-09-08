<template>
    <div class="max-w-3xl py-12 mx-auto">
        <p>Login Page</p>
        <Button label="Submit" @click="updatePsw" />
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { call } from 'frappe-ui'
import { useRouter } from 'vue-router'

const key = ref('');
const router = useRouter()

onMounted(() => {
    // Access the 'key' parameter from the URL using window.location.search
    const params = new URLSearchParams(window.location.search);
    key.value = params.get('key') || '';

    console.log(key.value);
});

const updatePsw = () => {
    call('frappe.core.doctype.user.user.update_password', { key: key.value, old_password: "", new_password: 'admin@123', confirm_password: 'admin@123', logout_all_sessions: 1, })
        .then(response => {
            router.push('/')
        })
        .catch(error => {
            toast.add({ severity: 'info', summary: 'info', detail: 'Invalid Credentials', life: 3000 });
        });
}
</script>
  