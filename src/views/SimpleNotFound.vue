<template>
    <div
        style="min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f5f5f5; font-family: Arial, sans-serif;">
        <h1 style="color: #333; font-size: 3rem; margin-bottom: 20px;">404</h1>
        <p style="color: #666; font-size: 1.2rem; margin-bottom: 30px;">页面未找到</p>
        <p style="color: #999; margin-bottom: 20px;">请求的页面不存在或已被移动</p>
        <div style="margin-bottom: 20px;">
            <strong>当前路径:</strong> {{ currentPath }}
        </div>
        <div style="margin-bottom: 20px;">
            <strong>时间:</strong> {{ currentTime }}
        </div>
        <a href="/"
            style="display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 6px; transition: background 0.3s;">
            返回首页
        </a>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentPath = ref('')
const currentTime = ref('')

function updateInfo() {
    currentPath.value = window.location.pathname
    currentTime.value = new Date().toLocaleString()
}

onMounted(() => {
    updateInfo()
    setInterval(updateInfo, 1000)
})
</script>