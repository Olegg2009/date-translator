
function translate(day, month, year, isJulian){
    let minus_days = 0;
    if(isJulian || Number(year) < 1820){
        minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 2;
    }
    else {
        if(Number(year) >= 1820 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 3;
        else if(Number(year) >= 1824 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 4;
        else if(Number(year) >= 1828 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 5;
        else if(Number(year) >= 1832 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 6;
        else if(Number(year) >= 1836 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 7;
        else if(Number(year) >= 1840 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 8;
        else if(Number(year) >= 1844 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 9;
        else if(Number(year) >= 1848 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 10;
        else if(Number(year) >= 1852 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 11;
        else if(Number(year) >= 1856 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 12;
        else if(Number(year) >= 1860 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 13;
        else if(Number(year) >= 1864 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 14;
        else if(Number(year) == 1868 && (Number(month) > 3 || Number(month) == 2 && Number(day) > 28))
            minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 15;
        minus_days = Math.trunc(year / 100) - Math.trunc(year / 400) - 15;
    }
    let date = new Date(Number(year), Number(month) - 1, Number(day));

    date.setDate(date.getDate() - minus_days);
    
    if(!isJulian && date.getFullYear() >= 1820 && date.getFullYear() <= 1868 && date.getMonth() + 1 == 2 && date.getDate() == 29){
        return "28" + 
    String(date.getMonth() + 1).padStart(2, '0') + "." + String(date.getFullYear());
    }
    if(isJulian && date.getFullYear() % 100 == 0 && date.getFullYear() % 400 != 0 && date.getMonth() + 1 == 3 && date.getDate() == 1){
        return "29" + "." + 
    "02" + "." + String(date.getFullYear());
    }

    return String(date.getDate()).padStart(2, '0') + "." + 
    String(date.getMonth() + 1).padStart(2, '0') + "." + String(date.getFullYear());

}

function saveData() {

        let grig = document.getElementById('input1').value;
        
        let year = grig[0] + grig[1] + grig[2] + grig[3];
        let month =  grig[5] + grig[6];
        let day = grig[8] + grig[9];
        
        // day + "." + month + "." + year;
        document.getElementById('output1').innerHTML = translate(day, month, year, true);
        document.getElementById('output2').innerHTML = translate(day, month, year, false);
    }