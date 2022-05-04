import React from 'react'
import InputForm from './components/InputForm'

const App = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-100 to-blue-200 h-screen pt-36 px2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputForm />
          <h1>QR Code</h1>
        </div>
      </div>
    </div>
  )
}

export default App
