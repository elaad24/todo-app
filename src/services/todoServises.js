import http from "./http";
import { apiUrl } from "../config.json";

export function getAllToDos() {
  return http.get(`${apiUrl}`);
}

export function getUrgentToDos() {
  return http.get(`${apiUrl}/urgent`);
}
