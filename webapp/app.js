const voprosy = [
    {
        id: "otrasl",
        tekst: "В какой сфере работает ваш бизнес?",
        varianty: [
            { znachenie: "eda", nadpis: "Общепит (кафе, ресторан)" },
            { znachenie: "torgovlya", nadpis: "Торговля (магазин)" },
            { znachenie: "uslugi", nadpis: "Услуги (салон, ремонт)" },
            { znachenie: "proizvodstvo", nadpis: "Производство" }
        ]
    },
    {
        id: "region",
        tekst: "В каком регионе вы работаете?",
        varianty: [
            { znachenie: "moskva", nadpis: "Москва" },
            { znachenie: "spb", nadpis: "Санкт-Петербург" },
            { znachenie: "region", nadpis: "Другой регион" }
        ]
    },
    {
        id: "razmer",
        tekst: "Сколько у вас сотрудников?",
        varianty: [
            { znachenie: "mikro", nadpis: "До 15 человек" },
            { znachenie: "malyy", nadpis: "От 15 до 50" },
            { znachenie: "sredniy", nadpis: "Более 50" }
        ]
    },
    {
        id: "sotrudniki",
        tekst: "Есть ли у вас официально оформленные сотрудники?",
        varianty: [
            { znachenie: "da", nadpis: "Да, оформлены по ТК РФ" },
            { znachenie: "net", nadpis: "Нет, работаю один(одна)" }
        ]
    }
];

const trebovaniya = [
    {
        id: "pozharnaya_bezopasnost",
        nazvanie: "Пожарная безопасность",
        opisanie: "Наличие огнетушителей, плана эвакуации, инструкции по пожарной безопасности.",
        status: "krasnyy",
        istochnik: "Постановление Правительства РФ №1479",
        sovpadenie: { otrasl: ["eda", "torgovlya", "uslugi", "proizvodstvo"], region: ["moskva", "spb", "region"], razmer: ["mikro", "malyy", "sredniy"], sotrudniki: ["da", "net"] }
    },
    {
        id: "sanitarnye_normy",
        nazvanie: "Санитарные нормы (СанПиН)",
        opisanie: "Соблюдение санитарных требований к помещениям, оборудованию, персоналу.",
        status: "zheltyy",
        istochnik: "СП 2.3.6.3668-20",
        sovpadenie: { otrasl: ["eda"], region: ["moskva", "spb", "region"], razmer: ["mikro", "malyy", "sredniy"], sotrudniki: ["da", "net"] }
    },
    {
        id: "ohrana_truda",
        nazvanie: "Охрана труда",
        opisanie: "Специальная оценка условий труда, инструктажи, журналы, СИЗ.",
        status: "krasnyy",
        istochnik: "ТК РФ, ФЗ №426-ФЗ",
        sovpadenie: { otrasl: ["eda", "torgovlya", "uslugi", "proizvodstvo"], region: ["moskva", "spb", "region"], razmer: ["malyy", "sredniy"], sotrudniki: ["da"] }
    },
    {
        id: "uvedomlenie_rpn",
        nazvanie: "Уведомление Роспотребнадзора",
        opisanie: "Уведомление о начале деятельности в Роспотребнадзор.",
        status: "zheltyy",
        istochnik: "ФЗ №294-ФЗ",
        sovpadenie: { otrasl: ["eda", "torgovlya", "uslugi"], region: ["moskva", "spb", "region"], razmer: ["mikro", "malyy", "sredniy"], sotrudniki: ["da", "net"] }
    },
    {
        id: "onlayn_kassa",
        nazvanie: "Онлайн-касса (ККТ)",
        opisanie: "Наличие и регистрация контрольно-кассовой техники, работа с ОФД.",
        status: "krasnyy",
        istochnik: "ФЗ №54-ФЗ",
        sovpadenie: { otrasl: ["torgovlya", "eda", "uslugi"], region: ["moskva", "spb", "region"], razmer: ["mikro", "malyy", "sredniy"], sotrudniki: ["da", "net"] }
    },
    {
        id: "litsenziya_alkogol",
        nazvanie: "Лицензия на продажу алкоголя",
        opisanie: "Лицензия требуется для продажи алкогольной продукции.",
        status: "krasnyy",
        istochnik: "ФЗ №171-ФЗ",
        sovpadenie: { otrasl: ["torgovlya", "eda"], region: ["moskva", "spb", "region"], razmer: ["mikro", "malyy", "sredniy"], sotrudniki: ["da", "net"] }
    },
    {
        id: "ventilyatsiya",
        nazvanie: "Вентиляция и кондиционирование",
        opisanie: "Наличие работоспособной вентиляции, обслуживание систем.",
        status: "zheltyy",
        istochnik: "СП 2.3.6.3668-20",
        sovpadenie: { otrasl: ["eda", "proizvodstvo"], region: ["moskva", "spb", "region"], razmer: ["mikro", "malyy", "sredniy"], sotrudniki: ["da", "net"] }
    },
    {
        id: "pozharnaya_signalizatsiya",
        nazvanie: "Пожарная сигнализация",
        opisanie: "Наличие и обслуживание автоматической пожарной сигнализации.",
        status: "krasnyy",
        istochnik: "Постановление Правительства РФ №1479",
        sovpadenie: { otrasl: ["eda", "torgovlya", "proizvodstvo"], region: ["moskva", "spb", "region"], razmer: ["malyy", "sredniy"], sotrudniki: ["da", "net"] }
    },
    {
        id: "ugolok_potrebitelya",
        nazvanie: "Уголок потребителя",
        opisanie: "Наличие книги отзывов, информации о продавце, лицензий.",
        status: "zheltyy",
        istochnik: "Закон РФ №2300-1",
        sovpadenie: { otrasl: ["torgovlya", "eda", "uslugi"], region: ["moskva", "spb", "region"], razmer: ["mikro", "malyy", "sredniy"], sotrudniki: ["da", "net"] }
    },
    {
        id: "litsenzii_po",
        nazvanie: "Лицензии на ПО",
        opisanie: "Наличие лицензий на используемое программное обеспечение.",
        status: "zheltyy",
        istochnik: "ГК РФ часть 4",
        sovpadenie: { otrasl: ["uslugi", "proizvodstvo"], region: ["moskva", "spb", "region"], razmer: ["mikro", "malyy", "sredniy"], sotrudniki: ["da", "net"] }
    }
];

