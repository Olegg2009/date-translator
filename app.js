
function translate(day, month, year, isJulian){
    let minus_days = 0;
    
    let date = new Date(Number(year), Number(month - 1), Number(day));

    date.setDate(date.getDate() - Math.trunc(year / 100) + Math.trunc(year / 400) + 2);

    if(!isJulian){
        if((date.getFullYear() == 1820 && date.getMonth() >= 2) || (date.getFullYear() >= 1821 && (date.getFullYear() < 1824 || (date.getFullYear() == 1824 && date.getMonth() <= 1))))
            date.setDate(date.getDate() + 1);
        else if((date.getFullYear() == 1824 && date.getMonth() >= 2) || (date.getFullYear() >= 1825 && (date.getFullYear() < 1828 || (date.getFullYear() == 1828 && date.getMonth() <= 1))))
            date.setDate(date.getDate() + 2);
        else if((date.getFullYear() == 1828 && date.getMonth() >= 2) || (date.getFullYear() >= 1829 && (date.getFullYear() < 1832 || (date.getFullYear() == 1832 && date.getMonth() <= 1))))
            date.setDate(date.getDate() + 3);
        else if((date.getFullYear() == 1832 && date.getMonth() >= 2) || (date.getFullYear() >= 1833 && (date.getFullYear() < 1836 || (date.getFullYear() == 1836 && date.getMonth() <= 1))))
            date.setDate(date.getDate() + 4);
        else if((date.getFullYear() == 1836 && date.getMonth() >= 2) || (date.getFullYear() >= 1837 && (date.getFullYear() < 1840 || (date.getFullYear() == 1840 && date.getMonth() <= 1))))
            date.setDate(date.getDate() + 5);
        else if((date.getFullYear() == 1840 && date.getMonth() >= 2) || (date.getFullYear() >= 1841 && (date.getFullYear() < 1844 || (date.getFullYear() == 1844 && date.getMonth() <= 1))))
            date.setDate(date.getDate() + 6);
        else if((date.getFullYear() == 1844 && date.getMonth() >= 2) || (date.getFullYear() >= 1845 && (date.getFullYear() < 1848 || (date.getFullYear() == 1848 && date.getMonth() <= 1))))
            date.setDate(date.getDate() + 7);
        else if((date.getFullYear() == 1848 && date.getMonth() >= 2) || (date.getFullYear() >= 1849 && (date.getFullYear() < 1852 || (date.getFullYear() == 1852 && date.getMonth() <= 1))))
            date.setDate(date.getDate() + 8);
        else if((date.getFullYear() == 1852 && date.getMonth() >= 2) || (date.getFullYear() >= 1853 && (date.getFullYear() < 1856 || (date.getFullYear() == 1856 && date.getMonth() <= 1))))
            date.setDate(date.getDate() + 9);
        else if((date.getFullYear() == 1856 && date.getMonth() >= 2) || (date.getFullYear() >= 1857 && (date.getFullYear() < 1860 || (date.getFullYear() == 1860 && date.getMonth() <= 1))))
            date.setDate(date.getDate() + 10);
        else if((date.getFullYear() == 1860 && date.getMonth() >= 2) || (date.getFullYear() >= 1861 && (date.getFullYear() < 1864 || (date.getFullYear() == 1864 && date.getMonth() <= 1))))
            date.setDate(date.getDate() + 11);
        else if((date.getFullYear() == 1864 && date.getMonth() >= 2) || date.getFullYear() >= 1865)
            date.setDate(date.getDate() + 12);
    }

    if(!isJulian && date.getFullYear() >= 1820 && date.getFullYear() <= 1868 && date.getMonth() == 1 && date.getDate() == 29){
        return "01.03." + String(date.getFullYear());
    }
    if(isJulian && date.getFullYear() % 100 == 0 && date.getFullYear() % 400 != 0  && date.getMonth() == 1 && date.getDate() == 28){
        return "29.02." + String(date.getFullYear());
    }
    if(!isJulian && date.getFullYear() % 100 == 0 && date.getFullYear() % 400 != 0  && date.getMonth() == 2 && date.getDate() == 1){
        return "29.02." + String(date.getFullYear());
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