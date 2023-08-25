import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.scss']
})
export class DataViewerComponent implements OnInit {
  principalDate: Date = new Date("08-28-2023")
  dates: String[] = [];

  ngOnInit(): void {
    this.calculateDaysForTakingThePill()
  }

  calculateDaysForTakingThePill(): void {

    for (let actualMonth = this.principalDate.getMonth() + 1; actualMonth <= 12; actualMonth++) {

      let days = this.principalDate.getDate();

      this.principalDate.setDate(days + 21);

      this.addADateIntoArray(this.principalDate)

      this.principalDate.setDate(this.principalDate.getDate() + 8);

      this.addADateIntoArray(this.principalDate)

    }
    
  }


  addADateIntoArray(dateValue: Date): void {
    if (new Date() <= dateValue) {
      this.dates.push(dateValue.toLocaleDateString())
    }
  }


  returnStarterDate(): Date {
    return new Date("08-29-2023");
  }



}
