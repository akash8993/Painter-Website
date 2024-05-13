import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'painter-portfolio';
  @ViewChild('video1') video1Ref!: ElementRef;
  @ViewChild('video2') video2Ref!: ElementRef;
  @ViewChild('video3') video3Ref!: ElementRef;
  @ViewChild('video4') video4Ref!: ElementRef;

  ngOnInit(): void {
    // Play the videos programmatically
    this.video1Ref.nativeElement.play();
    this.video2Ref.nativeElement.play();
    this.video3Ref.nativeElement.play();
    this.video4Ref.nativeElement.play();
    
  }
}
