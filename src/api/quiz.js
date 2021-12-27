import * as api from './api.js';
import { addOwner, } from './data.js';


export async function getQuizes() {
    return (await api.get('/classes/Quiz')).results;
}

export async function getQuizById(id) {
    return api.get('/classes/Quiz/' + id + '?include=owner');
}

export async function createQuiz(quiz) {
    const body = addOwner(quiz);
    return api.post('/classes/Quiz', body);
}

export async function updateQuiz(id, quiz) {
    return api.put('/classes/Quiz/' + id, quiz);
}

export async function deleteQuiz(id) {
    return api.del('/classes/Quiz/' + id);
}

