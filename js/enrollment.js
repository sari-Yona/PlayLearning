
let div = document.getElementById("div")

let input, file
document.body.onload = f_toLoad()//בעת טעינת הדף
document.body.onload = Move()

function f_toLoad() {//פונקצית אתחול
    file = document.createElement("div")//דיב לכל הטופס
    file.setAttribute("id", "enroll")

    input = document.createElement("h1")//יוצר כותרת לטופס
    input.textContent = "הרשמה"//כיתוב
    input.setAttribute("id", "h1Enrollment")
    input.setAttribute("class", "input")
    file.appendChild(input)

    input = document.createElement("input")//תיבת שם משתמש
    input.setAttribute("id", "nameU")
    input.setAttribute("value", sessionStorage.getItem("nameU"))
    input.className = "input"
    input.addEventListener("keypress", f_check_n)//זימון פונקציה
    file.appendChild(input)

    file.appendChild(document.createElement("br"))//שורה רווח
    input = document.createElement("input")//תיבת סיסמא
    input.setAttribute("id", "code")
    input.setAttribute("value", sessionStorage.getItem("code"))
    input.addEventListener("blur", f_check_c)//זימון פונקציה
    input.className = "input"
    file.appendChild(input)

    file.appendChild(document.createElement("br"))//שורה רווח
    input = document.createElement("input")//תיבת מייל
    input.setAttribute("id", "mail")
    input.setAttribute("placeholder", "mail")
    input.addEventListener("keypress", f_check_m2)//זימון פונקציה
    input.addEventListener("blur", f_check_m)//זימון פונקציה
    input.className = "input"
    file.appendChild(input)

    file.appendChild(document.createElement("br"))//שורה רווח

    input = document.createElement("label")
    input.setAttribute("id", "ErrorLbl")//תגית שגיאה
    input.className = "input"
    file.appendChild(input)

    file.appendChild(document.createElement("br"))//שורה רווח
    input = document.createElement("label")//בחירת עיצוב
    input.textContent = "בחר עיצוב מועדף"//כיתוב
    input.setAttribute("class", "input")
    file.appendChild(input)

    file.appendChild(document.createElement("br"))//שורה רווח

    input = document.createElement("div")
    input.setAttribute("id", "divBtnds1")
    input.className = "tooltip"

    let ds = document.createElement("img")//בחירת עיצוב קלאסי
    ds.setAttribute("src", "../pic/classic.PNG")
    ds.setAttribute("id", "Btnds1")
    ds.className = "InChooseDs"
    // input.textContent = "קלאסי"//כיתוב על המקש
    ds.addEventListener("click", f_design)//זימון פונקציה
    input.appendChild(ds)

    ds = document.createElement("span")
    ds.className = "tooltiptext"
    ds.textContent = "קלאסי"
    input.appendChild(ds)
    file.appendChild(input)

    input = document.createElement("div")
    input.setAttribute("id", "divBtnds2")
    input.className = "tooltip"

    ds = document.createElement("img")//בחירת עיצוב מודרני
    ds.setAttribute("src", "../pic/modern.png")
    ds.setAttribute("id", "Btnds2")
    ds.className = "InChooseDs"
    // input.textContent = "מודרני"//כיתוב על המקש
    ds.addEventListener("click", f_design)//זימון פונקציה
    input.appendChild(ds)

    ds = document.createElement("span")
    ds.className = "tooltiptext"
    ds.textContent = "מודרני"
    input.appendChild(ds)
    file.appendChild(input)

    file.appendChild(document.createElement("br"))//שורה רווח
    file.appendChild(document.createElement("br"))//שורה רווח

    input = document.createElement("button")//סיום רישום
    input.setAttribute("id", "BtnFinish")
    input.className = "input"
    input.textContent = "הרשם עכשיו"//כיתוב על המקש
    input.addEventListener("click", f_submit)//זימון פונקציית שליחת הנתונים שהוזנו
    file.appendChild(input)

    div.appendChild(file)//אימוץ כל הנ"ל
}

//**************************פונקציות************************** 

function f_check_n() {//בודק תקינות שם משתמש
    lbl = document.getElementById("ErrorLbl")//תגית שגיאה
    if (!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 1488 && event.keyCode <= 1514) || (event.keyCode == 32))) {
        event.preventDefault()
        lbl.textContent = "שם משתמש יכול להכיל אותיות בלבד"//הודעת שגיאה
    } else {
        lbl.textContent = "  "//הודעת שגיאה ריקה

    }
}

function f_check_c() {//בודק תקינות סיסמא
    let code = document.getElementById("code").value
    let lbl = document.getElementById("ErrorLbl")//תגית שגיאה
    let f1 = false

    for (let i = 0; i < code.length; i++) {
        if (code[i] >= 0 && code[i] <= 9)
            f1 = true
    }
    if (code.length < 7 || f1 == false)
        lbl.textContent = "קוד חייב להכיל מספר וכן חייב להכיל לפחות שבעה תווים"//הודעת שגיאה
    else {
        lbl.textContent = "  "//הודעת שגיאה ריקה
    }
}

