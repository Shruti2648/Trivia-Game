var triviaQuestions = [{
    question: "Which New York City restaurant started the over-the-top milkshake trend by topping their milkshakes with candy, cake slices, and cookies?",
    answerList: ["Black Tap Craft Burgers and Beer", "Spot Dessert Bar", "Cici's Cafe", "Joe Allen"],
    answer: 0
}, {
    question: "Which ingredient is responsible for charcoal ice cream's dark color?",
    answerList: ["Food coloring", "Dark chocolate", "Activated charcoal powder", "Fortified charcoal paste"],
    answer: 2
}, {
    question: "From which country did stir-fried ice cream, otherwise known as rolled ice cream, originate?",
    answerList: ["Italy", "Mexico", "Germany", "Thailand"],
    answer: 3
}, {
    question: "Which of the following is not a health benefit of kombucha?",
    answerList: ["Rich in antioxidants", "Contains vinegar", "Good source of probiotics", "Good source of protein"],
    answer: 3  
}, {
    question: "Which trendy food has been named by TIME magazine as one of the best extremely fun inventions of 2013?",
    answerList: ["Cronuts", "Avocado toast", "Rainbow bagels", "Cake pops"],
    answer: 0
}, {
    question: "Which of the following spices are added to Starbucks pumpkin spice lattes?",
    answerList: ["Cinnamon, nutmeg, and saffron", "Cinnamon, nutmeg, and clove", "Cinnamon, allspice, and cardamom", "Cinnamon, allspice, and saffron"],
    answer: 1   
}, {
    question: "What is the most popular cheesecake at the Cheesecake Factory?",
    answerList: ["Godiva chocolate cheesecake", "Ultimate red velvet cheesecake", "Fresh strawberry cheesecake", "Original cheesecake"],
    answer: 0
}, {
    question: "Which of the following is not a health benefit of quinoa?",
    answerList: ["Rich in protein", "Good source of vitamin K", "Good source of dietary fiber", "Rich in B vitamins and minerals"],
    answer: 0
}]

var currentQuestion = ""
var correctAnswer = ""
var incorrectAnswer = ""
var unanswered
var answered
var userSelect = ""
var messages = {
    correct: "That's correct!",
    incorrect: "That's incorrect :(",
    finished: "Alright, let's see how well you did."
}

$("#start_button").on("click", function() {
    triviaGame()
})

function triviaGame() {
    currentQuestion = 0
    correctAnswer = 0
    incorrectAnswer = 0
    unanswered = 0
    newQuestion()
}

function newQuestion() {
    $("#message").empty()
    $("#correctedAnswer")
    answered = true

    $("#question_div").html("<p>" + triviaQuestions[currentQuestion].question + "</p>")
    for (var i = 0; i < 4; i++) {
        var choices = $("<div>")
        choices.text(triviaQuestions[currentQuestion].answerList[i])
        choices.attr({"data-index": i})
        choices.addClass("thisChoice")
        $("#choices_div").append(choices)
    }

    $(".thisChoice").on("click", function() {
        userSelect = $(this).data("index")
        answerPage()
    })
}

function answerPage() {
    $("#question_div").empty()
    $("#choices_div").empty()
    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer]
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer
    
    if ((userSelect == rightAnswerIndex) && (answered == true)) {
        correctAnswer++
        $("#message").html(messages.correct)
    }
    else if ((userSelect != rightAnswerIndex) && (answered == true)) {
        incorrectAnswer++
        $("#message").html(messages.incorrect)
        $("#correct").html("The correct answer was: " + rightAnswerText)
    }
    else {
        unanswered++
        answered = true
    }
}
