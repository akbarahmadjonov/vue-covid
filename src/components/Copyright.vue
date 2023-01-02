<template>
    <div class="holdCopyright">
        <p>&copy; 2021 Made by Dev FCZ. All rights reserved.</p>
    </div>
</template>

<script>
    export default {
        data:() => {
            return {
            }
        }
    }
</script>

<style scoped>
.holdCopyright {
 display: flex;
 justify-content: center;
 align-items: center;
 background: rgb(120, 11, 213);
 padding: 40px 0 20px 0;
 width: 100%;
 height: 100%;
}

.holdCopyright p {
 color: rgb(229, 232, 236);
 font-size: 18.5px;
 font-family: 'Roboto',sans-serif;
}

/* This page does not need Responsive (Media Query). */
</style>