let tekushchiyShag = 0;
const otvety = {};

const ekrany = {
    start: document.getElementById("ekran-start"),
    opros: document.getElementById("ekran-opros"),
    rezultaty: document.getElementById("ekran-rezultatov")
};
const tekstVoprosa = document.getElementById("tekst-voprosa");
const konteynerVariantov = document.getElementById("konteyner-variantov");
const metkaShaga = document.getElementById("metka-shaga");
const progressZapolnenie = document.getElementById("progress-zapolnenie");
const konteynerRezultatov = document.getElementById("konteyner-rezultatov");
const svodkaStatusa = document.getElementById("svodka-statusa");

function pokazatEkran(imya) {
    Object.values(ekrany).forEach(e => e.classList.remove("aktivnyy"));
    ekrany[imya].classList.add("aktivnyy");
}

document.getElementById("knopka-start").addEventListener("click", () => {
    tekushchiyShag = 0;
    pokazatEkran("opros");
    otrisovatVopros();
});

function otrisovatVopros() {
    const v = voprosy[tekushchiyShag];
    tekstVoprosa.textContent = v.tekst;
    metkaShaga.textContent = `Вопрос ${tekushchiyShag + 1} из ${voprosy.length}`;
    progressZapolnenie.style.width = `${(tekushchiyShag / voprosy.length) * 100}%`;

    konteynerVariantov.innerHTML = "";
    v.varianty.forEach(varnt => {
        const knopka = document.createElement("button");
        knopka.className = "knopka-varianta";
        knopka.textContent = varnt.nadpis;
        knopka.addEventListener("click", (e) => vybratVariant(v.id, varnt.znachenie, e.target));
        konteynerVariantov.appendChild(knopka);
    });
}

