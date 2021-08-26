import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-included-icons',
  templateUrl: './included-icons.component.html',
  styleUrls: ['./included-icons.component.scss'],
})
export class IncludedIconsComponent implements OnInit {
  includedIcons = [
    // Sizes 16 and 20
    { name: 'add' },
    { name: 'bee' },
    { name: 'carbon' },
    { name: 'checkmark--filled' },
    { name: 'close' },
    { name: 'copy' },
    { name: 'data--2' },
    { name: 'document' },
    { name: 'error--filled' },
    { name: 'fade' },
    { name: 'information--filled' },
    { name: 'menu' },
    { name: 'warning--filled' },
    // Just size 16 from here on
    { name: 'calendar' },
    { name: 'caret--down' },
    { name: 'caret--left' },
    { name: 'caret--right' },
    { name: 'caret--up' },
    { name: 'checkmark' },
    { name: 'checkmark--outline' },
    { name: 'chevron--down' },
    { name: 'chevron--right' },
    { name: 'delete' },
    { name: 'download' },
    { name: 'overflow-menu--horizontal' },
    { name: 'overflow-menu--vertical' },
    { name: 'save' },
    { name: 'search' },
    { name: 'settings' },
    { name: 'settings--adjust' },
    { name: 'subtract' },
    { name: 'warning' },
    { name: 'warning--alt--filled' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