function f_check_m() {//1בודק תקינות מייל
    let mail = document.getElementById("mail").value
    let lbl = document.getElementById("ErrorLbl")//תגית שגיאה
    mail = mail.substring(1, mail.length - 1)//חיתוך המקום שצריך לבדוק מתוך כתובת המייל
    //בדיקת תקינות המייל: האם יש שטרודל ונקודה אחריו

    if (!(mail.indexOf('@') != -1 && (mail.indexOf('.', mail.indexOf('@') + 2) != -1)))//אם לא תקין
    {
        mail.focus()//להשאיר פוקוס 
        error.setAttribute("id", "ErrorLbl")//הופך את ההודעה על כתובת מייל שגויה לגלויה ע"י שינוי ID
    }
    else//אם המייל תקין
    {
        error.setAttribute("id", "ErrorLbl")//אם נכון- להסתיר הודעה על שגיאה
    }
}

function f_check_m2() {//בודק תקינות מייל
    let mail = document.getElementById("mail").value////////////////////////////////////////////////////////////////////////////////////////////////////////////////פונקציה חדשה מד אייר
    let lbl = document.getElementById("ErrorLbl")//תגית שגיאה
    //////אם הקלט שהוזן ככתובת מייל לא עונה על התנאים הנ"ל - הוא לא תקין ותופיע הודעה מתאימה                                          
    //               אותיות אנגלית קטנות                            אותיות אנגלית גדולות                            @                         .                           
    if (!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode == "64") || (event.keyCode == 46) || (event.keyCode >= 48 && event.keyCode <= 57))) {//ספרות
        event.preventDefault()
        lbl.textContent = "    .יכולה להכיל אותיות אנגלית, ספרות, אייקון @ ונקודה mail כתובת "//הודעת שגיאה
    }
    else {
        lbl.textContent = "  "//הודעת שגיאה ריקה

    }

}

function f_submit() {//הכנסת הנתונים לאחר בדיקת תקינותם ללוקל סטוריג
    let code = sessionStorage.getItem("code")
    let nameU = sessionStorage.getItem("nameU")
    let mail = document.getElementById("mail").value
    let ds = sessionStorage.getItem("ds")
    let lbl = document.getElementById("ErrorLbl")//תגית שגיאה
    let f1 = false
    let f2 = false
    let i
    for (i = 0; i < mail.length && mail[i] != '@'; i++);
    if (i != mail.length && mail[i] != ".") {
        f1 = true
    }
    for (; i < mail.length && mail[i] != '.'; i++);
    if (i != mail.length) {
        f2 = true
    }

    if (f1 == false || f2 == false) {
        document.getElementById("mail").focus()
        lbl.textContent = "הכנס כתובת מייל תקינה"//הודעת שגיאה
    }
    else {
        lbl.textContent = "  "// הודעת שגיאה ריקה
        let user = code + "_" + nameU + "_" + mail + "_" + ds + "_" + 0 + "_" + 0 + "_" + 0 + "_" + 0 + "_" + 0 + "_" + 0 + "_" + 0
        sessionStorage.setItem("index", localStorage.length)
        localStorage.setItem("user" + localStorage.length, user)
        sessionStorage.setItem("code", code)
        sessionStorage.setItem("nameU", nameU)
        //יצירת פרוגרס בר
        let div = document.getElementById("enroll")

        let p = document.createElement("div")
        p.setAttribute("id", "Progress")

        let b = document.createElement("div")
        b.setAttribute("id", "Bar")
        p.appendChild(b)

        div.appendChild(document.createElement("br"))//שורה רווח
        div.appendChild(document.createElement("br"))//שורה רווח
        div.appendChild(document.createElement("br"))//שורה רווח

        div.appendChild(p)

        pBar()
        setTimeout(f_toShopping, 2800)

    }
}

function f_design() {// בחירת סגנון עיצוב אחת בלבד
    let x = event.srcElement.id
    if (x == "Btnds1") {//אופציה א' נבחרת ומודגשת
        sessionStorage.setItem("ds", "1")
        document.getElementById("Btnds1").className = "chooseDs"
        document.getElementById("Btnds2").className = "InChooseDs"
    }
    if (x == "Btnds2") {//אופציה ב' נבחרת ומודגשת
        sessionStorage.setItem("ds", "2")
        document.getElementById("Btnds2").className = "chooseDs"
        document.getElementById("Btnds1").className = "InChooseDs"
    }

}

function Move() {//פונקציית תזוזת החלונית של מילוי הפרטים כלפי מטה
    let elem = document.getElementById("enroll");
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 100) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
        }
    }
}

function pBar() {//פונקצית תכונות ועיצוב ה"פס התכלת" לאחר תום מילוי הפרטים ועיבוד הנתונים
    let elem = document.getElementById("Bar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width += 0.5;
            elem.style.width = width + '%';
        }
    }
}

function f_toShopping() {//פונקציית מעבר לדף רכישות
    window.location = "../html/shopping.html"
}