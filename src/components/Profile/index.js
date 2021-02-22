import React, { Component } from "react";

export default class Profile extends Component {
  /*
  add class >> text-dark bg-light
  */
  render() {
    return (
      <a href="https://yoda.baby" class="list-group-item list-group-item-action">
        <div class="row g-0">
          <div class="col-md-2 text-center">
            <img src="https://www.facilitamovel.com.br/blog/img/conteudo/frases-bill-gates.jpg" class="rounded-circle w-75" alt="..." />
          </div>
          <div class="col-md-10">
              <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-0">Bill Gates</h5>
                  <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-0">Some placeholder content in a paragraph.</p>
              <small class="text-muted">And some muted small print.</small>
          </div>
        </div>
      </a>
    );
  }
}
