import { Employee } from './../../employee';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {
  @Input() employee: Employee;
  @Input() isOpen: boolean;
  @Output() close = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.close.emit();
  }
}
