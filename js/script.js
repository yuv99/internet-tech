
var btn = document.getElementById("btn_solve")
var btn = document.getElementById("btn_show_age")

var length = 0

function SolveOnClick()
{
    var input_field = document.getElementById("input_name")

    var name = input_field.value

    if(name.length==0)
    {
        console.log("Введите имя!")
    }

    else
    {
        length = name.length
        console.log(length)
    }
}

function AddOnClick()
{
    console.log(3+5)
}

function DivideOnClick()
{
    var str1 = "Деление нацело: "
    var str2 = "Деление с остатком: "
    confirm(str1 + 16 / 2 + "\n" + str2 + 16 % 2)
}

function ShowAgeOnClick()
{
    var input_age = document.getElementById("age_num")

    var age = input_age.value

    if(age.length==0)
    {
        console.log("Введите возраст!")
    }

    else
    {
        console.log(age)
    }
}

function InputWordOnClick()
{
    var input_str = prompt("Введите любое слово")
    if(input_str!=null)
    {
        console.log("Длина слова: "+input_str.length + "\nПервые 2 буквы слова: "+input_str.substring(0,2))
    }
}

function CheckOlderOnClick() 
{
    var res=prompt("Введите возраст мамы и папы через пробел:")
    var m_age = res[0]
    var f_age = res[2]
    if(m_age>f_age)
    {
        confirm("Мама старше")
    }

    else if(f_age>m_age)
    {
        confirm("Папа старше")
    }

    else
    {
        confirm("Возраст одинаковый!")
    }
}

function GoToConcertOnClick()
{
    var age = prompt("Сколько тебе лет?")
    var answer = confirm("Готов отправиться слушать Аллу Пугачеву?")

    if (age<12)
    {
        alert("Сиди дома, тебе мало лет!")
    }

    else if (answer==false)
    {
        alert("Нет так нет, сиди дома")
    }
    else
    {
        alert("Вперед за билетами!")
    }
}

