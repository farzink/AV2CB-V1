import {CarModel} from "../model/CarModel";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {Injectable, Component} from "angular2/core";
import {Observable}     from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class CarRepository {
    constructor(private http:Http) {
    }

    private url:string = 'http://localhost:16847/api/values/';
    cars:CarModel[] = [
        {Id: 10, Model: "C300", Brand: "Benz", Year: "2016"},
        {Id: 11, Model: "C200", Brand: "Benz", Year: "2000"},
        {Id: 12, Model: "428", Brand: "BMW", Year: "2015"},
        {Id: 13, Model: "206", Brand: "Peugeot", Year: "1990"},
    ];

    GetAll():Observable<CarModel[]> {
        //console.log("This is the array : "  + this.http);
        return this.http.get(this.url).map(res => <CarModel[]> res.json());
    }
}
