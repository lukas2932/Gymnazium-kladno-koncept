
const menuSecondOne = document.getElementById("menuSecondOne");
const menuSecondTwo = document.getElementById("menuSecondTwo");
const menuSecondThree = document.getElementById("menuSecondThree");
const menuSecondFour = document.getElementById("menuSecondFour");
const menuSecondFive = document.getElementById("menuSecondFive");
const menuSecondSix = document.getElementById("menuSecondSix");
const menuSecondSeven = document.getElementById("menuSecondSeven");

const menuUnderOne = document.getElementById("menuUnderOne");
const menuUnderTwo = document.getElementById("menuUnderTwo");

const menuUnderSecondOne = document.getElementById("menuUnderSecondOne");
const menuUnderSecondTwo = document.getElementById("menuUnderSecondTwo");
const menuUnderSecondThree = document.getElementById("menuUnderSecondThree");
const menuUnderSecondFour = document.getElementById("menuUnderSecondFour");
const menuUnderSecondFive = document.getElementById("menuUnderSecondFive");
const menuUnderSecondSix = document.getElementById("menuUnderSecondSix");
const menuUnderSecondSeven = document.getElementById("menuUnderSecondSeven");

const menuSecondHoverOne = document.getElementById("menuSecondHoverOne");
const menuSecondHoverTwo = document.getElementById("menuSecondHoverTwo");

const sideMenuLiOne = document.getElementById("sideMenuLiOne");
const sideMenuLiPOne = document.getElementById("sideMenuLiPOne");
const sideMenuUnderUlOne = document.getElementById("sideMenuUnderUlOne");

const sideMenuUnderUlTwo = document.getElementById("sideMenuUnderUlTwo");
const sideMenuLiTwo = document.getElementById("sideMenuLiTwo");

const sideMenuUnderUlThree = document.getElementById("sideMenuUnderUlThree");
const sideMenuLiThree = document.getElementById("sideMenuLiThree");

const sideMenuUnderUlFour = document.getElementById("sideMenuUnderUlFour");
const sideMenuLiFour = document.getElementById("sideMenuLiFour");

const sideMenuUnderUlFive = document.getElementById("sideMenuUnderUlFive");
const sideMenuLiFive = document.getElementById("sideMenuLiFive");

const sideMenuUnderUlSix = document.getElementById("sideMenuUnderUlSix");
const sideMenuLiSix = document.getElementById("sideMenuLiSix");

const end_a_1 = document.getElementById("end_a_1");
const end_a_2 = document.getElementById("end_a_2");
const end_a_3 = document.getElementById("end_a_3");
const end_a_4 = document.getElementById("end_a_4");
const end_a_5 = document.getElementById("end_a_5");


function menuSecondAppear(){
    menuUnderOne.style.display = "block";
    menuUnderOne.style.animation = "menuUnderAnimation 0.75s forwards";
}


menuSecondOne.onmouseover = () => {
    menuSecondAppear();
}

menuSecondOne.onmouseout = () => {
    menuSecondOne.style.color = "black" 
    menuSecondHoverOne.style.color = "black";
    menuUnderOne.style.animation = "menuUnderAnimationUp 0.5s forwards";
    menuSecondOne.style.animation = "mainMenuAnimationUp 0.5s forwards";
}


menuSecondThree.onmouseover = () => {
    menuUnderTwo.style.display = "block";
    menuUnderTwo.style.animation = "menuUnderAnimation 0.6s forwards";
}

menuSecondThree.onmouseout = () => {
    menuSecondTwo.style.color = "black" 
    menuSecondHoverTwo.style.color = "black";
    menuUnderTwo.style.animation = "menuUnderAnimationUp 0.5s forwards";
}


sideMenuLiOne.onmouseover = () => {
    sideMenuUnderUlOne.style.display = "block";
    sideMenuUnderUlOne.style.animation = "sideMenuAnimationDownOne 0.4s forwards";
    sideMenuLiOne.style.backgroundColor = "rgba(0,0,0,0.15)";
}

sideMenuLiOne.onmouseout = () => {
    sideMenuUnderUlOne.style.animation = "sideMenuAnimationUpOne 0.4s forwards";
    sideMenuLiOne.style.backgroundColor = "rgba(0,0,0,0)";
}


sideMenuLiTwo.onmouseover = () => {
    sideMenuUnderUlTwo.style.display = "block";
    sideMenuUnderUlTwo.style.animation = "sideMenuAnimationDownTwo 0.4s forwards";
    sideMenuLiTwo.style.backgroundColor = "rgba(0,0,0,0.15)";
}

sideMenuLiTwo.onmouseout = () => {
    sideMenuUnderUlTwo.style.animation = "sideMenuAnimationUpTwo 0.4s forwards";
    sideMenuLiTwo.style.backgroundColor = "rgba(0,0,0,0)";
}


