// Dark Mode

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
themeToggle.textContent="☀️";
localStorage.setItem("theme","dark");
}
else{
themeToggle.textContent="🌙";
localStorage.setItem("theme","light");
}

});

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark");
themeToggle.textContent="☀️";
}

// Mobile Menu

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

// FAQ

document.querySelectorAll('.faq-question').forEach(btn => {

    btn.addEventListener('click', () => {

        const item = btn.parentElement;

        item.classList.toggle('active');

    });

});

// Search
const searchInput = document.getElementById("searchInput");

if(searchInput){

    const cards = document.querySelectorAll(".paper-card");

    searchInput.addEventListener("keyup",()=>{

        let value = searchInput.value.toLowerCase();

        cards.forEach(card=>{

            let text = card.textContent.toLowerCase();

            card.style.display =
            text.includes(value) ? "block" : "none";

        });

    });

}

document.querySelectorAll('.faq-question').forEach(btn=>{

    btn.addEventListener('click',()=>{

        const item = btn.parentElement;

        document.querySelectorAll('.faq-item')
        .forEach(faq=>{

            if(faq !== item){
                faq.classList.remove('active');
            }

        });

        item.classList.toggle('active');

    });

});
