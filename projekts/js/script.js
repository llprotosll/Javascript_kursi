//https://codepen.io/cathydutton/pen/JjpxMm
window.onload = function () {

    var alphabet = ['a', 'ā', 'b', 'c', 'č', 'd', 'e', 'ē', 'f', 'g', 'ģ', 'h',
          'i', 'ī', 'j', 'k', 'ķ', 'l', 'ļ', 'm', 'n', 'ņ', 'o', 'p', 'r', 's', 'š',
          't', 'u', 'ū', 'v', 'z', 'ž', ''];
    
    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
    var guess ;             // Geuss
    var geusses = [ ];      // Stored geusses
    var lives ;             // Lives
    var counter ;           // Count correct geusses
    var space;              // Number of spaces in word '-'
    let wins = 0;
    let loses = 0;
    
  
    //tiek izveidoti elementi
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
    var used = document.getElementById("alphabet");


  
  
    // tiek izveidots alfabēts uz kura tiks izvēlēti burti
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    
    // Tiek izveidotas atbilžu kategorijas
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "Atbildes tēma: Augļi";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "Atbildes tēma: Filmas";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "Atbildes tēma: Pilsētas";
      }
    }
  
    // Tiek izveidota vieta, kur tiks uzrādīta atbilde un korekti uzminētie burti
     result = function () {
      wordHolder = document.getElementById('hold');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
        
      }
    }
    
    // Tiek izveidota kļūdaino atbilžu uzskaite
     comments = function () {
      showLives.innerHTML = "Tu vari pieļaut " + lives + " kļūdas";
      if (lives < 1) {
        showLives.innerHTML = "Spēle zaudēta";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "Atbilde pareiza!";
        }
      }
    }
  
        // Karātavu zīmēšana
    var animate = function () {
      var drawMe = lives ;
      drawArray[drawMe]();
    }
  
    
     // Salikta secība un koordinātas, kur uzzīmēt bildi
    canvas =  function(){
  
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#fff";
      context.lineWidth = 2;
    };
    
      head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
      }
      
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke(); 
  }
  
     frame1 = function() {
       draw (0, 150, 150, 150);
     };
     
     frame2 = function() {
       draw (10, 0, 10, 600);
     };
    
     frame3 = function() {
       draw (0, 5, 70, 5);
     };
    
     frame4 = function() {
       draw (60, 5, 60, 15);
     };
    
     torso = function() {
       draw (60, 36, 60, 70);
     };
    
     rightArm = function() {
       draw (60, 46, 100, 50);
     };
    
     leftArm = function() {
       draw (60, 46, 20, 50);
     };
    
     rightLeg = function() {
       draw (60, 70, 100, 100);
     };
    
     leftLeg = function() {
       draw (60, 70, 20, 100);
     };
    
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
  
  
    // Funkcija minējumam, kas notiek uzspiežot uz burtiem
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        //atkarībā no pareizs vai nepareizs - tiek uzsākta zīmēšana
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
    
      
    // Masīvā saliktas atbildes, kas būs jāatmin (17 atbildes)
    play = function () {
      categories = [
          ["ābols", "persiks", "plūme", "banāns", "zemene", "kivi", "ananāss"],
          ["svešie", "matrix", "gladiators", "neatkarības diena", "cietais rieksts"],
          ["londona", "parīze", "barselona", "amsterdama", "tartu"]
      ];
  //funkcija, lai gadījuma veidā uzsākot jaunu spēli tiktu paņemts minamais vārds no kategorijām
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  //tiek iestatīst minējumu skaits līdz spēle ir zaudēta
      geusses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }
  
    play();
    
    // Masīvs ar pavedieniem  
      hint.onclick = function() {
  
        hints = [
          ["Izmanto pīrāgos", "auglis ar kauliņu","aug kokos Latvijā", "vislabāk, ja tas ir dzeltens", "parādās vasaras sākumā", "ne tikai auglis",  "bruņots auglis"],
          ["zinātniskās fantastikas šausmu filma", "domā par baterijām", "kolizejs", "citplanētieši uzbrūk", "Ziemassvētku filma"],
          ["Starp Franciju un Grenlandi", "Viduseiropā", "tālu rietumeiropā", "daudz puķu un zālīšu", "te pat kaimiņos"]
      ];
  
      var catagoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Pavediens: - " +  hints [catagoryIndex][hintIndex];
    };
  
     // Spēles atkārtošana  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  }
  
