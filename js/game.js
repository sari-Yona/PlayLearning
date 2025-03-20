let div = document.getElementById("div")

sessionStorage.setItem("i", 0)
sessionStorage.setItem("x", 0)
sessionStorage.setItem("v", 0)

document.body.onload = f_toLoad()//f_toLoad - בעת טעינת הדף תזומן הפונקציה 

function f_toLoad() {//פונקצית אתחול דף המשחק
    titleGame=document.getElementById("titleGame")
    if (sessionStorage.getItem("pkg") == 4)
        titleGame.textContent = "Learn By Listen"
    else if (sessionStorage.getItem("pkg") == 5)
        titleGame.textContent = "Learn By Colors"
    else
    titleGame.textContent = "Learn By Notes"
    
    let div = document.getElementById("div")
    div.innerHTML = ""//פעולת ריקון הדיב
    let divHeader = document.createElement("div")
    let header = document.createElement("h1")//כותרת- נושא השיעור
    let type//במשתנה זה יוצב הערך המתאים בהתאם לסוג השיעור שהמשתמש בחר
    if (sessionStorage.getItem("pkg") == 4)
        type = "שמיעה"
    else if (sessionStorage.getItem("pkg") == 5)
        type = "צבעים"
    else
        type = "תווים"

    header.textContent = "לימוד נגינה מקצועי לפי " + type //כיתוב סוג השיעור
    divHeader.appendChild(header)

    header = document.createElement("h1")//כותרת- שם השיר הנוכחי
    let s//במשתנה זה יוצב הערך המתאים בהתאם לשיר שהמשתמש בחר
    for (let index = 0; index < songs.length; index++) {
        if (songs[index]["id"] == sessionStorage.getItem("song"))
            s = songs[index]["name"]
    }
    header.textContent = s//כיתוב שם השיר
    divHeader.appendChild(header)

    header = document.createElement("label")//תגית הקוראת להתנסות במשחק שתתמלא עם לחיצה על שלב 2
    header.setAttribute("id", "tryIt")
    divHeader.appendChild(header)

    divHeader.appendChild(document.createElement("br"))//שורה רווח

    if (sessionStorage.getItem("pkg") == 4) {//הגדרת מקשים למשחק לפי שמיעה
        let d = document.createElement("div")
        d.setAttribute("id", "divBtnsListen")

        header = document.createElement("button")//1  כפתור שלב 
        header.setAttribute("id", "level1")
        header.className = "levels"
        header.textContent = "know me"//כיתוב על המקש
        header.addEventListener("click", f_shalav1)//פונקציה המופעלת בלחיצה על מקש שלב 1
        d.appendChild(header)
        d.appendChild(document.createElement("br"))//שורה רווח

        header = document.createElement("button")//2 כפתור שלב 
        header.setAttribute("id", "level2")
        header.className = "levels"
        header.textContent = "try me"//כיתוב על המקש
        header.addEventListener("click", f_shalav2)//פונקציה המופעלת בלחיצה על מקש שלב 2
        d.appendChild(header)
        d.appendChild(document.createElement("br"))//שורה רווח

        header = document.createElement("button")//3 כפתור שלב 
        header.setAttribute("id", "level3")
        header.className = "levels"
        header.textContent = "let's play"//כיתוב על המקש
        header.addEventListener("click", f_level3)//פונקציה המופעלת בלחיצה על מקש שלב 3
        d.appendChild(header)
        d.appendChild(document.createElement("br"))//שורה רווח
        d.appendChild(document.createElement("br"))//שורה רווח
        d.appendChild(document.createElement("br"))//שורה רווח
        divHeader.appendChild(d)
    }
    else {//הגדרת מקשים למשחק לפי צבעים ותווים
        let d1 = document.createElement("div")
        d1.setAttribute("id", "divPosition")

        let d = document.createElement("div")
        d.setAttribute("id", "divBtns")

        header = document.createElement("button")//1  כפתור שלב 
        header.setAttribute("id", "level1")
        header.className = "levels"
        header.textContent = "know me"//כיתוב על המקש
        header.addEventListener("click", f_shalav1)//פונקציה המופעלת בלחיצה על מקש שלב 1
        d.appendChild(header)
        d.appendChild(document.createElement("br"))//שורה רווח

        header = document.createElement("button")//2 כפתור שלב 
        header.setAttribute("id", "level2")
        header.className = "levels"
        header.textContent = "try me"//כיתוב על המקש
        header.addEventListener("click", f_shalav2)//פונקציה המופעלת בלחיצה על מקש שלב 2
        d.appendChild(header)
        d.appendChild(document.createElement("br"))//שורה רווח

        header = document.createElement("button")//3 כפתור שלב 
        header.setAttribute("id", "level3")
        header.className = "levels"
        header.textContent = "let's play"//כיתוב על המקש
        header.addEventListener("click", f_level3)//פונקציה המופעלת בלחיצה על מקש שלב 3
        d.appendChild(header)
        d.appendChild(document.createElement("br"))//שורה רווח

        d1.appendChild(d)
        if (sessionStorage.getItem("pkg") == 5) {//הוספת מערך הצבעים למשחק של נגינה לפי צבעים
            header = document.createElement("img")
            header.setAttribute("src", "../pic/colors/c" + sessionStorage.getItem("song") + ".png")//התמונה של השיר הנוכחי
            header.setAttribute("id", "pil")
            d1.appendChild(header)

            divHeader.appendChild(d1)
        }

        else { //הוספת מערך התווים למשחק של נגינה לפי תווים

            header = document.createElement("img")
            header.setAttribute("src", "../pic/notes/n" + sessionStorage.getItem("song") + ".png")//התמונה של השיר הנוכחי
            header.setAttribute("id", "pil")
            d1.appendChild(header)

            divHeader.appendChild(d1)
        }
    }
    let organ = document.createElement("div")
    organ.setAttribute("id", "organ")

    let tavim = document.createElement("div")
    tavim.setAttribute("id", "tavim")


    ///יצירת לחצני האורגנית
    let s1 = ["c0c", "d0d", "e0e", "f0f", "g0g", "a0a", "b0b", "c1c", "d1d", "e1e", "f1f", "g1g", "a1a", "b1b"]//מערך כל תווים

    for (let index = 0; index < s1.length; index++) {
        header = document.createElement("button")
        header.setAttribute("id", s1[index])
        header.addEventListener("mousedown", f_play)//זימון פונקציה בעת לחיצה על העכבר
        header.addEventListener("mouseup", f_stop)//זימון פונקציה בעת שחרור לחיצה על העכבר
        header.addEventListener("touchstart", f_play)//זימון פונקציה בעת לחיצה על המסך
        header.addEventListener("touchend", f_stop)//זימון פונקציה בעת שחרור לחיצה על המסך
        header.className = "tav"
        header.textContent = "      "
        tavim.appendChild(header)
    }
    organ.appendChild(tavim)

    let pic = document.createElement("img")//תמונת האורגנית
    pic.setAttribute("src", "../pic/organ.png")
    pic.setAttribute("id", "imgOrgan")

    organ.appendChild(pic)

    divHeader.appendChild(organ)

    divHeader.appendChild(document.createElement("br"))//שורה רווח

    header = document.createElement("button")//כפתור חזרה לבית  
    header.setAttribute("id", "BtnFinish")
    header.textContent = "לדף הבית "//כיתוב על המקש
    header.addEventListener("click", f_home)//פונקציה שתחזיר לדף הבית
    divHeader.appendChild(header)

    //הגדרת משתנים של צלילי האורגנית
    //----I אוקטבה
    let Ado = document.getElementById("c0")
    let Are = document.getElementById("d0")
    let Ami = document.getElementById("e0")
    let Afa = document.getElementById("f0")
    let Asol = document.getElementById("g0")
    let Ala = document.getElementById("a0")
    let Aci = document.getElementById("b0")

    //----II אוקטבה
    let Ado1 = document.getElementById("c1")
    let Are1 = document.getElementById("d1")
    let Ami1 = document.getElementById("e1")
    let Afa1 = document.getElementById("f1")
    let Asol1 = document.getElementById("g1")
    let Ala1 = document.getElementById("a1")
    let Aci1 = document.getElementById("b1")

    divHeader.appendChild(header)

    div.appendChild(divHeader)
}


