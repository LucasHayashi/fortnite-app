import { Component, Inject, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBanners } from 'src/app/interfaces/banners';

@Component({
  selector: 'app-modal-expandir-icone',
  templateUrl: './modal-expandir-icone.component.html',
  styleUrls: ['./modal-expandir-icone.component.scss'],
})
export class ModalExpandirIconeComponent {
  isLoading = true;
  imageError = false;

  @ViewChild('iconImage') iconImage!: ElementRef<HTMLImageElement>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IBanners) {}

  onImageLoad() {
    this.isLoading = false;
    this.imageError = false;
  }

  onImageError() {
    this.isLoading = false;
    this.imageError = true;
  }
}
