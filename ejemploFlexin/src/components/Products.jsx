import React from 'react'


const items = [
{ title: 'Friselina Premium', img: 'https://cdn.pixabay.com/photo/2020/01/24/08/21/bag-4789318_1280.jpg', text: 'Refuerzo superior, costuras seguras y asas resistentes.' },
{ title: 'Friselina Clásica', img: 'https://cdn.pixabay.com/photo/2019/03/07/13/41/bag-4043208_1280.jpg', text: 'Bolsa plana con fuelle. Gran relación costo/beneficio.' },
{ title: 'Personalizadas', img: 'https://cdn.pixabay.com/photo/2020/04/23/09/20/shopping-5081951_1280.jpg', text: 'Impresión con tu logo y colores corporativos.' }
]


export default function Products(){
return (
<section id="productos" className="py-5 bg-white">
<div className="container">
<h2 className="text-center fw-bold mb-1 reveal fade-up">Nuestros Productos</h2>
<p className="text-center text-muted mb-5 reveal fade-up delay-1">Calidad industrial, terminaciones prolijas y stock programable.</p>
<div className="row g-4">
{items.map((it, i) => (
<div className="col-md-4" key={i}>
<div className="card h-100 product-card shadow-sm reveal fade-up" style={{'--i': i}}>
<div className="ratio ratio-4x3 overflow-hidden">
<img src={it.img} className="w-100 h-100 object-fit-cover" alt={it.title} />
</div>
<div className="card-body text-center">
<h5 className="card-title mb-2">{it.title}</h5>
<p className="card-text text-muted">{it.text}</p>
</div>
</div>
</div>
))}
</div>
</div>
</section>
)
}