function f_toLoad2() {//LET'S PLAY -פונקצית אתחול דף החל משלב 
    let divHeader = document.createElement("div")
    div.innerHTML = ""//פעולת ריקון הדיב

    let header = document.createElement("h1")//כותרת- נושא השיעור

    let type
    if (sessionStorage.getItem("pkg") == 4)
        type = "שמיעה"
    else if (sessionStorage.getItem("pkg") == 5)
        type = "צבעים"
    else
        type = "תווים"

    header.textContent = "לימוד נגינה מקצועי לפי " + type //כיתוב 
    divHeader.appendChild(header)

    header = document.createElement("h1")//כותרת- שם השיר הנוכחי
    let s
    for (let index = 0; index < songs.length; index++) {
        if (songs[index]["id"] == sessionStorage.getItem("song"))
            s = songs[index]["name"]
    }
    header.textContent = s
    divHeader.appendChild(header)

    let thisong
    for (let index = 0; index < songs.length; index++) {
        if (songs[index]["id"] == sessionStorage.getItem("song"))
            thisong = songs[index]["tavim"]
    }
    sessionStorage.setItem("thisong", thisong)

    let organ = document.createElement("div")
    organ.setAttribute("id", "organ")

    let tavim = document.createElement("div")
    tavim.setAttribute("id", "tavim")

    if (sessionStorage.getItem("pkg") == 4) {
        divHeader.appendChild(document.createElement("br"))//שורה רווח
        divHeader.appendChild(document.createElement("br"))//שורה רווח
        divHeader.appendChild(document.createElement("br"))//שורה רווח
        divHeader.appendChild(document.createElement("br"))//שורה רווח
        divHeader.appendChild(document.createElement("br"))//שורה רווח
    }

    if (sessionStorage.getItem("pkg") == 5) {//הוספת מערך הצבעים למשחק של נגינה לפי צבעים
        header = document.createElement("img")
        header.setAttribute("src", "../pic/colors/c" + sessionStorage.getItem("song") + ".png")
        header.setAttribute("id", "pil")
        divHeader.appendChild(header)
    }
    if (sessionStorage.getItem("pkg") == 6) { //הוספת מערך התווים למשחק של נגינה לפי תווים
        header = document.createElement("img")
        header.setAttribute("src", "../pic/notes/n" + sessionStorage.getItem("song") + ".png")
        divHeader.appendChild(header)
    }
    divHeader.appendChild(document.createElement("br"))//שורה רווח
    divHeader.appendChild(document.createElement("br"))//שורה רווח


    ///יצירת לחצני האורגנית
    let s1 = ["c0c", "d0d", "e0e", "f0f", "g0g", "a0a", "b0b", "c1c", "d1d", "e1e", "f1f", "g1g", "a1a", "b1b"]//מערך כל תווים

    for (let index = 0; index < s1.length; index++) {
        header = document.createElement("button")
        header.setAttribute("id", s1[index])
        header.addEventListener("mousedown", f_check)//זימון פונקציה בעת לחיצה על העכבר
        header.addEventListener("mouseup", f_stop)//זימון פונקציה בעת שחרור לחיצה על העכבר
        header.addEventListener("touchstart", f_check)//זימון פונקציה בעת לחיצה על המסך
        header.addEventListener("touchend", f_stop)//זימון פונקציה בעת שחרור לחיצה על המסך
        header.className = "tav"
        header.textContent = "      "
        tavim.appendChild(header)
    }
    organ.appendChild(tavim)//תמונת האורגנית
    let pic = document.createElement("img")
    pic.setAttribute("src", "../pic/organ.png")
    pic.setAttribute("id", "imgOrgan")

    organ.appendChild(pic)

    divHeader.appendChild(organ)

    if (sessionStorage.getItem("pkg") == 5) {//הוספת שורת הצבעים בתחתית האורגנית למשחק של נגינה לפי צבעים
        header = document.createElement("img")
        header.setAttribute("src", "../pic/colors/fix2.png")
        divHeader.appendChild(header)
    }

    divHeader.appendChild(document.createElement("br"))//שורה רווח

    header = document.createElement("label")//יצירת תגית
    header.setAttribute("id", "true")
    header.className = "input" + sessionStorage.getItem("ds")
    header.textContent = " יש לך " + sessionStorage.getItem("v") + " הצלחות "//מעדכן כמה הצלחות היו למשתמש עד כה 
    divHeader.appendChild(header)

    divHeader.appendChild(document.createElement("br"))//שורה רווח


    header = document.createElement("label")
    header.setAttribute("id", "false")
    header.className = "input" + sessionStorage.getItem("ds")
    header.textContent = " יש לך " + sessionStorage.getItem("x") + " כשלונות "//מעדכן כמה טעויות היו למשתמש עד כה 
    divHeader.appendChild(header)

    divHeader.appendChild(document.createElement("br"))//שורה רווח

    header = document.createElement("button")//כפתור חזרה לבית  
    header.setAttribute("id", "BtnFinish")
    header.textContent = "לדף הבית "//כיתוב על המקש
    header.addEventListener("click", f_home)//פונקציה שתחזיר לדף הבית
    divHeader.appendChild(header)

    //הגדרת משתנים של לחצני האורגנית

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


    divHeader.appendChild(header)


    div.appendChild(divHeader)//אימוץ כל הנ"ל



}
//**************************פונקציות************************** 

