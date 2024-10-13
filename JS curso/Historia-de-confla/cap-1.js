let dineroConfla = prompt('cuanto dinero tiene confla?'); 
// let dineroRoberto = prompt('cuanto dinero tiene roberto?'); 
// let dineroPedro = prompt('cuanto dinero tiene pedro?'); 

// const dineroTotal = dineroConfla+dineroRoberto+dineroPedro;

if (dineroConfla >= 0.6 && dineroConfla < 1) {
    alert('Alcanza para helado de agua');
    alert('y te sobran ' + (dineroConfla - 0.6));
} else if (dineroConfla >= 1 && dineroConfla < 2) {
    alert('Alcanza para helado de crema');
    alert('y te sobran ' + (dineroConfla - 1));
} else if (dineroConfla >= 2) {
    alert('Alcanza para helado de chocolate');
    alert('y te sobran ' + (dineroConfla - 2));
} else if (dineroConfla >= 0 && dineroConfla < 0.6) {
    alert('no te alcanza');
} 