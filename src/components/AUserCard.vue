<script setup>
import { Icon } from '@iconify/vue';
import { initConf } from '../formConfig';
const {fio, mail1} = initConf();
</script>
<template>
    <div class="bg-background-light p-6 rounded-lg shadow-lg border border-gray-200 md:max-w-[60vw] grid gap-2">
        <div class="flex flex-row gap-2">
            <span class="row-span-1">
                <Icon icon="mdi:account" class="text-primary text-lg col-1 justify-self-end mt-1" />
            </span>
            <input  :name="fio" type="text" placeholder="ФИО" class=" border rounded-lg flex-1"></input>
        </div>
        <div class="flex flex-row gap-2">
            <span class="text-primary text-lg  justify-self-end ">
                @
            </span>
            <input :name="mail1" type="text" placeholder="Почта" class=" border rounded-lg flex-1"></input>
        </div>
    </div>
</template>