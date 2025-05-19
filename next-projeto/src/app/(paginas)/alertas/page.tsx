'use client'

import { Button } from "@/components/modern-ui/button";
import { toast } from "sonner"

export default function PaginaAlertas(){
    return(
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-black">Alertas</h1>

            <div className="flex flex-wrap gap-2">
                <Button 
                    variant="default" 
                    onClick={() => toast.success("Operation completed successfully")}
                >
                Success
                </Button>
                <Button 
                    variant="destructive" 
                    onClick={() => toast.error("An error occurred")}
                >
                Error
                </Button>
                <Button 
                    variant="outline" 
                    onClick={() => toast.info("Here's some information")}
                >
                Info
                </Button>
                <Button 
                    variant="secondary" 
                    onClick={() => toast.warning("Warning: This action is irreversible")}
                >
                Warning
                </Button>
            </div>
            <div>
                <h1>Botao de erro</h1>
                <Button variant="destructive" onClick={() => toast.error("An error occurred")}>
                Error
                </Button>
            </div>
            
        </div>
    )
}