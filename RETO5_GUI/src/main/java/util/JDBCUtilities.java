/**
 * No se debe modificar
 */
package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCUtilities {
private static final String DATABASE_LOCATION = "c:\\Users\\laura\\Documents\\DOCUMENTOS\\MISION TIC\\CICLO 2\\FUNDAMENTOS_DE_PROGRAMACION\\UNIDAD 5\\RETO5_GUI\\ProyectosConstruccion.db";

    public static Connection getConnection() throws SQLException {
        String url = "jdbc:sqlite:" + DATABASE_LOCATION;

        return DriverManager.getConnection(url);
    }
}
