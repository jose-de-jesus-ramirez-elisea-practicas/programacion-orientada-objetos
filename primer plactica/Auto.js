class auto
{
    contructor(marca, modelo, color, kilometraje)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.kilometraje = kilometraje;
        this.estado = "Apagado";
    } 

    Encender()
    {
        this.estado = "Encendido";
    }
    Apagar()
    {
        this.estado = "Apagado";
    }
}