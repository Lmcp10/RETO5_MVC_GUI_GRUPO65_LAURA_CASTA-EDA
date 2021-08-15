package vista;


import java.util.ArrayList;
import javax.swing.table.AbstractTableModel;



//se encarga de registrar la informacion en el DAO1
//el objeto Requerimiento para poder hacer captura de la informacion
//bajo el requerimiento_1 existe un set y gets que para poder presentar se necesitarian de los GETS
import modelo.vo.Requerimiento_1Vo;

//Requerimiento1 va a heredar de un jFRame ( ventana principal )
class Requerimiento1TableModel extends AbstractTableModel{
    
        private ArrayList<Requerimiento_1Vo> data;
    
        public void setData(ArrayList<Requerimiento_1Vo> data){
            this.data = data;
        }
        
        @Override
        public String getColumnName(int column){
            switch (column) {
                case 0:
                    return "CIUDAD DE RESIDENCIA";
                case 1:
                    return "PROMEDIO";
                
            }
                
            return super.getColumnName(column);
    
            }    
            
        @Override
                public Class<?> getColumnClass(int columnIndex) {
                    switch(columnIndex){
                        case 0:
                            return String.class;
                        case 1:
                            return Integer.class;
    
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
                        return registro.getCiudadResidencia();
                    case 1:
                        return registro.getPromedio();
                }
                return null;
            }
        }
    
