<script setup>


const props = defineProps({
    name: String
});
</script>

<template>
    <div class="bg-background-light p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col md:max-w-[60vw]">
        
        <h3 class="text-xl font-bold text-gray-900 mb-2"><slot name="title"></slot></h3>
        <span class="bg-yellow-100 text-yellow-800 text-xs w-20 font-medium px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
            JavaScript
        </span>
        <p class="text-gray-600 mb-4 flex-grow">
            <slot name="question"></slot>
        </p>
        <div class="flex flex-col md:flex-row">
            <div>
                    <span>
                        Исходный код:
                    </span>        
                        <slot name="code">
                        </slot>
                    <span>
                        Тест:
                    </span>
                    <slot name="test"></slot>
            </div>
            <textarea  :name="name" class="h-30 flex-1 rounded-lg border  border-gray-200"></textarea>
        </div>
    </div>
</template>