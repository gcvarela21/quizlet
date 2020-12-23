# Quizlet

Unit 04 API JavaScript: The Joys of Arrays and Maybe some JQuery;

This is intended to be quiz-like-game where a timer begins at the start of the quiz, with every incorrect answer resulting in a loss of more time. The Score at the End is impacted by the over all time remaining vs questions answered correctly. The quiz begins with a button click ends with the last question being answered or time running out.

Here is a visual:

![Sample Page](https://gcvarela21.github.io/quizlet/quizlet.png)

* [This is Live Site on Git Hub until 12/22/20](https://gcvarela21.github.io/quizlet/)
* [See all my repositories HERE](https://github.com/gcvarela21/)
* [If your reading this you are probably HERE](https://github.com/gcvarela21/quizlet/)
​

## **Built With**

* [HTML](https"//w3schools.com)
* [CSS](https"//w3schools.com)
* [JavaScript](https://getbootstrap.com/)
* [gitBash](https://git-scm.com/downloads)
* [gitHub](https"//gitHub.com)
* [Atom](https://atom.io/)

______________________________________________________________________________

### **Summary**

I miss read the due date. Ran out of time.   
​__________________________________________________________________________________
​

#### **Code Snippet**

​
Like a series of dominoes this it all triggered with a push, or more of a "click".
An eventListener attached to the id of the button awaits to kick of the series of prompt and confirms with conditions that need to be met. Here is all the JS code I started with:

```
var quizBody = document.getElementById("quizlet");
var quizT = document.getElementById("timez");
var startQuizBut = document.getElementById("startBut");
var introDiv = document.getElementById("intro");


var timeLeft = 76;
var timerInterval;


function startQuiz(){


    //Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;

        if(timeLeft === 0) {
          clearInterval(timerInterval);
                  }
      }, 1000);

}


// This button starts the quiz!
startQuizBut.addEventListener("click",startQuiz);
```

askLength is the function I created to start the first prompt
______________________________________________________________________________
​

​
### **Deployed Link**

* [See Live Site on Git Hub](https://gcvarela21.github.io/quizlet/)
​
​

### **Gloria C Varela**

* [Link to Portfolio Site](https://www.glo.digital)
* [Link to Github](https://github.com/gcvarela21)
* [Link to LinkedIn](https://www.linkedin.com/in/glovarela)
​
​
​______________________________________________________________________________
​

#### **License**

​
This project is licensed under the MIT License

#### **Some Reference Materials I collected on this Journey**

##### **JavaScript Refrences**

* [Math.random()](https://www.w3schools.com/js/js_random.asp)
* [Math.floor()](https://www.w3schools.com/js/js_random.asp)
* [JavaScript String fromCharCode() Method](https://www.w3schools.com/jsref/jsref_fromcharcode.asp)
* [JavaScript return Statement](https://www.w3schools.com/jsref/jsref_return.asp)
* [JavaScript Array forEach() Method](https://www.w3schools.com/jsref/jsref_foreach.asp)

* [JavaScript Let](https://www.w3schools.com/js/js_let.asp)
* [JavaScript Const](https://www.w3schools.com/js/js_const.asp)

* [JavaScript For Loop](https://www.w3schools.com/js/js_loop_for.asp)
* [JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)

* [JavaScript Popup Boxes](https://www.w3schools.com/js/js_popup.asp)
* [JavaScript Comparison and Logical Operators](https://www.w3schools.com/js/js_comparisons.asp)

* [JavaScript Sorting Arrays](https://www.w3schools.com/js/js_array_sort.asp)
* [JavaScript String indexOf() Method](https://www.w3schools.com/jsref/jsref_indexof.asp)

##### **JS DOM References**

* [querySelector](https://www.w3schools.com/jsref/met_document_queryselector.asp)
* [addEventListener](https://www.w3schools.com/jsref/met_document_addeventlistener.asp)

* [Textarea readOnly Property](https://www.w3schools.com/jsref/prop_textarea_readonly.asp)
* [Input Text placeholder Property](https://www.w3schools.com/jsref/prop_text_placeholder.asp)

##### **Window References**

* [Window prompt() Method](https://www.w3schools.com/jsref/met_win_prompt.asp)
* [Window confirm() Method](https://www.w3schools.com/jsref/met_win_confirm.asp)
