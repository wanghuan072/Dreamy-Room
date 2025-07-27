<template>
    <div style="padding: 40px; text-align: center; font-family: Arial, sans-serif;">
        <h1>🧪 测试页面</h1>
        <p>如果你能看到这个页面，说明路由工作正常！</p>
        <p><strong>当前路径:</strong> {{ $route.path }}</p>
        <p><strong>当前时间:</strong> {{ new Date().toLocaleString() }}</p>

        <div style="margin: 30px 0;">
            <h2>API 测试</h2>
            <button @click="testXML"
                style="margin: 10px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                测试 XML API
            </button>
            <button @click="testJSON"
                style="margin: 10px; padding: 10px 20px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">
                测试 JSON API
            </button>
        </div>

        <div v-if="testResult" style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 4px;">
            <h3>测试结果:</h3>
            <pre style="text-align: left; background: white; padding: 10px; border-radius: 4px;">{{ testResult }}</pre>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const testResult = ref('')

async function testXML() {
    testResult.value = '正在测试 XML API...'
    try {
        const response = await fetch('/api/sitemap')
        if (response.ok) {
            const text = await response.text()
            testResult.value = `XML API 测试成功!\n状态: ${response.status}\nContent-Type: ${response.headers.get('content-type')}\n内容长度: ${text.length} 字符\n\n内容预览:\n${text.substring(0, 500)}...`
        } else {
            testResult.value = `XML API 测试失败!\n状态: ${response.status}\n错误: ${response.statusText}`
        }
    } catch (error) {
        testResult.value = `XML API 测试出错!\n错误: ${error.message}`
    }
}

async function testJSON() {
    testResult.value = '正在测试 JSON API...'
    try {
        const response = await fetch('/api/sitemap-json')
        if (response.ok) {
            const json = await response.json()
            testResult.value = `JSON API 测试成功!\n状态: ${response.status}\nContent-Type: ${response.headers.get('content-type')}\n总URL数量: ${json.totalUrls}\n生成时间: ${json.generated}\n\n完整响应:\n${JSON.stringify(json, null, 2)}`
        } else {
            testResult.value = `JSON API 测试失败!\n状态: ${response.status}\n错误: ${response.statusText}`
        }
    } catch (error) {
        testResult.value = `JSON API 测试出错!\n错误: ${error.message}`
    }
}
</script>