import { appApiIns } from "./app-api";

export function getTaskById(taskId) {
    return appApiIns.get(`/api/task/${taskId}`);
}

export function uploadByTaskId(taskId, formData) {
    return appApiIns.post(`/api/upload/${taskId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
}

export function testingTask(taskId) {
    return appApiIns.post(`/api/test/${taskId}`);
}

export function getTask(task_id){
    return appApiIns.get(`/api/task/${task_id}`);
}