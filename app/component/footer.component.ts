import {View, Component, Injectable, OnInit} from 'angular2/core';
import {CarModel} from "../model/CarModel";
import {CarRepository} from "../repository/CarRepository";
import {HTTP_PROVIDERS, Http} from "angular2/http";


@Component
({
    selector: 'footer-component',
    templateUrl: 'app/component/component.template/footer.component.html',
    providers: [CarRepository, HTTP_PROVIDERS]
})
@Injectable()
export class FooterComponent implements OnInit {

    title:string = "Here is a title";
    cars:CarModel[];

    constructor(private _carRepo:CarRepository) {
    }


    ngOnInit():any {
        this._carRepo.GetAll().subscribe(k=> this.cars = k);
    }
}

