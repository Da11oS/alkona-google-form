export function calculateBMI(weight, height) {
    const bmi; 
    bmi = weight / (height * height);
    return bmi;
}

const NORMAL_TEMP = "36";
export function checkTemperature(temp) {
    console.log(Math.floor(temp))
    if (Math.floor(temp) === NORMAL_TEMP) {
        return true;
    } else {
        return false;
    }
}

export const patient = {
    name: "Иван",
    age: 30,
    getPatientInfo: () => { // Используем обычную функцию
        return `Пациент: ${this.name}, возраст: ${this.age}`;
    }
};


const medications = [{ name: "Аспирин", dose: "100 мг"}, 
                     { name: "Парацетамол", dose: "50 мг"}, 
                     { name: "Ибупрофен", dose: "200 мг"}];

export function getMedications() {
    const result = []
    for (let med in medications) { 
        result.push(`${med.name} ${med.dose}`);
    }
    return result;
}
export function copyPatientInfo(patient, newDiagnosis) {
    const history = patient; 
    patient.diagnosis = newDiagnosis;
    return history;
}


const patientSvcMock = {
    fetch: async () => {
        return new Promise(resolve => setTimeout(() => resolve({ name: "Иван", age: 30 }), 3000))
    }
}
export function fetchPatientName() {
    const patientData =  patientSvcMock.fetch();
    return patientData.name;
}


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