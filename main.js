const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_btn');
const closeBtn = document.querySelector('#close_btn');
const themeToggler = document.querySelector('.theme_toggler')

// open sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');


    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    // themeToggler.querySelector('span').classList.toggle('active');
})


Tables.forEach(table => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${table.productName}</td>
                        <td>${table.productNumber}</td>
                        <td>${table.paymentStatus}</td>
                        <td class="${table.shipping === 'Declined' ? 'danger' : table.shipping === 'pending' ? 'warning' : 'primary'}">${table.shipping}</td>
                        <td class="primary">Details</td> 
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})