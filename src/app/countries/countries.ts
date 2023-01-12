export interface Country {
  name: string,
  nativeName?: string,
  population: number,
  region: string,
  capital: string,
  flag_png: string,
  subregion?: string,
  top_level_domain?: Array<string>,
  currencies?: Array<Currency>,
  languages?: Array<Language>,
  border_countries?: Array<string>
}

export interface Currency {
  code: string,
  name: string,
  symbol: string,
}

export interface Language {
  name: string,
}
