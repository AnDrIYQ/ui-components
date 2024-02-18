<template>
  <h1 @click="getData">
    So,
    <span v-for="item of struct.list" :key="item.name">{{ item.name }}</span>
  </h1>
</template>

<script lang="ts">
import { getDocs, collection } from 'firebase/firestore';
import { defineComponent, reactive } from 'vue';
export default defineComponent({
    name: 'App',
    setup() {
      interface Item {
        name: string;
      }

      let struct = reactive({
          list: [] as Item[],
      });

      function addItem(item: Item) {
          struct.list.push(item);
      }

      const getData = async function() {
          const querySnapshot = await getDocs(collection(window.db, "users"));
          querySnapshot.forEach((doc) => {
              const { name } = doc.data();
              addItem({ name });
          });
      };

      return {
          struct,
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
