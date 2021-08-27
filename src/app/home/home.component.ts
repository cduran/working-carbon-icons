import { Component, OnInit } from '@angular/core';

import { IconService } from 'carbon-components-angular/icon';

import Accessibility24 from '@carbon/icons/es/accessibility/24';
import AddIcon16 from '@carbon/icons/es/add/16';
import AirlineDigitalGate20 from '@carbon/icons/es/airline--digital-gate/20';
import AirportLocation16 from '@carbon/icons/es/airport-location/16';
import ApplicationWeb32 from '@carbon/icons/es/application--web/32';
import Bee20 from '@carbon/icons/es/bee/20';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import UserIcon16 from '@carbon/icons/es/user/16';
import Purchase32 from '@carbon/icons/es/purchase/32';
import Reset16 from '@carbon/icons/es/reset/16';
import Restart16 from '@carbon/icons/es/restart/16';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.registerAll([
      Accessibility24,
      AddIcon16,
      AirlineDigitalGate20,
      AirportLocation16,
      ApplicationWeb32,
      Bee20,
      UserAvatar20,
      UserIcon16,
      Purchase32,
      Reset16,
      Restart16,
    ]);
  }
}
