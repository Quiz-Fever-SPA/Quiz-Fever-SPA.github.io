import { addOwner, createPointer } from './data.js';
import * as api from './api.js';

export async function createQuestion(quizId, question) {
    const body = addOwner(question);
    body.quiz = createPointer('Quiz', quizId);
    return api.post('/classes/Question', body);
}

export async function getQuistionByQuizId(quizId) {
    const query = JSON.stringify({ quiz: createPointer('Quiz', quizId)});
    const response = await api.get('/classes/Question?where=' + encodeURIComponent(query));
    return response.results;
}

// '?where={"post":{
//     "__type":"Pointer",
//     "className":"Post",
//     "objectId":"<OBJECT_ID>"
//     }
// }'

export async function updateQuestion(id, question) {
    return await api.put('/classes/Question/' + id, question);
}

export async function deleteQuestion(id) {
    return await api.del('/classes/Question/' + id);
}