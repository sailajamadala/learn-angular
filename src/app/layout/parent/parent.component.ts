import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  countries = [];

  languages = [];
  constructor(private dataService: DataService,) { }

  ngOnInit() {
    this.dataService.getCountriesInfo().subscribe(countryInfo => {
      console.log(countryInfo);
      let temp = [];
      temp = countryInfo;
      console.log(temp.length);
      temp.forEach(element => {
        this.countries.push(element);
        // this.languages.push([] = element['laguages'])
        // console.log(element['languages'].length);
        let linfo = [];
        linfo = element['languages'];
        // console.log(linfo.length);
        linfo.forEach(lelement => {
          this.languages.push(lelement['name']);
        });
      });
    });
  }

}
