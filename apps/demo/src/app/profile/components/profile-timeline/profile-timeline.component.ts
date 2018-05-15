import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-profile-timeline',
  templateUrl: './profile-timeline.html',
  styles: [],
})
export class ProfileTimelineComponent implements OnInit {
  @Input() public timeline = []

  constructor() {}

  ngOnInit() {}
}
