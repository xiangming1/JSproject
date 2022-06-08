function traingleClick(click){
    const totalClicks = document.getElementById('circleY');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    if(sumvalue <0){
        totalClicks.innerText = 0;
    }
    if(sumvalue >0 && click ===1){
        totalClicks.style.setProperty('background-color',"#FF0000");
    }else if(sumvalue>0 && click === -1){
        totalClicks.style.setProperty('background-color',"#58f80e");
    } else if(sumvalue ===0){
        totalClicks.style.setProperty('background-color',"#fffffffd");
    }


    trapHeight = getComputedStyle(document.documentElement).getPropertyValue('--trap-height');
    if(click === 1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) + 10)+ "px");
    }
    else if(click === -1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) - 10)+ "px");
    }
}

function totalClick(click)
{
    const totalClicks = document.getElementById('totalClicks');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    if(sumvalue <0){
        totalClicks.innerText = 0;
    }
    if(sumvalue >2 && click ===1){
        totalClicks.style.setProperty('background-color',"#FF0000");
    }else if(sumvalue>2 && click === -1){
        totalClicks.style.setProperty('background-color',"#FF8C00");
    } else if(sumvalue ===2){
        totalClicks.style.setProperty('background-color',"#fffffffd");
    }


    trapHeight = getComputedStyle(document.documentElement).getPropertyValue('--trap-height');
    if(click === 1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) + 10)+ "px");
    }
    else if(click === -1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) - 10)+ "px");
    }
}

function totalClick2(click)
{
    const totalClicks = document.getElementById('totalClicks2');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    if(sumvalue <0){
        totalClicks.innerText = 0;
    }

    if(sumvalue >2 && click ===1){
        totalClicks.style.setProperty('background-color',"#FF0000");
    }else if(sumvalue>2 && click === -1){
        totalClicks.style.setProperty('background-color',"#FF8C00");
    } else if(sumvalue ===2){
        totalClicks.style.setProperty('background-color',"#fffffffd");
    }

    trapHeight = getComputedStyle(document.documentElement).getPropertyValue('--trap-height');
    if(click === 1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) + 10)+ "px");
    }
    else if(click === -1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) - 10)+ "px");
    }
}

function totalClick3(click)
{
    const totalClicks = document.getElementById('totalClicks3');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    if(sumvalue <0){
        totalClicks.innerText = 0;
    }
    if(sumvalue >2 && click ===1){
        totalClicks.style.setProperty('background-color',"#FF0000");
    }else if(sumvalue>2 && click === -1){
        totalClicks.style.setProperty('background-color',"#FF8C00");
    } else if(sumvalue ===2){
        totalClicks.style.setProperty('background-color',"#fffffffd");
    }
    trapHeight = getComputedStyle(document.documentElement).getPropertyValue('--trap-height');
    if(click === 1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) + 10)+ "px");
    }
    else if(click === -1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) - 10)+ "px");
    }
}

function totalClick4(click)
{
    const totalClicks = document.getElementById('totalClicks4');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    if(sumvalue <0){
        totalClicks.innerText = 0;
    }
    if(sumvalue >2 && click ===1){
        totalClicks.style.setProperty('background-color',"#FF0000");
    }else if(sumvalue>2 && click === -1){
        totalClicks.style.setProperty('background-color',"#FF8C00");
    } else if(sumvalue ===2){
        totalClicks.style.setProperty('background-color',"#fffffffd");
    }
    
    trapHeight = getComputedStyle(document.documentElement).getPropertyValue('--trap-height');
    if(click === 1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) + 10)+ "px");
    }
    else if(click === -1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) - 10)+ "px");
    }
}

function totalClick5(click)
{
    const totalClicks = document.getElementById('totalClicks5');
    const sumvalue = parseInt(totalClicks.innerText) + click;
    console.log(sumvalue + click);
    totalClicks.innerText = sumvalue;
    if(sumvalue <0){
        totalClicks.innerText = 0;
    }

    if(sumvalue >2 && click ===1){
        totalClicks.style.setProperty('background-color',"#FF0000");
    }else if(sumvalue>2 && click === -1){
        totalClicks.style.setProperty('background-color',"#FF8C00");
    } else if(sumvalue ===2){
        totalClicks.style.setProperty('background-color',"#fffffffd");
    }

    trapHeight = getComputedStyle(document.documentElement).getPropertyValue('--trap-height');
    if(click === 1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) + 10)+ "px");
    }
    else if(click === -1){
        document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight, 10) - 10)+ "px");
    }
}
