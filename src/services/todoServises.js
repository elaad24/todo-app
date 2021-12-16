import http from "./http";
import { apiUrl } from "../config.json";

export function getAllToDos() {
  return http.get(`${apiUrl}`);
}

export function getUrgentToDos() {
  return http.get(`${apiUrl}/urgent`);
}
export function getCompletedToDos() {
  return http.get(`${apiUrl}/completed`);
}
export function setTodoAsCompleted(todoID) {
  return http.put(`${apiUrl}/accomplished?id=${todoID}`);
}
export function setTodoAsUnCompleted(todoID) {
  return http.put(`${apiUrl}/unaccomplished?id=${todoID}`);
}
export function addNewTodo(todoData) {
  return http.post(`${apiUrl}/add`, todoData);
}
export function updateTodo(todoData) {
  return http.put(`${apiUrl}/update`, todoData);
}
