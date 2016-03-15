import {View, Component, Injectable, OnInit} from 'angular2/core';
import {CarModel} from "../model/CarModel";


@Component
({
    selector: 'detail-component',
    templateUrl: 'app/component/component.template/detail.component.html',
    inputs: ['car']
})
export class DetailComponent {
    car: CarModel = null;

}

