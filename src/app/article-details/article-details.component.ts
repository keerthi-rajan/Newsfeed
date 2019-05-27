import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
    selector: 'app-article-details',
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
    @ViewChild('CommentSection') commentSection: ElementRef;
    ngOnInit() {

    }
    scrollToComment() {
        this.commentSection.nativeElement.scrollIntoView({ start: 'top', behavior: 'smooth' });
    }
}
