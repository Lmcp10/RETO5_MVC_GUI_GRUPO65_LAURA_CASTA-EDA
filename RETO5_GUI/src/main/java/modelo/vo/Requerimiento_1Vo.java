package modelo.vo;

public class Requerimiento_1Vo {
    // Su código
    private String ciudadResidencia; 
    private Integer promedio;

    public Requerimiento_1Vo() {
    }

    
    public String getCiudadResidencia() {
        return ciudadResidencia;
    }


    public void setCiudadResidencia(String ciudadResidencia) {
        this.ciudadResidencia = ciudadResidencia;
    }


    public Integer getPromedio() {
        return promedio;
    }


    public void setPromedio(Integer promedio) {
        this.promedio = promedio;
    }


    @Override
    public String toString() {
        return ciudadResidencia + " " + Math.round(promedio);
    }


 
    

    
}
