import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = this.breakpointObserver.observe([
    '(max-width: 320px)', // Custom breakpoint for very small screens
    Breakpoints.Handset,
    Breakpoints.Tablet,
    Breakpoints.Web
  ]).pipe(
    map(state => {
      if (state.breakpoints['(max-width: 320px)']) {
        // For screens 320px or smaller
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      } else if (state.breakpoints[Breakpoints.Handset]) {
        // For screens up to 599px (default Handset)
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      } else if (state.breakpoints[Breakpoints.Tablet]) {
        // For tablet screens
        return [
          { title: 'Card 1', cols: 2, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      } else {
        // For larger screens
        return [
          { title: 'Card 1', cols: 2, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 2 },
          { title: 'Card 4', cols: 1, rows: 1 },
        ];
      }
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
