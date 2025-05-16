export class Color{
    colors : string[] =[]

    
  constructor(colors: string[]) {

    this.colors = colors ;
  }

  addColor(color: string) {
    this.colors.push(color); // adiciona uma nova cor ao array
  }
} 