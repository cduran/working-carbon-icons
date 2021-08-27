import { Component, OnInit } from '@angular/core';

import { IconService } from 'carbon-components-angular/icon';

// Import all carbon icons
import * as Icons from '@carbon/icons/es';

@Component({
  selector: 'app-all-icons',
  templateUrl: './all-icons.component.html',
  styleUrls: ['./all-icons.component.scss'],
})
export class AllIconsComponent implements OnInit {
  groupedIcons = [];

  constructor(private iconService: IconService) {}

  ngOnInit() {
    const iconMap = new Map();
    for (const [key, descriptor] of Object.entries(Icons)) {
      // Registering all icons
      this.iconService.register(descriptor as object);

      if (!iconMap.has(descriptor['name'])) {
        iconMap.set(descriptor['name'], []);
      }
      iconMap.get(descriptor['name']).push(descriptor);
    }
    this.groupedIcons = Array.from(iconMap.values());
  }
}
