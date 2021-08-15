package vista;

import java.util.ArrayList;
import javax.swing.table.AbstractTableModel;

import modelo.vo.Requerimiento_2Vo;

class Requerimiento2TableModel extends AbstractTableModel{
    
    private ArrayList<Requerimiento_2Vo> data;

    public void setData(ArrayList<Requerimiento_2Vo> data){
        this.data = data;
    }

    @Override
    public String getColumnName(int column){
        switch (column) {
            case 0:
                return "ID PROYECTO";
            case 1:
                return "PROVEEDOR";
        
        }
        
        return super.getColumnName(column);

    }    
    
    @Override
        public Class<?> getColumnClass(int columnIndex) {
            switch(columnIndex){
                case 0:
                    return String.class;
                case 1:
                    return String.class;

            }
            return super.getColumnClass(columnIndex);
        }
    @Override
    public int getRowCount() {//Quiero el numero de filas

        return data.size();
    }

    @Override
    public int getColumnCount() {//Quiero el numero de columnas
        return 2;
    }
    
    @Override
    public Object getValueAt(int rowIndex, int columnIndex) {

        var registro = data.get(rowIndex);
        switch(columnIndex){
            case 0:
                return registro.getIdProyecto();
            case 1:
                return registro.getProveedor();
        }
        return null;
    }
}        