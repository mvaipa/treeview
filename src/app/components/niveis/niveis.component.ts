import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-niveis',
  templateUrl: './niveis.component.html',
  styleUrls: ['./niveis.component.css']
})

export class NiveisComponent implements OnInit {

  public descricao: string;

  constructor() {
  }

  title = 'Lista de Compras';
  acao = 'Adicionar';
  nivel = null;
  id = 0;

  error = null;
  success = null;

  niveis = [];

  ngOnInit(): void {
  }

  onSubmit() {
  }

  /* Chamo o modal no modo Cadastro */
  cadNivelAction() {
    this.acao = 'Cadastrar';
  }

  /* Cadastri Nivel */
  cadNivelForm() {

    if (this.descricao) {

      this.niveis.push({
        des: this.descricao
      });

      this.success = 'Nivel Cadastrado Com Sucesso!';
      this.error = null;

    } else {

      this.success = null;
      this.error = 'Campo Nome Obrigatório!';

    }

    this.descricao = null;

  }

  /* Chamo o modal no modo Edição */
  ediNivelAction(nivel, id) {
    this.acao = 'Editar';
    this.descricao = nivel;
  }

  /* Edito Nivel */
  ediNivelForm(id) {

    if (this.descricao) {

      this.niveis[id] = { des: this.descricao };

      this.success = 'Nivel Editado Com Sucesso!';
      this.error = null;

    } else {

      this.success = null;
      this.error = 'Campo Nome Obrigatório!';

    }

    this.descricao = null;

  }

  /* Chamo o modal no modo Deleta */
  delNivelAction(nivel, id) {
    this.acao = 'Deletar';
    this.nivel = nivel;
    this.id = id;

    console.log(nivel, id);
  }

  /* Deleto Nivel */
  delNivelForm(id) {
    this.niveis.splice(id, 1);
    this.success = 'Nivel Deletado Com Sucesso!';
    this.descricao = null;
  }

}
