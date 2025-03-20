let div = document.getElementById("div")


let logIn, input
document.body.onload = f_toLoad()//בעת טעינת הדף

function f_toLoad() {//פונקצית אתחול דף
    logIn = document.createElement("div")//דיב לכל הלוג אין

    input = document.createElement("h1")//יוצר כותרת להתחברות
    input.textContent = "Log In"//כיתוב  
    input.setAttribute("class", "input")
    logIn.appendChild(input)

    input = document.createElement("input")//תיבת שם משתמש
    input.setAttribute("id", "nameU")
    input.setAttribute("placeholder", "שם משתמש")//כיתוב בהיר שנעלם בעת לחיצה
    input.className = "input"
    input.addEventListener("keypress", f_check_n)//זימון פונקציה
    logIn.appendChild(input)

    logIn.appendChild(document.createElement("br"))//תיבת סיסמא
    input = document.createElement("input")
    input.setAttribute("id", "code")
    input.setAttribute("placeholder", "סיסמא")//כיתוב בהיר שנעלם בעת לחיצה
    input.addEventListener("blur", f_check_code7)//זימון פונקציה
    input.addEventListener("blur", f_check_numInCode)//זימון פונקציה
    input.className = "input"
    logIn.appendChild(input)

    logIn.appendChild(document.createElement("br"))//שורה רווח

    input = document.createElement("label")
    input.setAttribute("id", "ErrorLbl")//תגית שגיאה
    input.className = "input"
    logIn.appendChild(input)
    input = document.createElement("label")
    input.setAttribute("id", "ErrorLbl2")//2תגית שגיאה
    input.className = "input"
    logIn.appendChild(input)

    logIn.appendChild(document.createElement("br"))//שורה רווח

    input = document.createElement("button")//יצירת כפתור הכניסה
    input.setAttribute("id", "BtnFinish")
    input.className = "input"
    input.textContent = "להתחברות"//כיתוב על המקש
    input.addEventListener("click", f_enterace)//זימון פונקציה בעת לחיצה על כפתור הכניסה
    logIn.appendChild(input)

    div.appendChild(logIn)//אימוץ כל הנ"ל

    /////////////אורגנית

    //הגדרת משתנים של צלילי האורגנית
    let Ado = document.getElementById("c0")
    let Are = document.getElementById("d0")
    let Ami = document.getElementById("e0")
    let Afa = document.getElementById("f0")
    let Asol = document.getElementById("g0")
    let Ala = document.getElementById("a0")
    let Aci = document.getElementById("b0")

    let Ado1 = document.getElementById("c1")
    let Are1 = document.getElementById("d1")
    let Ami1 = document.getElementById("e1")
    let Afa1 = document.getElementById("f1")
    let Asol1 = document.getElementById("g1")
    let Ala1 = document.getElementById("a1")
    let Aci1 = document.getElementById("b1")


    ///יצירת לחצני האורגנית
    let organ = document.getElementById("tavim")
    let s1 = ["c0c", "d0d", "e0e", "f0f", "g0g", "a0a", "b0b", "c1c", "d1d", "e1e", "f1f", "g1g", "a1a", "b1b"]//מערך כל תווים

    for (let index = 0; index < s1.length; index++) {
        header = document.createElement("button")//ci2
        header.setAttribute("id", s1[index])
        header.addEventListener("mousedown", f_play)//זימון פונקציה בעת לחיצה על העכבר
        header.addEventListener("mouseup", f_stop)//זימון פונקציה בעת שחרור לחיצה על העכבר
        header.addEventListener("touchstart", f_play)//זימון פונקציה בעת לחיצה על המסך
        header.addEventListener("touchend", f_stop)//זימון פונקציה בעת שחרור לחיצה על המסך
        header.className = "tav"
        header.textContent = "      "
        organ.appendChild(header)

    }
}
//**************************פונקציות************************** 

function f_check_n() {//בודק תקינות שם משתמש תוך כדי ההקלדה
    lbl = document.getElementById("ErrorLbl")//תגית שגיאה
    if (!((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 1488 && event.keyCode <= 1514) || (event.keyCode == 32))) {
        event.preventDefault()
        lbl.textContent = "שם משתמש יכול להכיל אותיות בלבד"//הודעת שגיאה
    } else {
        lbl.textContent = "  "//הודעת שגיאה ריקה

    }
}

