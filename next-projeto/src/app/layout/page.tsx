import Link from 'next/link'

export default function PaginaRaiz(){
    return(
      
        <div className='flex flex-col justify-center items-center gap-5 text-2xl'>
            <h1>Conteúdo da página RAIZ</h1>

            <div className="flex gap-5">
                <Link href="/layout/filha" className='botao'>Ir para página filha</Link>
                
            </div>
        </div>
    )
}