import React from 'react'


export default function Hero(){
return (
<section className="hero-section text-center d-flex align-items-center" id="nosotros">
<div className="container py-5">
<div className="row align-items-center g-4">
<div className="col-md-6 reveal fade-up">
<h1 className="display-5 fw-bold mb-3 text-gradient">Soluciones en Bolsas de Friselina</h1>
<p className="lead mb-4">Diseñamos y fabricamos bolsas reutilizables, resistentes y personalizadas para tu marca. Producción ágil, calidad constante y enfoque sustentable.</p>
<div className="d-flex gap-3 justify-content-center justify-content-md-start">
<a className="btn btn-success btn-lg" href="#productos">Ver productos</a>
<a className="btn btn-outline-success btn-lg" href="#contacto">Cotizar ahora</a>
</div>
<div className="mt-4 small text-muted">Entrega rápida · Personalización total · Hechas en Argentina</div>
</div>
<div className="col-md-6 reveal fade-up delay-1">
<div className="hero-image card border-0 shadow-lg overflow-hidden">
<img src="https://cdn.pixabay.com/photo/2019/03/07/13/41/bag-4043208_1280.jpg" alt="Bolsas Flexin" className="img-fluid"/>
</div>
</div>
</div>


{/* Marquee marcas */}
<div className="marquee mt-5 reveal fade-up">
<div className="marquee-track">
<span>Retail</span><span>Farmacias</span><span>Textil</span><span>Eventos</span><span>Alimentos</span><span>Corporativo</span>
</div>
</div>
</div>
</section>
)
}