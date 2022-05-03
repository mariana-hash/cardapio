import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prato } from './prato';

@Injectable({
  providedIn: 'root'
})

export class PratoService {

  private pratosUrl: string = 'http://localhost:3100/api/cardapio';

  constructor(private httpClient: HttpClient) {

  }

  retrieveAll(): Observable<Prato[]> {
    return this.httpClient.get<Prato[]>(this.pratosUrl);
  }

  retrieveById(id: number): Observable<Prato> {
    return this.httpClient.get<Prato>(`${this.pratosUrl}/${id}`);
  }

  save(prato: Prato): Observable<Prato> {
    if (prato.id) {
      return this.httpClient.put<Prato>(`${this.pratosUrl}/${prato.id}`, prato);
    }
    else {
      return this.httpClient.post<Prato>(`${this.httpClient}`, prato);
    }
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.pratosUrl}/${id}`);
  }

}


var PRATOS: Prato[] = [
  {
    id: 1,
    nome: 'Frango',
    imgUrl: '/assets/images/frango.jpg',
    descricao: '',
    preco: 20,
    cod: 'XPS-8796',
    rating: 4.9
  },
  {
    id: 2,
    nome: 'Salada',
    imgUrl: '/assets/images/salada-grega.jpg',
    descricao: '',
    preco: 10,
    cod: 'LKL-1094',
    rating: 4.7
  },
  {
    id: 3,
    nome: 'Camarão',
    imgUrl: '/assets/images/camaroada.jpg',
    descricao: 'Camaroada',
    preco: 20,
    cod: 'DWQ-2893',
    rating: 5
  },
  {
    id: 4,
    nome: 'Macarronada',
    imgUrl: '/assets/images/macarronada.jpg',
    descricao: '',
    preco: 15,
    cod: 'PQL-3072',
    rating: 4.5
  }
]
