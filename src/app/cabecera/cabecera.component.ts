import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  public hidden: boolean = true;
  public src: string = "../../assets/img/img1.png";

  @ViewChild('imagen') imagen?: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    if (this.imagen != null) {
      this.imagen.nativeElement.src = this.src;
    }
  }

  public cambiarImagen() {
    if (this.imagen != null) {
      if (this.src.endsWith("img1.png")){
        this.imagen.nativeElement.src = "../../assets/img/img2.png";
      } else {
        this.imagen.nativeElement.src = "../../assets/img/img1.png";
      }
      this.src = this.imagen.nativeElement.src;
    }
  }

  cambiarImagen2() {
    if (this.src != null) {
      if (this.src.endsWith("img1.png")){
        this.src = "../../assets/img/img2.png";
      } else {
        this.src = "../../assets/img/img1.png";
      }
    }
  }

}
