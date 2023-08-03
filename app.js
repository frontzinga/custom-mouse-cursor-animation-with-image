const config = {
    goku: {
        img: '/img/goku-head.webp',
        cursor: '/img/goku-hand.webp',
        background: '#f09155',
    },
    vegeta: {
        img: '/img/vegeta-head.webp',
        cursor: '/img/vegeta-hand.webp',
        background: '#5f75ef',
    },
    piccolo: {
        img: '/img/piccolo-head.webp',
        cursor: '/img/piccolo-hand.webp',
        background: '#66d093',
    },
    frieza: {
        img: '/img/frieza-head.webp',
        cursor: '/img/frieza-hand.webp',
        background: '#9f5fd4',
    },
}


document.addEventListener('DOMContentLoaded', () => {
    
    const cursor = document.querySelector('.cursor');
    const character = document.querySelector('.character');
    const buttons = document.querySelectorAll('button');
    const select = document.querySelector('select');

    const changeAppearance = (selectValue) => {
        document.body.style.backgroundColor = config[selectValue].background;
        character.src = config[selectValue].img;
        character.classList.add('shake-animation');
        setTimeout(() => {
            character.classList.remove('shake-animation');
        }, 600)
        cursor.querySelector('img').src = config[selectValue].cursor;
    }

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    })

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            cursor.querySelector('img').classList.add('hand-animation');
        })
        button.addEventListener('mouseleave', () => {
            cursor.querySelector('img').classList.remove('hand-animation');
        })
    })

    changeAppearance(select.value.toLowerCase());

    select.addEventListener('change', (e) => {
        changeAppearance(e.target.value.toLowerCase());
    })

})