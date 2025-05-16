'use client'

import {
    IconArrowsDiff,
    IconError404,
    IconHome2,
    IconLayout2,
    IconListDetails,
    IconUserHexagon,
} from '@tabler/icons-react';
import MenuItem from './MenuItem';
import { usePathname } from 'next/navigation';


export default function Menu() {

    const pathname = usePathname();
    return (
        <aside className="w-80 bg-zinc-900 p-6 border-r border-zinc-800">
            <nav className="flex flex-col gap-2">
                <MenuItem texto="Início" href="/" icone={IconHome2} ativo={pathname === '/'} />
                <MenuItem texto="Layout" href="/layout" icone={IconLayout2}  ativo={pathname === '/layout'}/>
                <MenuItem texto="Não Existe" href="/nao-existe" icone={IconError404} ativo={pathname === '/nao-existe'}/>
                <MenuItem texto="Produtos" href="/produtos" icone={IconListDetails} ativo={pathname === '/produtos'}/>
                <MenuItem
                    texto="Cliente vs Servidor"
                    href="/cliente-servidor"
                    icone={IconArrowsDiff}
                    ativo={pathname === '/cliente-servidor'}
                />
                <MenuItem texto="Administração" href="/admin" icone={IconUserHexagon} ativo={pathname === '/admin'}/>
            </nav>
        </aside>
    )
}
