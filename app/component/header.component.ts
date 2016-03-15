import {View, Component, Injectable, OnInit} from 'angular2/core';
import {CarModel} from "../model/CarModel";
import {CarRepository} from "../repository/CarRepository";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {DetailComponent} from "./detail.component";

@Component
({
    selector: 'header-component',
    templateUrl: 'app/component/component.template/header.component.html',
    directives: [DetailComponent],
    inputs: ['car'],
    providers: [CarRepository, HTTP_PROVIDERS]
})
@Injectable()
export class HeaderComponent implements OnInit {

    car:string = "Abbas";
    cars:CarModel[];
    selectedCar: CarModel = null;


    constructor(private _carRepo:CarRepository) {
    }

    onClicked(car: CarModel){
        console.log(car.Model);
        this.selectedCar = car;
    }

    ngOnInit():any {
        this._carRepo.GetAll().subscribe(k=> this.cars = k);
    }
}

