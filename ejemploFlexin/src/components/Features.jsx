import React from 'react'


const feats = [
{ icon:'bi-recycle', title:'Sustentables', text:'Material no tejido reutilizable y opciones biodegradables.' },
{ icon:'bi-lightning-charge', title:'Ágiles', text:'Plazos de entrega cortos y planificación por lotes.' },
{ icon:'bi-brush', title:'Personalizadas', text:'Impresión con tu marca, colores y formatos especiales.' }
]


export default function Features(){
return (
<section className="py-5 bg-light">
<div className="container">
<div className="row g-4">
{feats.map((f,i)=> (
<div className="col-md-4" key={i}>
<div className="h-100 text-center p-4 rounded-4 border reveal fade-up" style={{'--i':i}}>
<i className={`bi ${f.icon} display-6 text-success`}></i>
<h5 className="mt-3 mb-2">{f.title}</h5>
<p className="text-muted mb-0">{f.text}</p>
</div>
</div>
))}
</div>
</div>
</section>
)
}