import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FortniteService } from 'src/app/services/fortnite.service';
import { Observable } from 'rxjs';
import { IMap } from 'src/app/interfaces/map';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapImage') mapImage!: ElementRef<HTMLImageElement>;
  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;
  map$: Observable<IMap>;
  isImageLoaded = false;

  private scale = 1;
  private translateX = 0;
  private translateY = 0;
  private minScale = 1;
  private maxScale = 3;

  constructor(private _fortniteService: FortniteService) {
    this.map$ = this._fortniteService.getMap();
  }

  ngAfterViewInit(): void {}

  onImageLoad() {
    this.isImageLoaded = true;
    this.setupGestures();
  }

  private setupGestures() {
    const img = this.mapImage?.nativeElement;
    if (!img || !this.mapContainer?.nativeElement) {
      console.error('Map elements not found');
      return;
    }

    const hammer = new Hammer(img);
    hammer.get('pinch').set({ enable: true });
    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    let pinchStartScale = this.scale;
    hammer.on('pinchstart pinchmove pinchend', (e) => {
      e.preventDefault();
      if (e.type === 'pinchstart') pinchStartScale = this.scale;
      const newScale = Math.max(
        this.minScale,
        Math.min(this.maxScale, pinchStartScale * e.scale)
      );
      this.updateTransform(newScale, this.translateX, this.translateY);
    });

    let panStartX = this.translateX;
    let panStartY = this.translateY;
    hammer.on('panstart panmove panend', (e) => {
      e.preventDefault();
      if (e.type === 'panstart') {
        panStartX = this.translateX;
        panStartY = this.translateY;
      }
      this.updateTransform(
        this.scale,
        panStartX + e.deltaX,
        panStartY + e.deltaY
      );
    });

    hammer.on('doubletap', (e) => {
      e.preventDefault();
      const newScale = this.scale === this.minScale ? 2 : this.minScale;
      this.updateTransform(newScale, this.translateX, this.translateY);
    });
  }

  private calculateBounds(
    scale: number,
    translateX: number,
    translateY: number
  ): [number, number] {
    const img = this.mapImage.nativeElement;
    const container = this.mapContainer.nativeElement;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const imgWidth = img.width * scale;
    const imgHeight = img.height * scale;

    if (!containerWidth || !containerHeight || !imgWidth || !imgHeight) {
      return [0, 0];
    }

    // Ensure at least some portion remains visible
    const minX = Math.min(0, containerWidth - imgWidth); // Can't go right beyond left edge
    const maxX = Math.max(0, containerWidth - imgWidth); // Can't go left beyond right edge
    const minY = Math.min(0, containerHeight - imgHeight); // Can't go down beyond top edge
    const maxY = Math.max(0, containerHeight - imgHeight); // Can't go up beyond bottom edge

    let boundedX = translateX;
    let boundedY = translateY;

    if (imgWidth > containerWidth) {
      boundedX = Math.max(minX, Math.min(maxX, translateX));
    } else {
      boundedX = (containerWidth - imgWidth) / 2;
    }

    if (imgHeight > containerHeight) {
      boundedY = Math.max(minY, Math.min(maxY, translateY));
    } else {
      boundedY = (containerHeight - imgHeight) / 2;
    }

    return [boundedX, boundedY];
  }

  private updateTransform(
    scale: number,
    translateX: number,
    translateY: number
  ) {
    const [boundedX, boundedY] = this.calculateBounds(
      scale,
      translateX,
      translateY
    );
    this.scale = scale;
    this.translateX = boundedX;
    this.translateY = boundedY;
    this.mapImage.nativeElement.style.transform = `scale(${scale}) translate(${boundedX}px, ${boundedY}px)`;
  }

  zoomIn() {
    this.updateTransform(
      Math.min(this.maxScale, this.scale + 0.5),
      this.translateX,
      this.translateY
    );
  }

  zoomOut() {
    this.updateTransform(
      Math.max(this.minScale, this.scale - 0.5),
      this.translateX,
      this.translateY
    );
  }

  reset() {
    this.updateTransform(this.minScale, 0, 0);
  }
}