sideMenuLiThree.onmouseover = () => {
    sideMenuUnderUlThree.style.display = "block";
    sideMenuUnderUlThree.style.animation = "sideMenuAnimationDownThree 0.4s forwards";
    sideMenuLiThree.style.backgroundColor = "rgba(0,0,0,0.15)";
}

sideMenuLiThree.onmouseout = () => {
    sideMenuUnderUlThree.style.animation = "sideMenuAnimationUpThree 0.4s forwards";
    sideMenuLiThree.style.backgroundColor = "rgba(0,0,0,0)";
}


sideMenuLiFour.onmouseover = () => {
    sideMenuUnderUlFour.style.display = "block";
    sideMenuUnderUlFour.style.animation = "sideMenuAnimationDownFour 0.4s forwards";
    sideMenuLiFour.style.backgroundColor = "rgba(0,0,0,0.15)";
}

sideMenuLiFour.onmouseout = () => {
    sideMenuUnderUlFour.style.animation = "sideMenuAnimationUpFour 0.4s forwards";
    sideMenuLiFour.style.backgroundColor = "rgba(0,0,0,0)";
}

sideMenuLiFive.onmouseover = () => {
    sideMenuUnderUlFive.style.display = "block";
    sideMenuUnderUlFive.style.animation = "sideMenuAnimationDownFive 0.4s forwards";
    sideMenuLiFive.style.backgroundColor = "rgba(0,0,0,0.15)";
}

sideMenuLiFive.onmouseout = () => {
    sideMenuUnderUlFive.style.animation = "sideMenuAnimationUpFive 0.4s forwards";
    sideMenuLiFive.style.backgroundColor = "rgba(0,0,0,0)";
}

sideMenuLiSix.onmouseover = () => {
    sideMenuUnderUlSix.style.display = "block";
    sideMenuUnderUlSix.style.animation = "sideMenuAnimationDownSix 0.4s forwards";
    sideMenuLiSix.style.backgroundColor = "rgba(0,0,0,0.15)";
}

sideMenuLiSix.onmouseout = () => {
    sideMenuUnderUlSix.style.animation = "sideMenuAnimationUpSix 0.4s forwards";
    sideMenuLiSix.style.backgroundColor = "rgba(0,0,0,0)";
}


end_a_1.onmouseover = () => {
    end_a_1.style.setProperty('--animationBefore', 'partner_before_up 0.3s forwards');
    end_a_1.style.setProperty('--animationAfter', 'partner_after_up 0.3s forwards');
}

end_a_1.onmouseout = () => {
    end_a_1.style.setProperty('--animationBefore', 'partner_before_down 0.3s forwards');
    end_a_1.style.setProperty('--animationAfter', 'partner_after_down 0.3s forwards');
}


end_a_2.onmouseover = () => {
    end_a_2.style.setProperty('--animationBefore', 'partner_before_up 0.3s forwards');
    end_a_2.style.setProperty('--animationAfter', 'partner_after_up 0.3s forwards');
}

end_a_2.onmouseout = () => {
    end_a_2.style.setProperty('--animationBefore', 'partner_before_down 0.3s forwards');
    end_a_2.style.setProperty('--animationAfter', 'partner_after_down 0.3s forwards');
}


end_a_3.onmouseover = () => {
    end_a_3.style.setProperty('--animationBefore', 'partner_before_up 0.3s forwards');
    end_a_3.style.setProperty('--animationAfter', 'partner_after_up 0.3s forwards');
}

end_a_3.onmouseout = () => {
    end_a_3.style.setProperty('--animationBefore', 'partner_before_down 0.3s forwards');
    end_a_3.style.setProperty('--animationAfter', 'partner_after_down 0.3s forwards');
}


end_a_4.onmouseover = () => {
    end_a_4.style.setProperty('--animationBefore', 'partner_before_up 0.3s forwards');
    end_a_4.style.setProperty('--animationAfter', 'partner_after_up 0.3s forwards');
}

end_a_4.onmouseout = () => {
    end_a_4.style.setProperty('--animationBefore', 'partner_before_down 0.3s forwards');
    end_a_4.style.setProperty('--animationAfter', 'partner_after_down 0.3s forwards');
}


end_a_5.onmouseover = () => {
    end_a_5.style.setProperty('--animationBefore', 'partner_before_up 0.3s forwards');
    end_a_5.style.setProperty('--animationAfter', 'partner_after_up 0.3s forwards');
}

end_a_5.onmouseout = () => {
    end_a_5.style.setProperty('--animationBefore', 'partner_before_down 0.3s forwards');
    end_a_5.style.setProperty('--animationAfter', 'partner_after_down 0.3s forwards');
}
