import { Component, OnInit } from '@angular/core';

import { IconService } from 'carbon-components-angular';

import AddIcon16 from '@carbon/icons/es/add/16';
import UserIcon16 from '@carbon/icons/es/user/16';
import UserAvatar20 from '@carbon/icons/es/user--avatar/20';
import Bee20 from '@carbon/icons/es/bee/20';

import { Purchase32 } from '@carbon/icons/es';
import { Accessibility24 } from '@carbon/icons/es';
import { AirlineDigitalGate20 } from '@carbon/icons/es';
import { AirportLocation16 } from '@carbon/icons/es';
import { ApplicationWeb32 } from '@carbon/icons/es';

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
