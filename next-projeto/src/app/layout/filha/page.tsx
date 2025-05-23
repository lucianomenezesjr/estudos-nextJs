import Link from 'next/link'

export default function PaginaFilhaCOmLayout(){
    return(

        <div className='flex flex-col justify-center items-center gap-5 text-2xl'>
            <h1>Conteúdo da página filha</h1>

            <div className="flex gap-5">
                <Link href="/layout" className='botao'>Voltar</Link>
                <Link href="/" className='botao'>Início</Link>
            </div>
        </div>
    )
}