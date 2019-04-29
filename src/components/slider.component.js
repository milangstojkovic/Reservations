

export class SliderComponent {
    constructor() {   }

    draw(div) {
        div.innerHTML=`<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" style="margin-bottom: 50px">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>`;
        const types=this._typeService.getTypes().pipe(flatMap(type=>type)).subscribe(type=>type);
        types.forEach(element => drawSliderItem(type,sliderDiv));
        div.innerHTML+=`<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>`;
    sliderDiv=document.getElementById("carouselExampleCaptions");
    }

    drawSliderItem(type,div) {
        sliderItemDiv=document.createElement("div");
        sliderItemDiv.innerHTML=`<div class='carousel-inner'>
        <div class='carousel-item active'>
          <img src=${type.img} class='d-block w-100'  alt='...'>
          <div class='carousel-caption d-none d-md-block'>
            <h5>${type.ime}</h5>
            <p>${type.desc}</p>
          </div>
        </div>`;
        div.appendChild(sliderItemDiv);
    }
}