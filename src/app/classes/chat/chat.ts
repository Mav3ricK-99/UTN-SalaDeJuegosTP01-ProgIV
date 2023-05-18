import { Usuario } from "../usuario";

export class Chat {

    private id: string | undefined;
    private emisor: Usuario;
    private mensaje: string;
    private fechaMensaje: number;

    constructor(id?: string, mensaje?: string, fechaMensaje?: number) {
        //this.id = id ?? '';
        this.mensaje = mensaje ?? '';
        this.fechaMensaje = fechaMensaje ?? 0;
    }

    public setMensaje(mensaje: string) {
        this.mensaje = mensaje;
    }

    public setFechaMensaje(unixTime: number) {
        this.fechaMensaje = unixTime;
    }

    public setUsuario(usuario: Usuario) {
        this.emisor = usuario;
    }

    public getUsuario(): Usuario {
        return this.emisor;
    }

    public getMensaje(): string {
        return this.mensaje
    }

    public getFechaMensaje(): number {
        return this.fechaMensaje;
    }
}
