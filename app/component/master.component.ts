import {Component, Injectable, OnInit} from 'angular2/core';
import {CarModel} from "../model/CarModel";
import {CarRepository} from "../repository/CarRepository";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {AddCarComponent} from "./addCar.Component";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component
({
    selector: 'master-component',
    templateUrl: 'app/component/component.template/master.component.html',
    providers: [CarRepository, HTTP_PROVIDERS, ROUTER_PROVIDERS,],
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/AddCar', name: 'AddCar', component: AddCarComponent}
])
@Injectable()
export class MasterComponent {
    title: string = "masterTitle";
}

