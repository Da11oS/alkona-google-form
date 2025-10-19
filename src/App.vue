<script setup>
import ACard from './components/ACard.vue';
import AHeader from './components/AHeader.vue';
import AUserCard from './components/AUserCard.vue';
import { initConf } from './formConfig';
const {action, question1, question2,question3,question4} = initConf();
</script>

<template>
  <form method="POST" target="_blank" :action="action" >
  <AHeader></AHeader>
  <main>
  
    

    <!-- Или с автовыбором языка -->
    <!-- <highlightjs autodetect>

          <div>Hello World</div>
      
      
    </highlightjs> -->
      <section class="relative bg-white dark:bg-gray-900 py-20 md:py-32 overflow-hidden">
        <div class="absolute inset-y-0 right-0 w-1/2 bg-primary transform -skew-x-12 origin-top-right hidden lg:block"></div>
        <div class="container mx-auto px-6 relative z-10">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div class="text-center lg:text-left">
                  <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                     IT-задачи
                  </h1>
                  <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a class="w-full sm:w-auto bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2" href="#tasks">
                      <span>Выбрать задачу</span>
                    <!-- <span class="material-icons">arrow_forward</span> -->
                    </a>
                    <a class="w-full sm:w-auto bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center" href="#how-it-works">
                    Вакансии
                    </a>
                  </div>
              </div>
              <div class="hidden lg:block relative h-full">
                  <img alt="Команда разработчиков работает в современном офисе" class="absolute right-0 top-1/2 -translate-y-1/2 transform skew-x-12 w-full h-auto object-cover rounded-lg shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp6Nrpp7JWxxHOJKhveTP-9eoymPdMqyOpdSeSTpylT__tDJFQOeYLvDaQqCUIIVeN05PFSzQw0jfef9wZcfdmnkxX5nYq24rCcc5S3ZT3jAd6PZRB8bbHR2LO-K_Iw5-9FRyu7kmYNCV3sPzWdOhJE3EjJ5CoAwEBvD3IwfqazHBQV2kiilV5QmE-FPMnuPmU9LJClxDFaT4_Izj-BQrRJ02xGEzO3DJUkYebTS2L-iz6NexAoRNH4sq6F9pp1dEnlIFjMgwIIw" style="max-width: 120%; margin-right: -10%;"/>
              </div>
            </div>
        </div>
      </section>
      <section class="py-20 bg-white" id="tasks">
      <div class="container mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Актуальные задачи</h2>
            <p class="mt-4 text-lg text-gray-600">Выберите задачу, которая вам интересна</p>
          </div>
          <div class="flex flex-col gap-2">
              <AUserCard class="mx-auto"></AUserCard>
              <ACard :name="question1" class="mx-auto">
                <template #title>
                  Вопрос 1
                </template>
                <template #code>
   <highlightjs language="javascript" code="function calculateBMI(weight, height) {
    const bmi; 
    bmi = weight / (height * height);
    return
  }" />
                </template>
                <template #test>
                   <highlightjs language="javascript" code="test('расчет индекса массы тела', () => {
  const bmi = calculateBMI(70, 1.75);
  expect(bmi).toBeCloseTo(22.86, 2);
});" />
                </template>
              </ACard>
              <ACard :name="question2" class="mx-auto">
                <template #title>
                  Вопрос 2
                </template>
                <template #code>
   <highlightjs language="javascript" code='const NORMAL_TEMP = "36";
export function checkTemperature(temp) {
    console.log(Math.floor(temp))
    if (Math.floor(temp) === NORMAL_TEMP) {
        return true;
    } else {
        return false;
    }
}
' />
                </template>
                <template #test>
                   <highlightjs language="javascript" code="test('проверка температуры', () => {
    checkTemperature(36.5);
    expect(checkTemperature(35.5)).toBeFalsy();
    expect(checkTemperature(36.5)).toBeTruthy();
    expect(checkTemperature(37.5)).toBeFalsy();
});" />
                </template>
              </ACard>
              <ACard :name="question3" class="mx-auto">
                <template #title>
                  Вопрос 3
                </template>
                <template #code>
   <highlightjs language="javascript" code='export const patient = {
    name: "Иван",
    age: 30,
    getPatientInfo: () => { // Используем обычную функцию
        return `Пациент: ${this.name}, возраст: ${this.age}`;
    }
};
' />
                </template>
                <template #test>
                   <highlightjs language="javascript" code="test('тест преобразования в строку пациента', () => {
    expect(patient.getPatientInfo()).toBe('Пациент: Иван, возраст: 30');
});
" />
                </template>
              </ACard>
              <ACard :name="question4" class="mx-auto">
                <template #title>
                  Вопрос 4
                </template>
                 <template #code>
   <highlightjs language="javascript" code='const medications = [
                     { name: "Аспирин", dose: "100 мг"}, 
                     { name: "Парацетамол", dose: "50 мг"}, 
                     { name: "Ибупрофен", dose: "200 мг"}];