function f_home() {//פונקציה שתחזיר לדף הבית
    window.location = "../html/home.html"
}

function f_error() {//err העיצוב שיעוצב לקליד שלחיצה עליו הייתה מוטעית יהיה קלאס
    event.srcElement.className = "err"
}

function f_check() {//פונקציה המופעלת בלחיצה על כל קליד לבדוק האם הלחיצה תקינה או מוטעית
    let i = parseInt(sessionStorage.getItem("i"))
    let thisong = sessionStorage.getItem("thisong")

    if (event.srcElement.id.substring(0, 2) == thisong.split(",")[i]) {
        i = i + 1
        sessionStorage.setItem("i", i)
        let v = parseInt(sessionStorage.getItem("v"))
        v = v + 1
        sessionStorage.setItem("v", v)
        f_toLoad2()
        document.getElementById(event.srcElement.id).style.opacity = "50%"
        document.getElementById(event.srcElement.id).style.backgroundColor = " rgb(49, 203, 80)"//צביעת המקש בירוק
        f_play()
        if (i == thisong.split(",").length)
            setTimeout(f_finish, 2000)
    }
    else {
        f_error()
        let x = parseInt(sessionStorage.getItem("x"))
        x = x + 1
        sessionStorage.setItem("x", x)
        f_toLoad2()
        document.getElementById(event.srcElement.id).style.opacity = "50%"
        document.getElementById(event.srcElement.id).style.backgroundColor = " rgb(255, 0, 0)"//צביעת המקש באדום

    }


}




