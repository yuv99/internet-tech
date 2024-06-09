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
        
        console.log(name.length)
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

function SquareNumOnClick()
{
    var input_number = document.getElementById("square_num")
    inputted_num = input_number.value
    if(inputted_num.length==0)
        {
            alert("Вы не ввели число!")
        }
        else
        {
            alert(Math.pow(inputted_num,2))
        }
}

function InputNameOnClick()
{
    var name = prompt("Введите свое имя:")
    alert("Доброго здоровечка, "+name+"!")
}

function DivideByFourOnClick()
{
    var res = prompt("Введите число, которое будем делить на 4:")
    if(res%4==0)
        {
            alert("Выражение истинно (остаток равен "+res%4+")")
        }
        else
        {
            alert("Выражение ложно (остаток равен "+res%4+")")
        }
}

function CheckPer(int1, int2)
{
    return ((int1+int2)*2)
}

function CheckPerimeterOnClick()
{
    var input_field1 = document.getElementById("perimeter_num_1")
    var input_field2 = document.getElementById("perimeter_num_2")

    if(input_field1.value.length!=0 && input_field2.value.length!=0)
        {
            alert("Периметр равен "+(CheckPer(Number(input_field1.value), Number(input_field2.value))))
        }
}

function ShowNumbers_1_10_OnClick()
{
    for(var i = 1;i<=10;i++)
        {
            console.log(i)
        }
}

function ShowNumbers_5_50_OnClick()
{
    for(var i=5;i<=50;i+=5)
        {
            console.log(i)
        }
}

function ShowNumbers_1_10_While_OnClick()
{
    var i = 1
    while(i<=10)
        {
            console.log(i)
            i++
        }
}

function ShowNumbers_5_50_While_OnClick()
{
    var i = 5
    while(i<=50)
        {
            console.log(i)
            i+=5
        }
}

function YouWontKillUs()
{
    for(i=5;i>-10;i--)
        {
            if(i<1)
                {
                    console.log("Нас не задушишь, не убьешь")
                }
        }
}

function Order()
{
    var res=prompt("Что хочешь заказать?\nТебе доступны:\n1. Яблоко\n2. Апельсин\n3. Сок\n4. Пиво").toLowerCase()
    switch(res)
    {
        case "яблоко":
        case "апельсин":
        case "сок":
        case "пиво":
            console.log("Ваш выбор " + "\""+res +"\""+" просто идеален!")
            break
        default:
            console.log("Пошел прочь!")          
    }
}

function Show3rdElementOfArray()
{
    var arr=[1,2,3,4,5]
    
    return arr

}

function Array_18_20()
{
    var arr=[1,2,3,4,5]
    alert("Третий элемент массива: "+arr[2]+"\nДлина массива: "+arr.length+"\nЭлементы массива: "+arr)
}

function FillArray()
{
    var arr = new Array()
    var num = 5
    for(var i = 0; i<10;i++)
        {
            if (i==num)
                {
                    arr[i]=new Array()
                    arr[i]=["слово1","слово2","слово3"]
                }
                else
                {
                    arr[i]=i
                }
        }
    
    alert(arr)
}

function CreatePhoneBook()
{
    var phone_book = 
    {
        name: "Иванов Иван Иванович",
        phone: "8-999-999-99-99"
    }

    alert("ФИО: "+phone_book.name +"\nтелефон: "+phone_book.phone)
}

function CreateObject()
{
    var person = new Object()

    person.name="Иванов Иван Иванович"
    person.age=20
    person.weight=70
    person.height=180
    person.isMarried=true

    console.log("Свойства:")
    for (property in person)
    {
        console.log(property+": "+person[property])
    }
}