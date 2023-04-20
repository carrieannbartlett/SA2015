function finish() {
    alert("Thank you for taking part " + firstName + "!" );
 }

 function checkAnswers() {
    //assign starting score
    var score = 0;
   
    //assign quiz elements to the quiz variable
    quiz = document.forms.Quiz.elements;

    //assign the answers to the questions to answer1 variable
    answer1 = quiz.flag.value;

    //check if the answer is correct
    if (answer1 == "SA") {
        ++score;
    }

    answer2 = quiz.capitals.value;
    if (answer2 == 3) {
        ++score;
    }

    answer3 = quiz.ocean.value;
    if (answer3 == "Indian") {
        ++score;
    }

    answer4 = quiz.krugerSize.value;
    if (answer4 == "Wales") {
        ++score;
    }

    answer5 = quiz.mammals.value;
    if (answer5 == "150") {
        ++score;
    }

  
    answer6a = quiz.bigFive1.value.toUpperCase().trim();
    answer6b = quiz.bigFive2.value.toUpperCase().trim();
    answer6c = quiz.bigFive3.value.toUpperCase().trim();
    answer6d = quiz.bigFive4.value.toUpperCase().trim();
    answer6e = quiz.bigFive5.value.toUpperCase().trim();

    var bigFive = ["ELEPHANT", "LION", "BUFFALO", "LEOPARD", "RHINO"];

    
    switch(answer6a) {
        case "ELEPHANT":
        case "LION":
        case "LEOPARD":
        case "RHINO":
        case "BUFFALO":
                ++score;         
    }

    switch(answer6b) {
        case "ELEPHANT":
        case "LION":
        case "LEOPARD":
        case "RHINO":
        case "BUFFALO":
                ++score;         
    }
  
    switch(answer6c) {
        case "ELEPHANT":
        case "LION":
        case "LEOPARD":
        case "RHINO":
        case "BUFFALO":
                ++score;         
    }
  
    switch(answer6d) {
        case "ELEPHANT":
        case "LION":
        case "LEOPARD":
        case "RHINO":
        case "BUFFALO":
                ++score;         
    }
  
    switch(answer6e) {
        case "ELEPHANT":
        case "LION":
        case "LEOPARD":
        case "RHINO":
        case "BUFFALO":
                ++score;         
    }
  

    console.log(answer6b);

    playersName = document.forms.firstName.elements.firstName.value;
    alert ("Well done " + playersName + ", your score is " + score + "!");
 }