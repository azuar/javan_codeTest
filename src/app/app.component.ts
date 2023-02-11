import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'base_test';
  item_search: string = '';
  data: any[] = [];
  filteredData: any[] = [];

  constructor(
    private service: ApiService
  ) { }


  async ngOnInit(): Promise<void> {
    try {
      this.data = await new Promise((res, rej) => {
        this.service.getData().subscribe({
          next: result => res(result), error: err => rej(err)
        })
      });
      this.filteredData = this.data;
      console.log(this.filteredData)
    } catch (error) {
      console.log(error)
    }
  }

  search() {
    const type = this.item_search.toUpperCase();
    const data = this.data.filter(x => x.name.toUpperCase().includes(type));
    this.filteredData = data
  }


}
