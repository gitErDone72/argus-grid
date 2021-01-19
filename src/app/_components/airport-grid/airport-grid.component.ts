import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAirport } from 'src/app/_models/airport.interface';
import { IPagination } from 'src/app/_models/pagination';
import { AirportService } from 'src/app/_services/airport.service';

@Component({
  selector: 'app-airport-grid',
  templateUrl: './airport-grid.component.html',
  styleUrls: ['./airport-grid.component.scss']
})
export class AirportGridComponent implements OnInit, OnDestroy {

  airports: IAirport[] = [];
  pagination!: IPagination;
  pageNumber = 1;
  pageSize = 5;
  loading = false;
  private airportSubscription: Subscription = new Subscription;

  constructor(private airportService: AirportService) { }

  ngOnInit(): void {
    this.loadAirports();
  }

  ngOnDestroy(): void {
    this.airportSubscription.unsubscribe();
  }

  loadAirports() {
    this.loading = true;
    this.airportSubscription = this.airportService.getAllAirports().subscribe(airports => {
      this.airports = airports;
      this.loading = false;
    });
  }

  pageChanged(event: any) {
    this.pageNumber = event.page;
    this.loadAirports();
  }
}
