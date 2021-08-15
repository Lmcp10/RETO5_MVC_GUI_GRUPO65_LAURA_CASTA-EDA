package modelo.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import modelo.vo.Requerimiento_1Vo;
import util.JDBCUtilities;

public class Requerimiento_1Dao {
    public ArrayList<Requerimiento_1Vo> requerimiento1() throws SQLException {
        // Su código
        Connection connection = JDBCUtilities.getConnection();
        ArrayList<Requerimiento_1Vo> listado_registros_rq1 = new ArrayList<Requerimiento_1Vo>();
        String sql = "SELECT Ciudad_Residencia, AVG(Salario) AS Promedio FROM Lider GROUP BY Ciudad_Residencia HAVING  AVG(Salario)<400000 ORDER BY Promedio DESC ";
        try (Statement stmt = connection.createStatement(); ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                Requerimiento_1Vo requerimiento1 = new Requerimiento_1Vo();
                requerimiento1.setCiudadResidencia(rs.getString("Ciudad_Residencia"));
                requerimiento1.setPromedio(((int)Math.round(rs.getDouble("Promedio"))));
                listado_registros_rq1.add(requerimiento1);
            }
            rs.close();
            stmt.close();
        }catch(SQLException e){
            System.err.println("Error consultando: "+e);
        }finally{
            if(connection != null){
                connection.close();
            }
        }
        return listado_registros_rq1;
    }

}