function f_check_numInCode() {// בודק תקינות סיסמא -שתכיל לפחות ספרה אחת
    let code = document.getElementById("code").value
    lbl = document.getElementById("ErrorLbl2")//תגית שגיאה2
    let f1 = false
    for (let i = 0; i < code.length; i++) {//פור העובר על הסיסמא ובודק אם קיימת בה לפחות ספרה אחת
        if (code[i] >= 0 && code[i] <= 9)
            f1 = true
    }
    if (f1 == false) {
        document.getElementById("code").focus()
        lbl.textContent = "סיסמא חייבת להכיל ספרה"//הודעת שגיאה
        logIn.appendChild(document.createElement("br"))

    }
    else {
        lbl.textContent = "  "//הודעת שגיאה ריקה
    }
}

function f_check_code7() {//בודק תקינות אורך סיסמא
    let code = document.getElementById("code").value
    lbl = document.getElementById("ErrorLbl")//תגית שגיאות
    if (code.length < 7) {//בדיקה אם הסיסמא מכילה 7 תווים לפחות
        document.getElementById("code").focus()
        logIn.appendChild(document.createElement("br"))
        lbl.textContent = " סיסמא חייבת להכיל לפחות שבעה תווים    "//הודעת שגיאה
        logIn.appendChild(document.createElement("br"))

    }
    else {
        lbl.textContent = "  "//הודעת שגיאה ריקה
    }
}

function f_enterace() {//פעולות לאחר הכנסת שם וסיסמא
    let nameU = document.getElementById("nameU").value
    let code = document.getElementById("code").value
    let lbl = document.getElementById("ErrorLbl")//תגית שגיאה

    if (code == null || nameU == null) {//במקרה שאחד או יותר מהשדות ריקים תופיע הודעה על כך
        lbl.textContent = "יש למלא את כל השדות"//הודעת שגיאה
    }
    if (code.length < 7) {//במקרה שאורך הסיסמא קטן מ7, המשתמש לא יוכל להמשיך להתחברות
        document.getElementById("code").focus()
    }
    let f1 = false
    for (let i = 0; i < code.length; i++) {
        if (code[i] >= 0 && code[i] <= 9)
            f1 = true
    }
    if (f1 == false) {
        document.getElementById("code").focus()
    }
    else {//פעולות לאחר שהשדות שם וסיסמא מלאים ותקינים : בדיקה האם המשתמש כבר קיים במערכת
        lbl.textContent = " "//הודעת שגיאה ריקה
        let x = -1, i
        for (i = 0; i < localStorage.length; i++) {
            if (localStorage.getItem("user" + i).split("_")[0] == code) {
                x = i
            }
        }

        if (x == -1) {//אם המשתמש עוד לא קיים במערכת הפרטים שהכניס נשמרים בסישן סטורג ועוברים לדף הרשמה
            sessionStorage.setItem("nameU", nameU)
            sessionStorage.setItem("code", code)
            sessionStorage.setItem("index", localStorage.length)
            window.location = "../html/enrollment.html"
            sessionStorage.setItem("ds", 1)
            sessionStorage.setItem("thisong", null)
            sessionStorage.setItem("v", 0)
            sessionStorage.setItem("x", 0)
            sessionStorage.setItem("typSong", null)
            sessionStorage.setItem("i", 0)
            sessionStorage.setItem("pkg", null)
            sessionStorage.setItem("song", null)
        }
        else { //אם המשתמש  קיים במערכת הפרטים שהכניס נשמרים בסישן סטוריג והוא מועבר לדף הבית האישי שלו 
            sessionStorage.setItem("index", x)
            sessionStorage.setItem("nameU", nameU)
            sessionStorage.setItem("code", code)
            sessionStorage.setItem("ds", localStorage.getItem("user" + x,).split("_")[3])
            window.location = "../html/home.html"


        }
    }
}

function f_play() {//שיוך פונקציה המפעילה את צליל התו בעת הלחיצה לתו הנלחץ


    document.getElementById(event.srcElement.id.substring(0, 2)).play()



}

function f_stop() {//שיוך פונקציה המפסיקה את צליל התו בשחרור הלחיצה לתו הנלחץ

    document.getElementById(event.srcElement.id.substring(0, 2)).pause()
    document.getElementById(event.srcElement.id.substring(0, 2)).currentTime = 0
}