'use client'

import Pagina from '@/components/templates/Pagina'
import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { toast,Toaster } from "sonner"
import { Button } from '@/components/modern-ui/button'

export default function Home() {

    const searchParams = useSearchParams()
    const router = useRouter()
    const error = searchParams.get('error')

    useEffect(() => {
        if (error === '403') {
            toast.error("Você não tem acesso de administrador!", {
                duration: 3000, // 3 segundos
                onAutoClose: () => {
                    router.push('/')
                }
            });
        }
    }, [error, router])

    return (

        
        <Pagina>
            <h1>Seja bem vindo(a)!</h1>

            {/* Adicione o Toaster em algum lugar do seu layout */}
            <Toaster theme='dark' richColors position="bottom-right" />
            
            {/* Botão de exemplo para testar o toast manualmente */}
            <Button 
                variant="destructive" 
                onClick={() => toast.error("Mensagem de erro de teste")}
                className="mt-4"
            >
                Testar Toast
            </Button>            
        </Pagina>
    )
}
