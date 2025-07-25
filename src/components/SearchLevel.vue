<template>
  <div class="search-level">
    <div class="search-row">
      <input
        v-model="levelInput"
        type="number"
        class="search-input"
        :class="{ error: errorMsg }"
        placeholder="Enter the level number"
        min="1"
        max="1000"
        @keydown.enter="goToLevel"
        @input="validateInput"
      />
      <button class="search-button" @click="goToLevel" :disabled="!!errorMsg || !levelInput">
        <span>Search Level</span>
        <span class="search-icon">🔍</span>
      </button>
    </div>
    <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const levelInput = ref('')
const errorMsg = ref('')
const router = useRouter()

function validateInput() {
  const val = Number(levelInput.value)
  if (!levelInput.value) {
    errorMsg.value = ''
    return
  }
  if (!/^[0-9]+$/.test(levelInput.value)) {
    errorMsg.value = 'Only numbers can be entered'
  } else if (val < 1 || val > 1000) {
    errorMsg.value = 'Please enter a level number between 1-1000'
  } else {
    errorMsg.value = ''
  }
}

function goToLevel() {
  validateInput()
  if (errorMsg.value || !levelInput.value) return
  const levelNum = Number(levelInput.value)
  router.push({ name: 'level-detail', params: { addressBar: `level-${levelNum}` } })
}
</script>

<style scoped>
.search-level {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  max-width: 420px;
}
.search-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 12px;
}
.search-input {
  flex: 1 1 0;
  padding: 10px 14px;
  font-size: 1.1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.2s;
}
.search-input.error {
  border-color: #e74c3c;
  background: #fff6f6;
}
.search-button {
  padding: 8px 18px;
  font-size: 1rem;
  background: #2d1b69;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background 0.2s;
  white-space: nowrap;
}
.search-button span {
  color: #fff;
}
.error-msg {
  color: #e74c3c;
  font-size: 0.95rem;
  margin-top: 2px;
  margin-left: 2px;
}
</style> 