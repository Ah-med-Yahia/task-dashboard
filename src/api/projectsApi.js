// src/api/projectsApi.js
const BASE_URL = 'https://694487d37dd335f4c360972c.mockapi.io/api/v1';

export const fetchProjects = async () => {
  const res = await fetch(`${BASE_URL}/projects`);
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json(); 
};

export const fetchTasks = async () => {
  const res = await fetch(`${BASE_URL}/tasks`);
  if (!res.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return res.json();
};