function f_play() {//שיוך פונקציה המפעילה את צליל התו בעת הלחיצה לתו הנלחץ
    document.getElementById(event.srcElement.id.substring(0, 2)).play()
}

function f_stop() {//שיוך פונקציה המפסיקה את צליל התו בשחרור הלחיצה לתו הנלחץ
    document.getElementById(event.srcElement.id.substring(0, 2)).pause()
    document.getElementById(event.srcElement.id.substring(0, 2)).currentTime = 0

}

function f_finish()//////סיום משחק
{

    //חישוב אחוזי ההצלחה של המשתמש
    let x = parseInt(sessionStorage.getItem("x"))
    let v = parseInt(sessionStorage.getItem("v"))
    let sum = 100 * (v / (x + v))
    sum = parseInt(sum)


    let div = document.getElementById("div")
    div.className = "divW"
    let win, win2, divwin

    divwin = document.createElement("div")
    divwin.setAttribute("id", "divwin")
    div.innerHTML = ""
    win = document.createElement("h1")//כותרת המודיעה על סיום המשחק
    win.setAttribute("class", "winTitle")
    win.textContent = "!סיימת בהצלחה"
    divwin.appendChild(win)

    win = document.createElement("h3")/////אחוז הצלחה
    win.textContent = "אחוזי הצלחה: " + sum + "%"
    win.setAttribute("class", "winTitle")
    divwin.appendChild(win)

    win = document.createElement("button")//  כפתור חזרה לבית  
    win.setAttribute("id", "BtnFinish")
    win.textContent = "לדף הבית "//כיתוב על המקש
    win.addEventListener("click", f_home)//פונקציה שתחזיר לדף הבית
    divwin.appendChild(win)


    win = document.createElement("button")
    win.setAttribute("id", "BtnFinish")
    win.textContent = "שחק שוב"//כיתוב על המקש
    win.addEventListener("click", f_toLoad)//פונקציה שתחזיר לדף הבית
    divwin.appendChild(win)
    for (let index = 0; index < 28; index++) {
        divwin.appendChild(document.createElement("br"))
    }

    div.appendChild(divwin)

    sessionStorage.setItem("i", 0)
    sessionStorage.setItem("x", 0)
    sessionStorage.setItem("v", 0)

    //שמע
    win = document.getElementById("win").play()
    setTimeout(f_stopwin, 9000)

}

function f_stopwin() {////פונקציה לעצירת מנגינת ההצלחה
    let win = document.getElementById("win")
    win.pause()
}

function f_stopWinVideo() {////פונקציה לעצירת סרטון ההצלחה
    let winVideo = document.getElementById("t1")
    winVideo.setAttribute("style", "display: none;")
    winVideo.pause()
    f_toLoad()
}


//פונקציה לשלב 1
function f_shalav1() {
    let div = document.getElementById("div")
    div.innerHTML = ""
    let knowMe = document.getElementById("vid" + sessionStorage.getItem("song"))
    knowMe.setAttribute("style", "display: inline;")
    knowMe.play()
    knowMe.addEventListener("ended", f_stopKnowMe)
}
//פונקציה לשלב 2
function f_shalav2() {//הודעה מתאימה לשחקן שיכול להתנסות על השיר שבחר
    let tryIt = document.getElementById("tryIt")
    tryIt.textContent = "let's play עכשיו זו ההזדמנות שלך לנסות! כשאתה מרגיש מוכן לחץ על           "
}
//פונקציה לשלב 3
function f_level3() {//כל הפעולות שיתבצעו בעקבות לחיצה על מקש שלב 3
    document.body.onload = f_toLoad2()// פונקצית אתחול דף מספר 2
}

function f_stopKnowMe() {//פונקציית המחשת הנגינה ע"י הדגמה
    let knowMe = document.getElementById("vid" + sessionStorage.getItem("song"))
    knowMe.setAttribute("style", "display: none;")
    knowMe.pause()
    f_toLoad()
}