'use client'

import { useState } from 'react'

export default function template(props:any){

    const [data] = useState(new Date().toLocaleTimeString())
    return(
        <div className="border-8 border-green-600 p-8">
            <span>{data}</span>
            <main>   
                {props.children}
            </main>
        </div>
    )
}