const $cardsTemplate = document.querySelector('.cards-template');



const arrProducts = [
    {
        name: 'Libro',
        img: 'https://th.bing.com/th/id/OIP.ub8A0WyALMy3Zu4oIufKIQHaLe?w=186&h=289&c=7&r=0&o=5&pid=1.7'
    },
    {
        name: 'Libro',
        img: 'https://th.bing.com/th/id/OIP.ub8A0WyALMy3Zu4oIufKIQHaLe?w=186&h=289&c=7&r=0&o=5&pid=1.7'
    },
    {
        name: 'Libro',
        img: 'https://th.bing.com/th/id/OIP.ub8A0WyALMy3Zu4oIufKIQHaLe?w=186&h=289&c=7&r=0&o=5&pid=1.7'
    },
    {
        name: 'Libro',
        img: 'https://th.bing.com/th/id/OIP.ub8A0WyALMy3Zu4oIufKIQHaLe?w=186&h=289&c=7&r=0&o=5&pid=1.7'
    },
    {
        name: 'Libro',
        img: 'https://th.bing.com/th/id/OIP.ub8A0WyALMy3Zu4oIufKIQHaLe?w=186&h=289&c=7&r=0&o=5&pid=1.7'
    },
]


$cardsTemplate.innerHTML = arrProducts.map((product) => {
    return `
        <div class="card">
            <img src="${product.img}" alt="">
            <p>${product.name}</p>
        </div>
    `
}).join('')

