import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-ng-card-element',
  templateUrl: './ng-card-element.component.html',
  styleUrls: ['./ng-card-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NgCardElement2Component {
  @Input() title: string;
  @Input() name: string;
  @Input() time = new Date();
  @Input() caption: string;
  @Input() avtar: string;
  @Input() image: string;

  @Output() likeNotify = new EventEmitter<boolean>();
  @Output() shareNotify = new EventEmitter<boolean>();
  @Output() commentNotify = new EventEmitter<boolean>();

  likeEvent(): void {
    this.likeNotify.emit(true);
  }

  shareEvent(): void {
    this.shareNotify.emit(true);
  }

  commentEvent(): void {
    this.commentNotify.emit(true);
  }
}
