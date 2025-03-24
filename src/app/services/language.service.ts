import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILanguage } from '../interfaces/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private availableLanguages: ILanguage[] = [
    { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
    { code: 'de', name: 'German', nativeName: 'Deutsch' },
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' },
    {
      code: 'es-419',
      name: 'Latin American Spanish',
      nativeName: 'Español latinoamericano',
    },
    { code: 'fr', name: 'French', nativeName: 'Français' },
    {
      code: 'id',
      name: 'Indonesian',
      nativeName: 'Bahasa Indonesia',
    },
    { code: 'it', name: 'Italian', nativeName: 'Italiano' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語' },
    { code: 'ko', name: 'Korean', nativeName: '한국어' },
    { code: 'pl', name: 'Polish', nativeName: 'Polski' },
    {
      code: 'pt-BR',
      name: 'Brazilian Portuguese',
      nativeName: 'Português do Brasil',
    },
    { code: 'ru', name: 'Russian', nativeName: 'Русский' },
    { code: 'th', name: 'Thai', nativeName: 'ไทย' },
    { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
    { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt' },
    {
      code: 'zh-Hans',
      name: 'Simplified Chinese',
      nativeName: '简体中文',
    },
    {
      code: 'zh-Hant',
      name: 'Traditional Chinese',
      nativeName: '繁體中文',
    },
  ];

  private currentLanguageSubject = new BehaviorSubject<ILanguage>(
    this.availableLanguages.find((lang) => lang.code === 'pt-BR')! // Começa com pt-BR
  );
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor() {
    const storedLanguageCode = localStorage.getItem('selectedLanguage');
    if (storedLanguageCode) {
      this.setLanguage(storedLanguageCode);
    }
  }

  getLanguages(): ILanguage[] {
    return this.availableLanguages;
  }

  setLanguage(languageCode: string): void {
    const selectedLanguage = this.availableLanguages.find(
      (lang) => lang.code === languageCode
    );
    if (selectedLanguage) {
      this.currentLanguageSubject.next(selectedLanguage);
      localStorage.setItem('selectedLanguage', languageCode);
    } else {
      console.warn(
        `Unsupported language: ${languageCode}. Keeping current language.`
      );
    }
  }

  getCurrentLanguageCode(): string {
    return this.currentLanguageSubject.value.code;
  }
}
