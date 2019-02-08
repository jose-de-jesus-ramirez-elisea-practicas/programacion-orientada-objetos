export default class Auto
{
    constructor(marca, modelo, color = "Blanco", kilometraje = 0)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.kilometraje = kilometraje;
        this.estado = "Apagado";
    } 
    MostrarEstado()
    {
        console.log(`El auto ${this.marca} ${this.color} del año ${this.modelo} tiene un kilometraje de ${this.kilometraje}kms y está ${this.estado}`);
    }
    Encender()
    {
        this.estado = "Encendido";
        this.MostrarEstado();
    }
    Apagar()
    {
        this.estado = "Apagado";
        this.MostrarEstado();
    }
    Avanzar(Velocidad, Tiempo)
    {
        if(this.estado === "Apagado")
        {
            console.log("el auto no puede avanzar por que esta apagado")
        }
        else
        {
            let distancia = Velocidad * Tiempo;
            this.kilometraje = this.kilometraje + distancia;
            this.MostrarEstado();
        }
    }
}