package modelo.vo;

public class Requerimiento_2Vo {
    // Su código
    private Integer IdProyecto; 
    private String Proveedor;
    
    public Requerimiento_2Vo() {
    }

    public Integer getIdProyecto() {
        return IdProyecto;
    }

    public void setIdProyecto(Integer idProyecto) {
        IdProyecto = idProyecto;
    }

    public String getProveedor() {
        return Proveedor;
    }

    public void setProveedor(String proveedor) {
        Proveedor = proveedor;
    }
    
    @Override
    public String toString() {
        return IdProyecto + " " + Proveedor;
    }
    
}
