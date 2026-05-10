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



// Название блюда → HTML страница блюда
document.addEventListener("DOMContentLoaded", () => {

    const dishes = {
        "борщ": "/recipesoftheclub/borsh.html",
        "панакота с агар агаром": "recipesoftheclub/panakota.html",
        "рассыпчатый плов с говядиной": "recipesoftheclub/plov.html",
        "суп суюк ош": "recipesoftheclub/suk osh.html",
        "хачапури по-аджарски": "recipesoftheclub/hachapuri.html",
        "шаурма в аэрогриле": "recipesoftheclub/shaurma.html",
        "кулич в аэрогриле": "recipesoftheclub/kulich.html",
        "эчпочмак без дрожжей": "recipesoftheclub/echpochmak.html",
        "драники в аэрогриле": "recipesoftheclub/draniki.html",
        "манная каша на молоке и воде": "recipesoftheclub/mannaya_kasha.html",
        "пшеничный ролл": "recipesoftheclub/pshenichnii_roll.html",
        "тортилья с ветчиной и сыром": "recipesoftheclub/tortilya_s_vetchinoi_i_sirom.html",
        "салат старый Новый год": "recipesoftheclub/salat_quotstarii_novii_godquot.html",
        "салат с тунцом, огурцами и кукурузой": "recipesoftheclub/salat_s_tuncom_ogurcami_i_kukuruzoi.html",
        "котлеты по-турецки": "recipesoftheclub/kotleti_po-turecki.html",
        "люля-кебаб на сковороде": "recipesoftheclub/liulya-kebab_na_skovorode.html",
        "шоколадный торт с кремом из вареной сгущенки": "recipesoftheclub/shokoladnii_tort_iz_varenoi_sgushenki.html",
        "оладьи с сыром и колбасой": "recipesoftheclub/oladi_s_sirom_i_kolbasoi.html",
    };

    const input = document.getElementById("searchInput");
    const suggestions = document.getElementById("suggestions");
    const form = document.getElementById("searchForm");

    const keys = Object.keys(dishes);

    // 🔍 Поиск при вводе
    input.addEventListener("input", () => {
        const value = input.value.toLowerCase().trim();
        suggestions.innerHTML = "";

        if (!value) return;

        const results = keys.filter(dish => 
            dish.includes(value)
        );

        results.forEach(dish => {
            const div = document.createElement("div");
            div.textContent = dish;

            div.addEventListener("click", () => {
                window.location.href = dishes[dish];
            });

            suggestions.appendChild(div);
        });
    });

    // 🚀 Поиск при Enter
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const value = input.value.toLowerCase().trim();

        const found = keys.find(dish => dish.includes(value));

        if (found) {
            window.location.href = dishes[found];
        } else {
            alert("Блюдо не найдено");
        }
    });
});





