import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnChanges,
} from '@angular/core';
import { IColors } from '../interfaces/shop';

@Directive({
  selector: '[appBackgroundStyle]',
})
export class BackgroundStyleDirective implements OnChanges {
  @Input('appBackgroundStyle') colors: IColors;

  private defaultColors = [
    '#1ed2eb',
    '#17b4dd',
    '#0f8ecd',
    '#065fb9',
    '#034fb1',
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.applyBackground();
  }

  private applyBackground(): void {
    let gradientColors: string[] = [];

    if (this.colors && this.colors.color1) {
      gradientColors = [`#${this.colors.color1}`];
      if (this.colors.color2) gradientColors.push(`#${this.colors.color2}`);
      if (this.colors.color3) gradientColors.push(`#${this.colors.color3}`);
    } else {
      gradientColors = this.defaultColors;
    }

    const gradientStyle = `linear-gradient(to bottom, ${gradientColors.join(
      ', '
    )})`;
    this.renderer.setStyle(this.el.nativeElement, 'background', gradientStyle);
  }
}
