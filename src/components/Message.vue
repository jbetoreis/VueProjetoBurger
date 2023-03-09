<template>
    <div class="message_container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default{
        name: 'Message',
        props: {
            msg: String,
        }
    }
</script>

<style scoped>
    .message_container{
        color: rgb(114, 114, 114);
        background-color: rgba(30, 219, 87, 0.3);
        border: 2px solid rgba(0, 216, 65, 0.3);
        border-radius: 5px;
        padding: 10px;
        margin: 30px auto;
    }

    .message_container p{
        margin: 0;
    }
</style>