import { Component, OnInit } from '@angular/core';
import { IAirport } from 'src/app/_models/airport.interface';
import { AirportService } from 'src/app/_services/airport.service';

@Component({
  selector: 'app-airport-grid',
  templateUrl: './airport-grid.component.html',
  styleUrls: ['./airport-grid.component.scss']
})
export class AirportGridComponent implements OnInit {

  airports!: IAirport[];
  airportsSlice!: IAirport[];
  maxSize: number = 3;
  currentPage: number = 1;
  loading = false;
  airportCreatedKey: string = '';

  constructor(private airportService: AirportService) { }

  ngOnInit(): void {
    this.loadAirports();
  }

  loadAirports() {
    this.loading = true;
    this.airportService.getAllAirports().subscribe(airports => {
      this.airports = airports.sort((a, b) => {
        let fa = a.OfficialName.toLowerCase(),
          fb = b.OfficialName.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      this.airportsSlice = airports.slice(0, 10);
      this.loading = false;
    });
  }

  createAirport() {
    this.loading = true;
    const newAirport: IAirport = {
      AirportId: 5000,
      City: "My New Airport",
      Lat: 49.666666,
      Lon: -116.816666,
      OfficialName: "Aaairport",
      State: "British Columbia"
    }
    this.airportService.createAirport(newAirport).subscribe(airportKey => {
      this.airportCreatedKey = airportKey;
      this.loadAirports();
    })
  }

  updateAirport() {
    this.loading = true;
    const updatedAirport: IAirport = {
      AirportId: 5000,
      City: "My New Airport",
      Lat: 49.666666,
      Lon: -116.816666,
      OfficialName: "Aaairport Updated",
      State: "British Columbia"
    }
    this.airportService.updateAirport(this.airportCreatedKey, updatedAirport).subscribe(airport => {
      this.loadAirports()
    })
  }

  deleteAirport() {
    this.loading = true;
    this.airportService.deleteAirport(this.airportCreatedKey).subscribe(retVal => {
      this.loadAirports();
      this.airportCreatedKey = '';
      this.loading = false;
    });
  }

  pageChanged(event: any) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.airportsSlice = this.airports.slice(startItem, endItem);
  }
}
