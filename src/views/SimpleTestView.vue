<template>
    <div>
        <h1>简单测试页面</h1>
        <p>如果你能看到这个页面，说明路由基本功能正常。</p>
        <p>当前时间: {{ new Date().toLocaleString() }}</p>
    </div>
</template>

<script>
export default {
    name: 'SimpleTestView'
}
</script>