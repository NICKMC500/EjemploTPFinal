import React from 'react'


export default function Contact(){
return (
<section id="contacto" className="py-5 bg-light">
<div className="container">
<div className="row g-4">
<div className="col-md-4 text-center reveal fade-up">
<h4 className="fw-bold" style={{color:'var(--brand)'}}>Experiencia</h4>
<p>Más de 10 años fabricando bolsas ecológicas de alta calidad, con servicio ágil y atención personalizada.</p>
</div>
<div className="col-md-4 text-center reveal fade-up delay-1">
<h4 className="fw-bold" style={{color:'var(--brand)'}}>Contacto</h4>
<p className="mb-2">Córdoba 6931 (Colectora Ruta 8)<br/>Loma Hermosa - Bs. As. Argentina</p>
<a className="btn btn-success btn-lg" href="mailto:contacto@flexin.com">Enviar Mensaje</a>
</div>
<div className="col-md-4 text-center reveal fade-up delay-2">
<h4 className="fw-bold" style={{color:'var(--brand)'}}>Redes Sociales</h4>
<div className="d-flex justify-content-center gap-3 fs-3">
<a href="#" className="text-success" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
<a href="#" className="text-success" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
<a href="#" className="text-success" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
<a href="#" className="text-success" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
</div>
</div>
</div>
</div>
</section>
)
}