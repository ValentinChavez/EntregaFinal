(async() => {
    const {value: pais} = await Swal.fire({
        title: 'Bienvenido a mi tienda!',
        text: 'Selecciona tu pais',
        icon: 'question',
        confirmButtonText: 'Seleccionar',
        footer: '<span class="rojo"> Esta es informacion importante</span>',
        padding: '1rem',
        backdrop: true,
        position: 'center',
        allowOutsideClick: false,
            
        input: 'select',
        inputPlaceholder: 'De donde eres',
        inputValue: '',
        inputOptions: {
            Argentina: 'Argentina',
            Mexico: 'Mexico',
            Chile: 'Chile',
            Paraguay: 'Paraguay',
            Uruguay: 'Uruguay',
            Peru: 'Peru',
            Bolivia: 'Bolivia',
        }
    });

    if (pais){
        Swal.fire({
            title: `Seleccionaste ${pais}`
        })
    }
})()

const btn = document.querySelector('#vaciar-carrito');

btn.addEventListener( 'click' , () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su Carrito Se Vació Correctamente',
        showConfirmButton: false,
        timer: 1000
    })
})