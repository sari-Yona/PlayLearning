let div = document.getElementById("div")

let buy, pkg
document.body.onload = f_toLoad()//בעת טעינת הדף
function f_toLoad() {//פונקצית אתחול דף

    buy = document.createElement("div")//דיב לכל הדף
    pkg = document.createElement("h1")// יוצר כותרת לבחירת החבילות 
    pkg.textContent = "Buy Now!"//כיתוב  
    pkg.setAttribute("class", "title")
    buy.appendChild(pkg)

    pkg = document.createElement("h3")// יוצר כותרת חבילות סוג השיעור 
    pkg.textContent = "Lessons Packages "//כיתוב  
    pkg.setAttribute("class", "input")
    buy.appendChild(pkg)


    let bigDiv = document.createElement("div")
    bigDiv.className = "bigDiv"

    let d = document.createElement("div")
    d.className = "pkg"

    pkg = document.createElement("img")//  מקש נגינה לפי שמיעה
    pkg.setAttribute("id", "p4")
    pkg.setAttribute("src", "../pic/listen.gif")
    if (localStorage.getItem("user" + sessionStorage.getItem("index")).split("_")[4] == "2") {
        pkg.className = "ChooseDs"
    }
    else {
        pkg.className = "InChooseDs"
    }
    pkg.addEventListener("click", f_addPkg)
    d.appendChild(pkg)

    pkg = document.createElement("div")
    pkg.className = "pkg"
    pkg.textContent = "פיתוח שמיעה ויכולת מוזיקלית עלות חודשית: 45$"
    d.appendChild(pkg)

    bigDiv.appendChild(d)

    d = document.createElement("div")
    d.className = "pkg"

    pkg = document.createElement("img")//   מקש נגינה לפי תווים
    pkg.setAttribute("id", "p6")
    pkg.setAttribute("src", "../pic/notes.gif")
    if (localStorage.getItem("user" + sessionStorage.getItem("index")).split("_")[5] == "2")
        pkg.className = "ChooseDs"
    else
        pkg.className = "InChooseDs"
    pkg.addEventListener("click", f_addPkg)
    d.appendChild(pkg)

    pkg = document.createElement("div")
    pkg.className = "pkg"
    pkg.textContent = "לימוד נגינה מקצועי באמצעות תווים עלות חודשית: 59$ "
    d.appendChild(pkg)

    bigDiv.appendChild(d)

    d = document.createElement("div")
    d.className = "pkg"

    pkg = document.createElement("img")//  מקש נגינה לפי צבעים
    pkg.setAttribute("id", "p5")
    pkg.setAttribute("src", "../pic/color.gif")
    if (localStorage.getItem("user" + sessionStorage.getItem("index")).split("_")[6] == "2")
        pkg.className = "ChooseDs"
    else
        pkg.className = "InChooseDs"
    pkg.addEventListener("click", f_addPkg)
    d.appendChild(pkg)

    pkg.textContent = pkg = document.createElement("div")
    pkg.className = "pkg"
    pkg.textContent = "חויית נגינה משחררת לכל גיל עלות חודשית: 45$"
    d.appendChild(pkg)

    bigDiv.appendChild(d)

    buy.appendChild(bigDiv)

    pkg = document.createElement("h3")// יוצר כותרת חבילות שירים
    pkg.textContent = "Songs Packages "//כיתוב  
    pkg.setAttribute("class", "input")
    buy.appendChild(pkg)

    let bigDiv2 = document.createElement("div")
    bigDiv2.className = "bigDiv2"

    pkg = document.createElement("button")//מקש שירים מסוג חסידי
    pkg.setAttribute("id", "p9")
    if (localStorage.getItem("user" + sessionStorage.getItem("index")).split("_")[9] == "2")
        pkg.className = "ChooseDs"
    else
        pkg.className = "InChooseDs"
    pkg.textContent = "חסידי" + " 25$ "//כיתוב על המקש
    pkg.addEventListener("click", f_addPkg)
    bigDiv2.appendChild(pkg)

    pkg = document.createElement("button")//מקש שירים מסוג קלאסי
    pkg.setAttribute("id", "p8")
    if (localStorage.getItem("user" + sessionStorage.getItem("index")).split("_")[8] == "2")
        pkg.className = "ChooseDs"
    else
        pkg.className = "InChooseDs"
    pkg.textContent = "קלאסי" + " 20$ "//כיתוב על המקש
    pkg.addEventListener("click", f_addPkg)
    bigDiv2.appendChild(pkg)

    pkg = document.createElement("button")//מקש שירים מסוג מזרחי
    pkg.setAttribute("id", "p10")
    if (localStorage.getItem("user" + sessionStorage.getItem("index")).split("_")[10] == "2")
        pkg.className = "ChooseDs"
    else
        pkg.className = "InChooseDs"
    pkg.textContent = "מזרחי" + " 25$ "//כיתוב על המקש
    pkg.addEventListener("click", f_addPkg)//זימון פונקציה
    bigDiv2.appendChild(pkg)

    buy.appendChild(bigDiv2)

    buy.appendChild(document.createElement("br"))//שורה רווח
    buy.appendChild(document.createElement("br"))//שורה רווח

    pkg = document.createElement("button")//מקש העברה לתשלום
    pkg.setAttribute("id", "BtnFinish")
    pkg.className = "input"
    pkg.textContent = "לתשלום"//כיתוב על המקש
    pkg.addEventListener("click", f_payment)//זימון פונקציה
    buy.appendChild(pkg)

    pkg = document.createElement("label")
    pkg.setAttribute("id", "ErrorLbl")//תגית שגיאה
    pkg.className = "input"
    buy.appendChild(pkg)


    buy.appendChild(pkg)

    div.appendChild(buy)//אימוץ כל הנ"ל
}

