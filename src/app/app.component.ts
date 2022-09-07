import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appMenus = [
    { title: 'Accueil', url: 'home', icon: 'home'},
    { title: 'Paramètres', url: 'settings', icon: 'settings'},
  ];

  public appGroupedMenus = [
    {
      name: 'Informations',
      menus: [
        { title: 'UL', url: '/infos/1', icon: 'paper-plane' },
        { title: 'ENSI', url: '/infos/2', icon: 'school' },
        { title: 'CIC', url: '/infos/3', icon: 'server' },
        { title: 'ESA', url: '/infos/4', icon: 'school' },
        { title: 'INSE', url: '/infos/5', icon: 'school' },
      ]
    },

    {
      name: 'Bourses',
      menus: [
        { title: 'Gouvernemental', url: '/scholarship/1', icon: 'paper-plane' },
        { title: 'Continental', url: '/scholarship/2', icon: 'heart' },
        { title: 'International', url: '/scholarship/3', icon: 'warning' },
      ]
    }
  ];


  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
