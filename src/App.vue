<template>
  <h1 @click="getData">{{ value }}</h1>
</template>

<script lang="ts">
import { getDocs, collection } from 'firebase/firestore';
import { defineComponent, computed, toRef } from 'vue';
export default defineComponent({
    name: 'App',
    setup() {
        let Vname = toRef('');
        let Vpassword = toRef('');
        let Vlogin = toRef('');
        const getData = async function() {
            getDocs(collection(window.db, 'users')).then((response) => {
                response.docs.forEach((doc) => {
                    let { name, password, login } = doc.data();
                    Vname.value = name;
                    Vpassword.value = password;
                    Vlogin.value = login;
                });
            });
        };

        const value = computed(() => `Name: ${Vname.value}; Password: ${Vpassword.value}; Login: ${Vlogin.value}`);

        return {
            value,
            getData,
        };
    },
});
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>
