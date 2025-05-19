import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('meu-token')?.value;
    
    if (!token) {
        const url = request.nextUrl.clone();
        url.pathname = '/';  // Redireciona para a página inicial
        url.searchParams.set('error', '403');  // Adiciona parâmetro de erro
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/admin/:path*',  // Protege todas as rotas /admin
};