function vybratVariant(idVoprosa, znachenie, tsel) {
    otvety[idVoprosa] = znachenie;
    Array.from(konteynerVariantov.children).forEach(k => k.classList.remove("vybran"));
    tsel.classList.add("vybran");

    setTimeout(() => {
        tekushchiyShag++;
        if (tekushchiyShag < voprosy.length) {
            otrisovatVopros();
        } else {
            progressZapolnenie.style.width = "100%";
            pokazatRezultaty();
        }
    }, 200);
}

document.getElementById("knopka-nazad").addEventListener("click", () => {
    if (tekushchiyShag > 0) {
        tekushchiyShag--;
        otrisovatVopros();
    } else {
        pokazatEkran("start");
    }
});

function pokazatRezultaty() {
    const sovpavshie = trebovaniya.filter(t => {
        return t.sovpadenie.otrasl.includes(otvety.otrasl)
            && t.sovpadenie.region.includes(otvety.region)
            && t.sovpadenie.razmer.includes(otvety.razmer)
            && t.sovpadenie.sotrudniki.includes(otvety.sotrudniki);
    });

    const kolichestvoKrasnyh = sovpavshie.filter(t => t.status === "krasnyy").length;
    const kolichestvoZheltyh = sovpavshie.filter(t => t.status === "zheltyy").length;
    const kolichestvoZelenyh = sovpavshie.filter(t => t.status === "zelenyy").length;

    let statusSvodki, tekstSvodki;
    if (kolichestvoKrasnyh > 0) {
        statusSvodki = "krasnyy";
        tekstSvodki = `Внимание: ${kolichestvoKrasnyh} критичных требований не выполнены`;
    } else if (kolichestvoZheltyh > 0) {
        statusSvodki = "zheltyy";
        tekstSvodki = `Проверьте: ${kolichestvoZheltyh} требований требуют внимания`;
    } else {
        statusSvodki = "zelenyy";
        tekstSvodki = "Все требования выполнены";
    }

    svodkaStatusa.className = `svodka-statusa ${statusSvodki}`;
    svodkaStatusa.innerHTML = `<span class="znachok">[${statusSvodki === "krasnyy" ? "!" : statusSvodki === "zheltyy" ? "?" : "+"}]</span><span>${tekstSvodki}</span>`;

    konteynerRezultatov.innerHTML = "";

    if (sovpavshie.length === 0) {
        konteynerRezultatov.innerHTML = `<p class="pusto">По вашим параметрам требования не найдены. Попробуйте изменить ответы.</p>`;
    } else {
        sovpavshie.forEach(t => {
            const element = document.createElement("div");
            element.className = "element-rezultata";
            element.innerHTML = `
                <div class="tochka ${t.status}"></div>
                <div class="soderzhanie">
                    <h3>${t.nazvanie}</h3>
                    <p>${t.opisanie}</p>
                    <span class="istochnik">Источник: ${t.istochnik}</span>
                </div>
            `;
            konteynerRezultatov.appendChild(element);
        });
    }

    if (window.WebApp) {
        try {
            window.WebApp.sendData(JSON.stringify({
                otrasl: otvety.otrasl,
                region: otvety.region,
                razmer: otvety.razmer,
                sotrudniki: otvety.sotrudniki,
                krasnyh: kolichestvoKrasnyh,
                zheltyh: kolichestvoZheltyh,
                vsego: sovpavshie.length
            }));
        } catch (e) {
            console.log("WebApp.sendData недоступен:", e);
        }
    }

    pokazatEkran("rezultaty");
}

document.getElementById("knopka-zanovo").addEventListener("click", () => {
    Object.keys(otvety).forEach(k => delete otvety[k]);
    tekushchiyShag = 0;
    pokazatEkran("start");
});
