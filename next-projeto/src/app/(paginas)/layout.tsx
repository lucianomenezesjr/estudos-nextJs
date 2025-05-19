import Pagina from '@/components/templates/Pagina'
import { Toaster } from "sonner"

export default function Layout(props: any) {
    return (
        <Pagina>
            {props.children}
            <Toaster theme="dark" richColors />
        </Pagina>
    )
}