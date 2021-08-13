import { Component, OnInit } from '@angular/core';

import { IconService } from 'carbon-components-angular';

import AddIcon16 from '@carbon/icons/es/add/16';
import UserIcon16 from '@carbon/icons/es/user/16';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import Bee20 from '@carbon/icons/es/bee/20';
import Purchase32 from '@carbon/icons/es/purchase/32';
import Accessibility24 from '@carbon/icons/es/accessibility/24';
import AirlineDigitalGate20 from '@carbon/icons/es/airline--digital-gate/20';
import AirportLocation16 from '@carbon/icons/es/airport-location/16';
import ApplicationWeb32 from '@carbon/icons/es/application--web/32';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.registerAll([
      AddIcon16,
      UserIcon16,
      UserAvatar20,
      Bee20,
      Purchase32,
      Accessibility24,
      AirlineDigitalGate20,
      AirportLocation16,
      ApplicationWeb32,
    ]);
  }
}
