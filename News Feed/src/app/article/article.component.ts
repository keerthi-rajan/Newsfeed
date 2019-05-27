import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';
import 'hammerjs';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    previoustextDisplay = 'prev';
    nextTextDisplay = 'next';
    carouselData: any;
    owlCarouselOptions: any;
    constructor() { }

    ngOnInit() {
        this.carouselData = ['../assets/feed4.jpg', '../assets/feed5.jpg', '../assets/feed1.jpg', '../assets/feed6.jpg'];
        this.owlCarouselOptions = {
            grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
            slide: 3,
            point: false,
            load: 1,
            touch: true,
            dynamicLength: false,
            loop: true,
            speed: 400,
            custom: 'tile',
            easing: 'ease'
        };
    }

}
