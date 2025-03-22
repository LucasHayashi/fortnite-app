import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  private defaultColors = [
    '#1ed2eb',
    '#17b4dd',
    '#0f8ecd',
    '#065fb9',
    '#034fb1',
  ];

  constructor() {}

  getBackgroundStyle(colors: any): any {
    let gradientColors = [];

    if (colors && colors.color1) {
      gradientColors = [`#${colors.color1}`];
      if (colors.color2) gradientColors.push(`#${colors.color2}`);
      if (colors.color3) gradientColors.push(`#${colors.color3}`);
    } else {
      gradientColors = this.defaultColors; // Usa as cores padrão
    }

    return {
      background: `linear-gradient(to bottom, ${gradientColors.join(', ')})`,
    };
  }
}
