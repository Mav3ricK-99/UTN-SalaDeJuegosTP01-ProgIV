import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

  api_url: string = 'https://the-trivia-api.com/v2/questions';


  constructor(private http: HttpClient) {

  }

  getSetPreguntasConImagenes(cantPreguntas: number, categorias: string, dificultad: string): Observable<any> {
    let getParams = "?";
    getParams = getParams.concat(
      `limit=${cantPreguntas}`,
      `&categories=${categorias}`,
      `&difficulties=${dificultad}`,
      '&types=image_choice,text_choice');

    console.log(this.api_url + getParams)
    return this.http.get(this.api_url + getParams);
  }

}
