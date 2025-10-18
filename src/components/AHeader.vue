<script setup>
const click = () => {
   alert('click')
}
</script>
<template>
    <header class="bg-white dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
         <nav class="container mx-auto px-6 py-4 flex justify-between items-center md:flex">
            <div class="flex items-center space-x-3">
            <img src="../assets/logo.png" class="h-8 w-13rem"alt="Алькона">
            </div>
            <div class="hidden md:flex items-center space-x-8">
               <a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#tasks">Задачи</a>
               <a class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#about">О компании</a>
            </div>
            <div>
               <button @click="click" class="hover:cursor-pointer bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity" >
               Отправить решение
               </button>
            </div>
         </nav>
      </header>
</template>