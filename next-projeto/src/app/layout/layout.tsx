'use client'

import Pagina from '@/components/templates/Pagina'
import { useState } from 'react'

export default function Layout(props:any){

    const [data] = useState(new Date().toLocaleTimeString())
    return(
        <Pagina>
            <div className="border-8 border-red-500 p-8">
                <main>
                    <span>{data}</span>
                    {props.children}
                </main>
            </div>
        </Pagina>
        
        
    )
}