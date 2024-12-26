import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error.message))
  }, [])

  return (
    <div className="App">
      <h1>Тестовое приложение</h1>
      {error ? (
        <p style={{ color: 'red' }}>Ошибка: {error}</p>
      ) : data ? (
        <p>Сообщение с сервера: {data.message}</p>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  )
}

export default App
