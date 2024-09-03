import * as url from "node:url";

export class SourceEntity {
  id: string;
  name: string;
  url: string;
  urlToLogo: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.url = '';
    this.urlToLogo = '';
  }
}
