package modelo.vo;

public class Requerimiento_3Vo {
    // Su código

    private Integer IdProyecto; 
    private String NombreMaterial;

    public Requerimiento_3Vo() {
    }

    public Integer getIdProyecto() {
        return IdProyecto;
    }

    public void setIdProyecto(Integer idProyecto) {
        IdProyecto = idProyecto;
    }

    
    public String getNombreMaterial() {
        return NombreMaterial;
    }

    public void setNombreMaterial(String nombreMaterial) {
        NombreMaterial = nombreMaterial;
    }

    @Override
    public String toString() {
        return IdProyecto + " " + NombreMaterial;
    }

    
}
