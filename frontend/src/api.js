// Базовый URL вашего локального сервера
const BASE_URL = 'http://localhost:3000';

export const fetchData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/data`);
    return await response.json();
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    throw error;
  }
}; 