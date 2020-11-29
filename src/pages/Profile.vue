<template>
  <div>Profile</div>
  <p>{{ JSON.stringify(user) }}</p>
  <p>Role: {{ isAdmin ? 'Administrator' : 'User' }}</p>
</template>

<style scoped></style>

<script>
import { computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useInstance } from '@vesselize/vue';

export default {
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.id);
    const user = ref({});
    const isAdmin = ref(false);
    const userService = useInstance('UserService');
    const authService = useInstance('AuthService');

    watchEffect(() => {
      if (userId.value) {
        userService.getUser(userId.value).then((data) => {
          user.value = data;
          isAdmin.value = authService.isAdmin(data);
        });
      }
    });

    return {
      user,
      isAdmin,
    };
  },
};
</script>
