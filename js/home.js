let div = document.getElementById("div")//ייבוא הדיו הגדול של כל הדף
let time = setInterval(myTimer, 1000);//הכנת אובייקט מסוג טיים
let pkg, btn//הכנת משתנים לטעינת הדף
let body = document.getElementById("hBody")
body.className = "userDs" + sessionStorage.getItem("ds")

document.body.onload = f_toLoad()//בעת טעינת הדף

function f_toLoad() {//פונקצית אתחול דף
    pkg = document.createElement("div")//יצירת דיב  
    pkg.appendChild(document.createElement("br"))//שורה רווח

    btn = document.createElement("h1")//כותרת דף הבית
    btn.textContent = myTimer() + " " + sessionStorage.getItem("nameU")//שם המשתמש ואיחול מתאים לשעה
    btn.className = "hello" + sessionStorage.getItem("ds")//עיצוב הכותרת בהתאם לעיצוב שבחר
    pkg.appendChild(btn)

    let divP = document.createElement("div")
    divP.setAttribute("id", "divP" + sessionStorage.getItem("ds"))
    let s = localStorage.getItem("user" + sessionStorage.getItem("index"))//ייבוא פרטי המשתמש
    for (let index = 0; index < packages.length; index++) {//ריצה על החבילות ממערך חבילות שיעורים
        if (s.split("_")[packages[index]["id"]] == "2") {//אם רכש את החבילה הנתונה
            btn = document.createElement("button")//יוצר כפתור עם שם החבילה
            btn.textContent = packages[index]["name"]//כותב את שם החבילה
            btn.setAttribute("id", packages[index]["id"])
            btn.addEventListener("click", f_openPkgSongs)// יצירת ארוע שמזמן את בנית חבילות השירים 
            btn.addEventListener("click", openTypSong)//יצרת ארוע שיפתח חלונית בחירה גדולה
            btn.className = "pkg" + sessionStorage.getItem("ds")//עיצוב אישי
            divP.appendChild(btn)

            divP.appendChild(document.createElement("br"))//שורה רווח
        }
    }
    pkg.appendChild(divP)

    for (let i = 0; i < 14; i++)
        pkg.appendChild(document.createElement("br"))// שורות רווח*14

    btn = document.createElement("button")//  כפתור חזרה לרכישות נוספות 
    btn.setAttribute("id", "BtnFinish")
    btn.className = "home" + sessionStorage.getItem("ds")
    btn.textContent = "Buy More"//כיתוב על המקש
    btn.addEventListener("click", f_sopping)//פונקציה שתחזיר לדף הרכישות
    pkg.appendChild(btn)

    div.appendChild(pkg)
}


//**************************פונקציות************************** 


function f_sopping() {// פונקציית מעבר לדף רכישות 
    window.location = "../html/shopping.html"
}

function f_openPkgSongs() {//  פונקציה שיוצרת על המסך את חבילות השירים שרכש בחלונית קופצת 
    let div = document.getElementById("div")//ייבוא דיב הגדול של הדף
    let divTypSong = document.createElement("div")
    sessionStorage.setItem("pkg", event.srcElement.id)//שומר את החבילה שלחץ עליה בזיכרון הסשן
    divTypSong.className = "overlay-content"//קלאס מתאים לחלונית הקופצת
    divTypSong.setAttribute("id", "overlay")
    div.setAttribute("id", "blackDiv")
    let open = document.createElement("div")//דיב לחלונית קופצת
    open.setAttribute("id", "open")//קלאס מתאים לחלונית הקופצת
    open.className = "overlay" + sessionStorage.getItem("ds")

    let typ
    let s = localStorage.getItem("user" + sessionStorage.getItem("index"))//ייבוא פרטי לקוח
    for (let index = 0; index < typeSongs.length; index++) {//ריצה על החבילות ממערך חבילות שירים
        if (s.split("_")[typeSongs[index]["id"]] == "2") {//אם רכש את חבילת השירים הנוכחית
            sessionStorage.setItem("typSong", typeSongs[index]["id"])//שומר בזיכרון הסשן את חבילת השירים שנבחרה
            typ = document.createElement("button")//מכין כפתור עם שם חבילת השירים
            typ.setAttribute("id", typeSongs[index]["id"])
            typ.textContent = typeSongs[index]["name"]
            typ.addEventListener("click", f_songs)//ארוע שמשוייך לפתיחת שמות שירים
            typ.className = "overlay-content" + sessionStorage.getItem("ds")
            divTypSong.appendChild(typ)
        }
    }
    open.append(divTypSong)//אימוץ הנ"ל
    div.appendChild(open)
}

function openTypSong() {// פונקציה הפותחת את החלונית הקופצת של בחירת חבילת שירים ושם השיר
    document.getElementById("open").style.width = "100%";
}

function closeTypSong() {//פונקציה הסוגרת את החלונית הקופצת בעשרים אחוז
    document.getElementById("open").style.width = "80%";
}

function f_songs() {//פונקציה הפותחת את שמות השירים המאוכסנים בחבילת השירים שלחץ עליה
    closeTypSong()//מקטין את החלונית הקופצת
    let div = document.getElementById("open")//מייבא את הדיב של החלונית הקופצת
    div.innerHTML = ""

    let divSong = document.createElement("div")//יוצר דיב חדש
    let song//הגדרת משתנה זמני
    for (let index = 0; index < songs.length; index++) {//ריצה על כל השירים שקיימים במאגר
        if (event.srcElement.id == songs[index]["type"]) {//עם השיר הוא מן הסוג שנבחר
            song = document.createElement("button")//יוצר כפתור עם שם השיר
            song.setAttribute("id", songs[index]["id"])
            song.className = "overlay-content" + sessionStorage.getItem("ds")
            song.textContent = songs[index]["name"]
            song.addEventListener("click", f_opensong)//משייך ארוע לפתיחת המשחק
            divSong.appendChild(song)
        }

    }
    div.appendChild(divSong)

}

function f_opensong() {//פונקציה שמכניסה את המשתמש לשיעור שבחר
    sessionStorage.setItem("song", event.srcElement.id)//שומר את השיר שנבחר
    window.location = "../html/game.html"
}

function myTimer() {//פונקציה המחזירה מחרוזת איחול, בהתאם לשעה הנוכחית
    let d = new Date().getHours()
    if (d >= 0 && d < 6 || d >= 22 && d <= 23)
        t = "לילה טוב"
    else if (d >= 6 && d < 13)
        t = "בוקר טוב"
    else if (d >= 13 && d <= 17)
        t = "צהריים טובים"
    else if (d > 17 && d < 22)
        t = "ערב טוב"

    return t//מחזירה מחרוזת
}