//**************************פונקציות************************** 

function f_addPkg() {//הוספת והסרת חבילה לסל/מהסל(המקש מודגש)
    let x = event.srcElement.id.substring(1)//מביא את הID של הPKG שזה המיקום בזיכרון
    let s = localStorage.getItem("user" + (sessionStorage.getItem("index")))
    let n = ""
    let pkg = event.srcElement
    if (s.split("_")[x] == "0") {

        event.srcElement.className = "chooseDs"//המקש מודגש
        for (let i = 0; i < s.split("_").length; i++) {
            if (i == x) {
                if (i == s.split("_").length - 1)
                    n += "1"
                else
                    n += "1" + "_"
            }
            else {
                if (i == s.split("_").length - 1)
                    n += s.split("_")[i]
                else
                    n += s.split("_")[i] + "_"
            }
        }
        localStorage.setItem("user" + (sessionStorage.getItem("index")), n)
    }
    else if (s.split("_")[x] == "1") {
        event.srcElement.className = "InChooseDs"//המקש הופך ללא מודגש 
        for (let i = 0; i < s.split("_").length; i++) {
            if (i == x) {
                if (i == s.split("_").length - 1)
                    n += "0"//החבילה מוסרת מהסל
                else
                    n += "0" + "_"
            }
            else {
                if (i == s.split("_").length - 1)
                    n += s.split("_")[i]
                else
                    n += s.split("_")[i] + "_"
            }
        }
        localStorage.setItem("user" + (sessionStorage.getItem("index")), n)
    }


}

function f_payment() {//לחצן מעבר לתשלום
    let lbl = document.getElementById("ErrorLbl")//תגית שגיאה
    let s = localStorage.getItem("user" + (sessionStorage.getItem("index")))
    let f1 = 0, f2 = 0
    for (let index = 4; index < 8; index++) {// בדיקה שהמשתמש בחר לפחות חבילת שיעורים אחת וחבילת שירים אחת
        if (s.split("_")[index] == "1")
            f1 += 1
        else if (s.split("_")[index] == "2")
            f1 += 10
    }
    for (let index = 8; index < s.split("_").length; index++) {
        if (s.split("_")[index] == "1")
            f2 += 1
        else if (s.split("_")[index] == "2")
            f2 += 10
    }
    if (f1 == 0 || f2 == 0) {// אם לא נבחרה חבילת שיעורים ו/או חבילת  שירים תופיע הודעת שגיאה מתאימה
        lbl.textContent = "יש לבחור לפחות חבילת שיעורים אחת ולפחות חבילת שירים אחת"//הודעת שגיאה
    }
    else if (f1 >= 10 && f2 <= 10 || f2 >= 10 && f1 <= 10) {//  אם כבר יש לו חבילות מפעם אבל עכשיו לא בחר כלום
        lbl.textContent = "לא בחרת חבילה"//הודעת שגיאה
    }
    else {//אם נבחרו חבילות משני הסוגים יתבצע מעבר לדף תשלום
        lbl.textContent = ""//הודעת שגיאה ריקה
        window.location = "../html/payment.html"
    }

}

