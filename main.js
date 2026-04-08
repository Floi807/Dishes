function showPage(pageId) {
      // Скрыть все страницы
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => {
        page.classList.remove('active');
      });

      // Показать нужную страницу
      const targetPage = document.getElementById(pageId);
      if (targetPage) {
        targetPage.classList.add('active');
      }
    }




const descriptions = document.querySelectorAll('.description');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.description').forEach(desc => {
    desc.addEventListener('wheel', e => {
      e.preventDefault();
      desc.scrollTop += e.deltaY * 0.1;
    }, { passive: false });
  });
});



// Название книги → HTML страница книги
document.addEventListener("DOMContentLoaded", () => {
    const dishes = {
        "борщ": "/Dishes/recipesoftheclub/borsh.html",
        "панакота с агар агаром": "/Dishes/recipesoftheclub/panakota.html",
        "рассыпчатый плов с говядиной": "/Dishes/recipesoftheclub/plov.html",
        "суп суюк ош": "/Dishes/recipesoftheclub/suk osh.html",
        "хачапури по-аджарски": "/Dishes/recipesoftheclub/hachapuri.html"
    };

    const form = document.getElementById("searchForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = this.dish.value.trim().toLowerCase();

        if (dishes[name]) {
            window.location.href = dishes[name];
        } else {
            alert("Блюдо не найдено");
        }
    });
});





