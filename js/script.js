
var btn = document.getElementById("btn_solve")

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