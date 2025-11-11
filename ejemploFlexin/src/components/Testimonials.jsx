import React from 'react'


export default function Testimonials(){
return (
<section className="py-5 bg-white">
<div className="container">
<h2 className="text-center fw-bold mb-4 reveal fade-up">Lo que dicen nuestros clientes</h2>
<div id="tCarousel" className="carousel slide reveal fade-up delay-1" data-bs-ride="carousel">
<div className="carousel-inner">
<div className="carousel-item active">
<div className="d-flex flex-column align-items-center">
<p className="lead text-center" style={{maxWidth:700}}>“Excelente calidad y plazos cumplidos. Las bolsas personalizadas elevaron nuestra marca en cada entrega.”</p>
<div className="small text-muted">Mariana · Retail</div>
</div>
</div>
<div className="carousel-item">
<div className="d-flex flex-column align-items-center">
<p className="lead text-center" style={{maxWidth:700}}>“Servicio rápido y diseños impecables. Muy recomendables.”</p>
<div className="small text-muted">Gonzalo · Farmacias</div>
</div>
</div>
<div className="carousel-item">
<div className="d-flex flex-column align-items-center">
<p className="lead text-center" style={{maxWidth:700}}>“El equipo de Flexin entiende las necesidades industriales y responde a tiempo.”</p>
<div className="small text-muted">Lucía · Textil</div>
</div>
</div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#tCarousel" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
<span className="visually-hidden">Anterior</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#tCarousel" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
<span className="visually-hidden">Siguiente</span>
</button>
</div>
</div>
</section>
)
}