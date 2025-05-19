'use client'
import { useState } from 'react'

export default function Cliente() {
    const [data, alterarData] = useState(new Date())

    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-3 text-xl bg-red-600 border-2 border-white p-5">
                <span className="font-bold">Data atual:</span>
                <span>{data.toLocaleTimeString()}</span>
            </div>
            <button onClick={() => alterarData(new Date())} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 cursor-pointer transition-colors">
                Atualizar
            </button>
        </div>
    )
}