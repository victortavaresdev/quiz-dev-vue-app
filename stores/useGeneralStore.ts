export const useGeneralStore = defineStore('general', () => {
  const editUserProfile = ref(false)
  const deleteUserModal = ref(false)

  const loading = ref(true)

  return {
    editUserProfile,
    deleteUserModal,
    loading
  }
})
