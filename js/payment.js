let div = document.getElementById("div")
let pay, details
let sum = 0
let ifPay = false

document.body.onload = f_toLoad()//בעת טעינת הדף

function f_toLoad() {//פונקצית אתחול דף
    pay = document.createElement("div")//דיב לכל הדף

    pay.appendChild(document.createElement("br"))//שורה רווח
    details = document.createElement("button")// יצירת מקש חזרה לרכישות 
    details.setAttribute("id", "BtnFinish")

    details.textContent = "Buy More "//כיתוב על המקש
    details.addEventListener("click", f_sopping)
    pay.appendChild(details)

    pay.appendChild(document.createElement("br"))//שורה רווח

    let bigDiv = document.createElement("div")
    bigDiv.setAttribute("id", "bigDiv")


    let div1 = document.createElement("div")
    div1.setAttribute("id", "div1")

    details = document.createElement("h1")//יצירת כותרת החבילות שנבחרו 
    details.textContent = " החבילות שבחרת"//כיתוב  
    details.setAttribute("class", "input")
    pay.appendChild(details)
    let s = localStorage.getItem("user" + sessionStorage.getItem("index"))


    details = document.createElement("h1")//יצירת כותרת חבילות השיעורים שנבחרו 
    details.textContent = "חבילות שיעורים"//כיתוב  
    details.setAttribute("class", "input")
    div1.appendChild(details)
    let count = 0
    for (let index = 0; index < packages.length; index++) {// ריצה על החבילות ממערך חבילות והצגת חבילות השיעורים שהמשתמש רכש עכשיו
        if (s.split("_")[packages[index]["id"]] == "1") {
            details = document.createElement("label")
            details.textContent = packages[index]["name"]
            details.setAttribute("class", "input")
            div1.appendChild(details)
            sum += packages[index]["price"]//הוספת מחיר החבילה לסכום הכולל
            div1.appendChild(document.createElement("br"))//שורה רווח
        }
        else
            count++
    }
    if (count == 3) {
        details = document.createElement("label")
        details.textContent = "לא רכשת חבילות"
        details.setAttribute("class", "input")
        div1.appendChild(details)
    }

    bigDiv.appendChild(div1)

    div2 = document.createElement("div")
    div2.setAttribute("id", "div2")

    details = document.createElement("h1")//יצירת כותרת החבילות שנבחרו 
    details.textContent = "חבילות שירים"//כיתוב  
    details.setAttribute("class", "input")
    div2.appendChild(details)
    count = 0
    for (let index = 0; index < typeSongs.length; index++) {//ריצה על החבילות ממערך השירים והצגת חבילות השירים שהמשתמש רכש
        if (s.split("_")[typeSongs[index]["id"]] == "1") {
            details = document.createElement("label")//
            details.textContent = typeSongs[index]["name"]
            details.setAttribute("class", "input")
            div2.appendChild(details)
            div2.appendChild(document.createElement("br"))//שורה רווח
            sum += typeSongs[index]["price"]//הוספת מחיר החבילה לסכום הכולל
        }
        else
            count++
    }
    if (count == 3) {
        details = document.createElement("label")
        details.textContent = "לא רכשת חבילות"
        details.setAttribute("class", "input")
        div2.appendChild(details)
    }

    bigDiv.appendChild(div2)

    pay.appendChild(bigDiv)

    details = document.createElement("h2")//יצירת כותרת סה"כ לתשלום
    details.textContent = "סך הכל לתשלום"//כיתוב  
    details.setAttribute("class", "input")
    pay.appendChild(details)

    details = document.createElement("label")//הסכום הכולל(בדולרים)
    details.textContent = sum + " $ "
    details.setAttribute("class", "pay")
    pay.appendChild(details)
    pay.appendChild(document.createElement("br"))//שורה רווח

    details = document.createElement("img")//תמונות של אופני תשלום
    details.setAttribute("src", "../pic/pay.png")
    details.setAttribute("width", "250px")
    details.setAttribute("height", "50px")
    details.setAttribute("class", "payment")
    details.addEventListener("click", f_pay)//בעת הלחיצה יופיעו תיבות למילוי פרטי התשלום
    pay.appendChild(details)
    pay.appendChild(document.createElement("br"))//שורה רווח

    details = document.createElement("label")
    details.setAttribute("id", "ErrorLbl")//תגית שגיאה
    details.className = "input"
    pay.appendChild(details)
    details = document.createElement("label")
    details.setAttribute("id", "ErrorLbl2")//תגית שגיאה2
    details.className = "input"
    pay.appendChild(details)
    details = document.createElement("label")// תגית שגיאות מספר 3
    details.setAttribute("id", "ErrorLbl3")//תגית שגיאה3
    details.className = "input"
    pay.appendChild(details)

    div.appendChild(pay)
}

//**************************פונקציות************************** 
function f_sopping() {//מעבר לדף רכישות
    window.location = "../html/shopping.html"
}

