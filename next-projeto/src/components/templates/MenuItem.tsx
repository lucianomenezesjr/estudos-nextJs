import Link from 'next/link'

interface MenuItemProps {
    icone?: any
    texto: string
    href: string
    ativo?: boolean
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <div className={`flex gap-2 p-2 items-center hover:bg-black/20 rounded-md ${props.ativo ? 'bg-black/30' : ''}`}>
            <props.icone size={22} stroke={1.5} />
            <Link href={props.href} className="text-sm">
                {props.texto}
            </Link>
        </div>
    )
}
