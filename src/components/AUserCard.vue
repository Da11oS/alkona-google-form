<script setup>
import { Icon } from '@iconify/vue';
import { initConf } from '../formConfig';
const {fio, mail1} = initConf();
</script>
<template>
    <div class="bg-background-light p-6 rounded-lg shadow-lg border border-gray-200 w-[60vw] grid grid-cols-12 gap-2">
    <Icon icon="mdi:account" class="text-primary text-lg col-span-1 justify-self-end mt-1" />
    <input  :name="fio" type="text" placeholder="ФИО" class="col-span-5 border rounded-lg"></input>
    <span class="text-primary text-lg col-span-1 justify-self-end">
        @
    </span>
    <input :name="mail1" type="text" placeholder="Почта" class="col-span-5 border rounded-lg"></input>
    </div>
</template>