function f_pay() {//הכנסת פרטי תשלום
    if (ifPay == false) {//הפונקציה תופעל רק בפעם הראשונה שהמשתמש נכנס לתשלום

        pay = document.createElement("div")

        pay.appendChild(document.createElement("br"))//שורה רווח
        details = document.createElement("input")//הכנסת מספר אשראי
        details.setAttribute("id", "cerdit")
        details.setAttribute("placeholder", "הכנס פרטי אשראי")
        details.setAttribute("type", "password")
        details.className = "cc"
        details.addEventListener("keypress", f_check_onlyNum1)
        details.addEventListener("keypress", f_check_16nums)
        pay.appendChild(details)


        pay.appendChild(document.createElement("br"))//שורה רווח
        details = document.createElement("input")//הכנסת שלוש ספרות קוד האשראי
        details.setAttribute("id", "cvc")
        details.setAttribute("placeholder", "cvc")
        details.setAttribute("type", "password")
        details.className = "cc"
        details.addEventListener("keypress", f_check_onlyNum2)
        details.addEventListener("keypress", f_check_3nums)
        pay.appendChild(details)

        pay.appendChild(document.createElement("br"))//שורה רווח
        details = document.createElement("input")//הכנסת תוקף האשראי
        details.setAttribute("id", "date")
        details.setAttribute("placeholder", "cvc")
        details.setAttribute("type", "date")
        details.className = "cc"
        //details.addEventListener("click", f_check_date)
        pay.appendChild(details)

        pay.appendChild(document.createElement("br"))//שורה רווח
        details = document.createElement("button")//סיום תשלום ומעבר לדף בית אישי + בדיקה שכל הפרטים הוכנסו
        details.setAttribute("id", "BtnFinish")
        details.textContent = "לאישור"
        details.addEventListener("click", f_full)//יצירת ארוע 
        pay.appendChild(details)

        div.appendChild(pay)
        ifPay = true//הפונקציה תופעל רק בפעם הראשונה שהמשתמש לוחץ על התשלום
    }
}

function f_check_onlyNum1() {//בדיקת תקינות מספר אשראי
    let cerdit = document.getElementById("cerdit").value
    let lbl = document.getElementById("ErrorLbl")//תגית שגיאה
    if ((event.keyCode < 48) || (event.keyCode > 57)) {
        event.preventDefault()
        lbl.textContent = "   שדה זה חייב להכיל ספרות בלבד! ובנוסף     "//הודעת שגיאה
    }

    else {
        lbl.textContent = "  "//הודעת שגיאה ריקה

    }
}

function f_check_onlyNum2() {//בדיקת תקינות קוד אשראי
    let cvc = document.getElementById("cvc").value
    let lbl = document.getElementById("ErrorLbl")//תגית שגיאה
    if ((event.keyCode < 48) || (event.keyCode > 57) && cvc.length < 3) {
        event.preventDefault()
        lbl.textContent = "   !שדה זה חייב להכיל ספרות בלבד      "//הודעת שגיאה
    }

    else {
        lbl.textContent = "  "//הודעת שגיאה ריקה

    }
}

function f_check_16nums() {//בדיקת תקינות מספר אשראי
    let cerdit = document.getElementById("cerdit").value
    let lbl = document.getElementById("ErrorLbl2")//תגית שגיאה2
    if (cerdit.length < 15) {
        lbl.textContent = " עליך להזין עוד " + (16 - cerdit.length - 1) + " ספרות "//הודעת שגיאה
    }
    if (cerdit.length == 15) {
        lbl.textContent = "  "//הודעת שגיאה ריקה

    }

    else if (cerdit.length > 15) {
        event.preventDefault()
        lbl.textContent = "  "//הודעת שגיאה ריקה
    }
}

function f_check_3nums() {//בדיקת תקינות 3 הספרות של מספר אשראי
    let cvc = document.getElementById("cvc").value
    let lbl = document.getElementById("ErrorLbl3")//תגית שגיאה3
    if (cvc.length < 2) {
        lbl.textContent = " עליך להזין עוד " + (3 - cvc.length - 1) + " ספרות "//הודעת שגיאה
    }
    if (cvc.length == 2) {
        lbl.textContent = "  "//הודעת שגיאה ריקה

    }
    else if (cvc.length > 2) {
        lbl.textContent = "  "//הודעת שגיאה ריקה
        event.preventDefault()
    }
}

function f_full() {//בדיקה שכל השדות מלאים
    let cerdit = document.getElementById("cerdit").value
    let cvc = document.getElementById("cvc").value
    let date = document.getElementById("date").value
    let lbl = document.getElementById("ErrorLbl")//תגית שגיאה
    if ((cerdit == "null") || (cvc == "null") || (date == null)) {//במקרה שאחד או יותר מהשדות ריקים תופיע הודעה על כך
        lbl.textContent = "יש למלא את כל השדות"//הודעת שגיאה
    }
    if (cerdit.length < 15) {
        document.getElementById("cerdit").focus()/////////////////////////////////////////////////////////////////////////////////////////////////////// למה זה לא עובד ונותן לעבור שלב גם אם לא הוכנסו פרטי אשראי
    }
    if (cvc.length < 2) {
        document.getElementById("cvc").focus()
    }/////////////////////////////////////////////////////////////////////////////////////////////////////////למה זה לא עובד

    else {//פעולות לאחר שהשדות מלאים
        lbl.textContent = " "//הודעת שגיאה
        let s = localStorage.getItem("user" + sessionStorage.getItem("index"))
        let n = ""
        for (let i = 0; i < s.split("_").length; i++) {//הפיכת הקוד למשולם
            if (s.split("_")[i] == "1") {
                if (i == s.split("_").length - 1)
                    n += "2"
                else
                    n += "2" + "_"
            }
            else {
                if (i == s.split("_").length - 1)
                    n += s.split("_")[i]
                else
                    n += s.split("_")[i] + "_"
            }
        }
        localStorage.setItem("user" + sessionStorage.getItem("index"), n)
    }
    window.location = "../html/home.html"

}



