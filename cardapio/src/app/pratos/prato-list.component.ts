import { Component, OnInit } from "@angular/core";
import { Prato } from "./prato";
import { PratoService } from "./prato.service";

@Component({
  templateUrl: './prato-list.component.html'
})

export class PratoListComponent implements OnInit {

  _pratos: Prato[] = [];
  pratosFiltrados: Prato[] = [];
  _filtrarPor: string;

  constructor(private pratoService: PratoService) {

  }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.pratoService.retrieveAll().subscribe({
      next: pratos => {
        this._pratos = pratos;
        this.pratosFiltrados = this._pratos;
      },
      error: err => console.log('Erro', err)
    });
  }

  deleteById(pratoId: number): void {
    this.pratoService.deleteById(pratoId).subscribe({
      next: () => {
        console.log('Deletado com sucesso');
        this.retrieveAll();
      },
      error: er => console.log('Erro', er)
    })
  }

  set filtro(value: string) {
    this._filtrarPor = value;
    this.pratosFiltrados = this._pratos.filter((prato: Prato) => prato.nome.toLocaleLowerCase().indexOf(this._filtrarPor.toLocaleLowerCase()) > -1)
  }

  get filtro() {
    return this._filtrarPor;
  }
}