export function getMedications() {
    const result = []
    for (let med in medications) { 
        result.push(`${med.name} ${med.dose}`);
    }
    return result;
}
' />
                </template>
                <template #test>
                   <highlightjs language="javascript" code="test('проверка преобразования списка ЛП', () => {
    expect(getMedications()).toStrictEqual([
        'Аспирин 100 мг',
        'Парацетамол 50 мг',
        'Ибупрофен 200 мг',
    ]);
});
" /></template>
              </ACard>
               <ACard :name="question5" class="mx-auto">
                <template #title>
                  Вопрос 5
                </template>
                 <template #code>
   <highlightjs language="javascript" code='export function copyPatientInfo(patient, newDiagnosis) {
    const history = patient; 
    patient.diagnosis = newDiagnosis;
    return history;
}
' />
                </template>
                <template #test>
                   <highlightjs language="javascript" code="test('создание точки в истории редактирования', () => {
    const originalPatient = { name: 'Анна', age: 25, diagnosis: 'Гипертония' };
    const history = copyPatientInfo(originalPatient, 'Гипотония');
    expect(originalPatient.diagnosis).toBe('Гипотония');
    expect(history.diagnosis).toBe('Гипертония');
});
" /></template>
              </ACard>
              <ACard :name="question6" class="mx-auto">
                <template #title>
                  Вопрос 6
                </template>
                 <template #code>
   <highlightjs language="javascript" code='const patientSvcMock = {
    fetch: async () => {
        return new Promise(resolve => setTimeout(() => 
        resolve({ name: "Иван", age: 30 }),
        3000))
    }
}
export function fetchPatientName() {
    const patientData =  patientSvcMock.fetch();
    return patientData.name;
}
' />
                </template>
                <template #test>
                   <highlightjs language="javascript" code="test('асинхронное получение данных пациента', async () => {
    const name = await fetchPatientName()
    expect(name).toEqual('Иван');
});
" /></template>
              </ACard>
               <ACard :name="question6" class="mx-auto">
                <template #title>
                  Вопрос 7
                </template>
                 <template #code>
   <highlightjs language="javascript" code='
const dosageSvcMock = {
    fetch: (weight, signal) => {
        return new Promise(resolve => setTimeout(() => {
            resolve(weight * 1.5)
        }, 10))
    }
}

export async function calculateDosage(weight) {
    try {
        this.loading = true;
        if (weight <= 0) {
                throw new Error("Неверный вес пациента");
        }
        const dosage = await dosageSvcMock.fetch(weight);
        return dosage;
    } catch (error) {
        return error
    }
}
' />
                </template>
                <template #test>
                   <highlightjs language="javascript" code='test("правильный расчет дозировки", async () => {
    const loadObj = { loading: false };
    const calc =  calculateDosage.bind(loadObj)
    expect(await calc(-1)).toStrictEqual(new Error("Неверный вес пациента"));
    expect(loadObj.loading).toBe(false);
});
' /></template>
              </ACard>
          </div>
      </div>
      </section>
  </main>
  </form>
   <footer class="bg-gray-800 dark:bg-black" id="contact">
         <div class="container mx-auto px-6 py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
               <div class="flex items-center space-x-3">`
                  <span class="text-xl font-bold text-white">Сделано Da11oS</span>
               </div>
               <p class="mt-4 text-center text-sm text-gray-400 sm:mt-0">© 2024 Алькона. Все права защищены.</p>
            </div>
         </div>
      </footer>
</template>
