import React, { useEffect, useRef, useState } from 'react'


function useCounter(target=0, duration=1200){
const [n, setN] = useState(0)
const refStarted = useRef(false)
useEffect(()=>{
let raf; const start = performance.now()
const step = (t)=>{
const p = Math.min(1, (t-start)/duration)
setN(Math.floor(p*target))
if(p<1) raf = requestAnimationFrame(step)
}
if(!refStarted.current){ refStarted.current = true; raf = requestAnimationFrame(step) }
return ()=> cancelAnimationFrame(raf)
},[target, duration])
return n
}


export default function Stats(){
const a = useCounter(1200)
const b = useCounter(350)
const c = useCounter(98)
return (
<section className="py-5 bg-white">
<div className="container">
<div className="row text-center g-4">
<div className="col-md-4 reveal fade-up"><div className="display-5 fw-bold text-gradient">{a}k</div><div className="text-muted">Bolsas/mes de capacidad</div></div>
<div className="col-md-4 reveal fade-up delay-1"><div className="display-5 fw-bold text-gradient">{b}+</div><div className="text-muted">Clientes activos</div></div>
<div className="col-md-4 reveal fade-up delay-2"><div className="display-5 fw-bold text-gradient">{c}%</div><div className="text-muted">Pedidos a tiempo</div></div>
</div>
</div>
</section>
)
}