
import { test } from 'vitest';
import { expect } from 'vitest';
import { calculateBMI, calculateDosage, checkTemperature, copyPatientInfo, fetchPatientName, getMedications, patient } from './functionsFoTest';

test('расчет индекса массы тела', () => {
    const bmi = calculateBMI(70, 1.75);
    expect(bmi).toBeCloseTo(22.86, 2); // Проверяем с точностью до 2 знаков
});

test('проверка температуры', () => {
    checkTemperature(36.5);
    expect(checkTemperature(35.5)).toBeFalsy();
    expect(checkTemperature(36.5)).toBeTruthy();
    expect(checkTemperature(37.5)).toBeFalsy();
});

test('тест преобразования в строку пациента', () => {
    expect(patient.getPatientInfo()).toBe('Пациент: Иван, возраст: 30');
});

test('проверка преобразования списка ЛП', () => {
    expect(getMedications()).toStrictEqual([
        "Аспирин 100 мг",
        "Парацетамол 50 мг",
        "Ибупрофен 200 мг",
    ]);
});


test('создание точки в истории редактирования', () => {
    const originalPatient = { name: 'Анна', age: 25, diagnosis: 'Гипертония' };
    const history = copyPatientInfo(originalPatient, 'Гипотония');
    expect(originalPatient.diagnosis).toBe('Гипотония');
    expect(history.diagnosis).toBe('Гипертония');
});


  // 6. Тест для асинхронности
test('асинхронное получение данных пациента', async () => {
    const name = await fetchPatientName()
    expect(name).toEqual('Иван');
});


test('правильный расчет дозировки', async () => {
    const loadObj = { loading: false };
    const calc =  calculateDosage.bind(loadObj)
    expect(await calc(-1)).toStrictEqual(new Error("Неверный вес пациента"));
    expect(loadObj.loading).toBe(false);
});
