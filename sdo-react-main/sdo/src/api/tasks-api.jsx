import { appApiIns } from "./app-api";

export function getTasks() {
    return appApiIns.get('/api/labs');
}