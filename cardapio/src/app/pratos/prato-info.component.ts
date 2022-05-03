import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Prato } from "./prato";
import { PratoService } from "./prato.service";

@Component({
  templateUrl: './prato-info.component.html'
})
export class PratoInfoComponent implements OnInit {

  prato: Prato;

  constructor(private activatedRoute: ActivatedRoute, private pratoService: PratoService) {

  }

  ngOnInit(): void {
    this.pratoService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
      next: prato => this.prato = prato,
      error: err => console.log('Erro', err)
    });
  }

  save(): void {
    this.pratoService.save(this.prato).subscribe({
      next: prato => console.log('Salvo com sucesso', prato),
      error: err => console.log('Erro', err)
    });
  }
}
