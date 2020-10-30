import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-dam',
  templateUrl: './segundo-dam.page.html',
  styleUrls: ['./segundo-dam.page.scss'],
})
export class SegundoDAMPage implements OnInit {

  asignaturas = [
    {
      val: 'Procesos y Servicios', isChecked: true, color: 'primary', url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NjMbWXC8BNHGjDtUaFkXuQHaHa%26pid%3DApi&f=1'
    },
    {
      val: 'Desarrollo Interfaces', isChecked: true, color: 'secondary', url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Facademia.crandi.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fdise%25C3%25B1o-de-interfaces-web.jpg&f=1&nofb=1'
    },
    {
      val: 'Sistema de Gestión Empresarial', isChecked: true, color: 'danger', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.uxd7stMzB4KZBNwYUXYNTQHaDP%26pid%3DApi&f=1'
    },
    {
      val: 'Acceso Datos', isChecked: true, color: 'dark', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dfgoG9fmYw8fS9C6UGPMXgHaGY%26pid%3DApi&f=1'
    },
    {
      val: 'Programación Multimedia', isChecked: true, color: 'light', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.X1L5FVmOE8c8ebjpfXmqrQHaEw%26pid%3DApi&f=1'
    },
    {
      val: 'Empresas', isChecked: false, color: 'primary', url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fundacionibercaja.es%2Fpublic%2Fpub%2Fimg%2Fimpartiendo-finanzas.jpg&f=1&nofb=1'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
