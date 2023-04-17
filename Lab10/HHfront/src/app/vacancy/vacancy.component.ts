import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../vacancy";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  vacancies: Vacancy[] = []

  constructor(private vacancyService: VacancyService,private route: ActivatedRoute,) {
  }

  ngOnInit():void{
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.vacancyService.getVacancies(id).subscribe((data) => {
        this.vacancies = data;
      });
    })
  }

}
