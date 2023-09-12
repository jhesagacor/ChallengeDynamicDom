// const avatar = document.querySelector('#basic-url');
// const nombre = document.querySelector('#userNameText');
// const lastName = document.querySelector('#userLastName');
// const birthday = document.querySelector('#birthDate');
// const radio = document.querySelector('input[name="gender"]');
// const pais = document.querySelector('#select');
// const description = document.querySelector('#description');
const button = document.querySelector('#enviarButton');
const avatares = []

button.addEventListener('click', (event) => {
    const result1 = {}
    // Saber su valor, accediendo a su value
    //console.log(checkbox.checked);
    const avatar = document.querySelector('#basic-url');
    const nombre = document.querySelector('#userNameText');
    const lastName = document.querySelector('#userLastName');
    const birthday = document.querySelector('#birthDate');
    const radio = document.querySelector('input[name="gender"]');
    const pais = document.querySelector('#select');
    const description = document.querySelector('#description');

    // console.log(genderList.value);
    // console.log(select.value);

    const result = {
        avatar: avatar.value,
        nombre: nombre.value,
        lastName: lastName.value,
        birthday: birthday.value,
        radio: radio.value,
        pais: pais.value,
        description: description.value,
    }

    console.log(avatares.push(result))
    event.preventDefault();
    renderingSong(avatares[avatares.length-1])


})

const renderingSong = (object) => {

    const mainContainer = document.querySelector('#mainContainer');
    const cardContainer = document.createElement('div');
    cardContainer.className = 'col-md-4';

    const cardImage = document.createElement('img');
    cardImage.className = 'img-fluid rounded-start';
    cardImage.src = object.avatar;

    const cardBodyContainer = document.createElement('div');
    cardBodyContainer.className = 'col-md-8';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const dataContainerFirst = document.createElement('div');
    dataContainerFirst.className = 'container d-flex justify-content-around';

    const containerItem1 = document.createElement('div')
    containerItem1.className = 'container';

    const nombreContainer = document.createElement('h4')
    nombreContainer.className = 'card-title';
    nombreContainer.innerText = 'Nombre';

    const nombre = document.createElement('label');
    nombre.innerText = object.nombre;

    const containerItem2 = document.createElement('div')
    containerItem2.className = 'container';

    const apellido = document.createElement('h4')
    apellido.className = 'card-title';
    apellido.innerText = 'Apellido';

    const lastName = document.createElement('label');
    lastName.innerText = object.lastName;

    const dataContainerSecond = document.createElement('div');
    dataContainerSecond.className = 'container d-flex justify-content-around';

    const containerItem3 = document.createElement('div')
    containerItem3.className = 'container';
    const fecha = document.createElement('h4')
    fecha.className = 'card-title';
    fecha.innerText = 'Fecha';

    const birthday = document.createElement('label');
    birthday.innerText = object.birthday;

    const containerItem4 = document.createElement('div')
    containerItem4.className = 'container';

    const genero = document.createElement('h4')
    genero.className = 'card-title';
    genero.innerText = 'Genero';

    const radio = document.createElement('label');
    radio.innerText = object.radio;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'container p-3 d-flex justify-content-end'

    const button1 = document.createElement('button');
    button1.innerText = 'Editar'
    const button2 = document.createElement('button');
    button2.innerText = 'Eliminar'

    cardContainer.appendChild(cardImage);

    containerItem1.appendChild(nombreContainer);
    containerItem1.appendChild(nombre);

    containerItem2.appendChild(apellido);
    containerItem2.appendChild(lastName);
    containerItem3.appendChild(fecha)
    containerItem3.appendChild(birthday)
    containerItem4.appendChild(genero);
    containerItem4.appendChild(radio);

    buttonContainer.appendChild(button1);
    buttonContainer.appendChild(button2);

    dataContainerFirst.appendChild(containerItem1);
    dataContainerFirst.appendChild(containerItem2);
    dataContainerSecond.appendChild(containerItem3);
    dataContainerSecond.appendChild(containerItem4);

    cardBody.appendChild(dataContainerFirst);
    cardBody.appendChild(dataContainerSecond);

    cardBodyContainer.appendChild(cardBody);

    mainContainer.appendChild(cardContainer);
    mainContainer.appendChild(cardBodyContainer);
    mainContainer.appendChild(buttonContainer)


    // const cardTitle = document.createElement('h5');
    // cardTitle.className = 'card-title'
    // cardTitle.innerText = object.title;
    console.log(object)


}

renderingSong(avatares[avatares.length-1])
//