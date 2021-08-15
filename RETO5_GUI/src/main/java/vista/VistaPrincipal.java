package vista;
import java.awt.BorderLayout;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTabbedPane;
import javax.swing.JTable;


import controlador.ControladorRequerimientos;


public class VistaPrincipal extends JFrame {

    private ControladorRequerimientos controlador1;
   
    private JTable tabla1;
    private JTable tabla2;
    private JTable tabla3;

    public VistaPrincipal(){

        controlador1 = new ControladorRequerimientos();
        
        initUI();
        setLocationRelativeTo(null);
    }

    private void initUI(){
        setTitle("INTERFAZ RETO 5");
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setSize(800,600);

        var tbd = new JTabbedPane();
        getContentPane().add(tbd, BorderLayout.CENTER);

        var panel_1 = new JPanel();
        panel_1.setLayout(new BorderLayout());
        tbd.addTab("REQUERIMIENTO 1",new ImageIcon("img/salario.png"), panel_1);

        var panel_2 = new JPanel();
        panel_2.setLayout(new BorderLayout());
        tbd.addTab("REQUERIMIENTO 2",new ImageIcon("img/proveedor.png"),panel_2);

        var panel_3 = new JPanel();
        panel_3.setLayout(new BorderLayout());
        tbd.addTab("REQUERIMIENTO 3",new ImageIcon("img/material.png"), panel_3);

        var panel_1Entrada = new JPanel();
        var btnConsulta1 = new JButton("CONSULTAR",new ImageIcon("img/buscar.png"));
        btnConsulta1.addActionListener(e -> cargarTablaConsulta1()); //Paso evento a la accion del boton
        panel_1Entrada.add(btnConsulta1);
        panel_1.add(panel_1Entrada, BorderLayout.PAGE_START);

        var panel_2Entrada = new JPanel();
        var btnConsulta2 = new JButton("CONSULTAR", new ImageIcon("img/buscar.png"));
        btnConsulta2.addActionListener(e -> cargarTablaConsulta2()); //Paso evento a la accion del boton
        panel_2Entrada.add(btnConsulta2);
        panel_2.add(panel_2Entrada, BorderLayout.PAGE_START);

        var panel_3Entrada = new JPanel();
        var btnConsulta3 = new JButton("CONSULTAR", new ImageIcon("img/buscar.png"));
        btnConsulta3.addActionListener(e -> cargarTablaConsulta3()); //Paso evento a la accion del boton
        panel_3Entrada.add(btnConsulta3); 
        panel_3.add(panel_3Entrada, BorderLayout.PAGE_START);

        //TABLA
        tabla1 = new JTable();
        tabla2 = new JTable();
        tabla3 = new JTable();
        panel_1.add(new JScrollPane(tabla1), BorderLayout.CENTER);
        panel_2.add(new JScrollPane(tabla2), BorderLayout.CENTER);
        panel_3.add(new JScrollPane(tabla3), BorderLayout.CENTER);

        }

        private void cargarTablaConsulta1(){
            try {
                var lista = controlador1.consultarRequerimiento1();
                var tableModel1 = new Requerimiento1TableModel();
                tableModel1.setData(lista);
                tabla1.setModel(tableModel1);
    
            } catch (Exception e) {
                    JOptionPane.showMessageDialog(this, e.getMessage(), getTitle(), JOptionPane.ERROR_MESSAGE);
                }

            }
        private void cargarTablaConsulta2(){
            try {
                var lista = controlador1.consultarRequerimiento2();
                var tableModel2 = new Requerimiento2TableModel();
                tableModel2.setData(lista);
                tabla2.setModel(tableModel2);
            } catch (Exception e) {
                JOptionPane.showMessageDialog(this, e.getMessage(), getTitle(), JOptionPane.ERROR_MESSAGE);
            }
        }   

        private void cargarTablaConsulta3(){
            try {
                var lista = controlador1.consultarRequerimiento3();
                var tableModel3 = new Requerimiento3TableModel();
                tableModel3.setData(lista);
                tabla3.setModel(tableModel3);
        
            } catch (Exception e) {
                    JOptionPane.showMessageDialog(this, e.getMessage(), getTitle(), JOptionPane.ERROR_MESSAGE);
                }
            }    
    
}