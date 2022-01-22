function daily(){
    const text = document.querySelectorAll("span.last");
    for (i=0; i< text.length; i++){
        text[i].innerHTML="Yesterday"
    }
    const work = data[0].timeframes.daily;
    const play = data[1].timeframes.daily;
    const study = data[2].timeframes.daily;
    const exercise = data[3].timeframes.daily;
    const social = data[4].timeframes.daily;
    const selfCare = data[5].timeframes.daily;

    document.getElementById("workCurrent").innerHTML= work.current;
    document.getElementById("playCurrent").innerHTML = play.current;
    document.getElementById("studyCurrent").innerHTML = study.current;
    document.getElementById("exerciseCurrent").innerHTML = exercise.current;
    document.getElementById("socialCurrent").innerHTML = social.current;
    document.getElementById("selfCareCurrent").innerHTML = selfCare.current;

    document.getElementById("workPrevious").innerHTML= work.previous;
    document.getElementById("playPrevious").innerHTML = play.previous;
    document.getElementById("studyPrevious").innerHTML = study.previous;
    document.getElementById("exercisePrevious").innerHTML = exercise.previous;
    document.getElementById("socialPrevious").innerHTML = social.previous;
    document.getElementById("selfCarePrevious").innerHTML = selfCare.previous;

    document.getElementById("daily").style.color="#fff";
    /*document.getElementById("weekly").classList.remove('active');
    document.getElementById("monthly").classList.remove('active');*/

}

function weekly(){
    const text = document.querySelectorAll("span.last");
    for (i=0; i< text.length; i++){
        text[i].innerHTML="Last week"
    }

    const work = data[0].timeframes.weekly;
    const play = data[1].timeframes.weekly;
    const study = data[2].timeframes.weekly;
    const exercise = data[3].timeframes.weekly;
    const social = data[4].timeframes.weekly;
    const selfCare = data[5].timeframes.weekly;

    document.getElementById("workCurrent").innerHTML= work.current;
    document.getElementById("playCurrent").innerHTML = play.current;
    document.getElementById("studyCurrent").innerHTML = study.current;
    document.getElementById("exerciseCurrent").innerHTML = exercise.current;
    document.getElementById("socialCurrent").innerHTML = social.current;
    document.getElementById("selfCareCurrent").innerHTML = selfCare.current;

    document.getElementById("workPrevious").innerHTML= work.previous;
    document.getElementById("playPrevious").innerHTML = play.previous;
    document.getElementById("studyPrevious").innerHTML = study.previous;
    document.getElementById("exercisePrevious").innerHTML = exercise.previous;
    document.getElementById("socialPrevious").innerHTML = social.previous;
    document.getElementById("selfCarePrevious").innerHTML = selfCare.previous;

    document.getElementById("daily").classList.remove('active');
    document.getElementById("weekly").classList.add('active');
    document.getElementById("monthly").classList.remove('active');
}

function monthly(){
    const text = document.querySelectorAll("span.last");
    for (i=0; i< text.length; i++){
        text[i].innerHTML="Last month"
    }

    const work = data[0].timeframes.monthly;
    const play = data[1].timeframes.monthly;
    const study = data[2].timeframes.monthly;
    const exercise = data[3].timeframes.monthly;
    const social = data[4].timeframes.monthly;
    const selfCare = data[5].timeframes.monthly;

    document.getElementById("workCurrent").innerHTML= work.current;
    document.getElementById("playCurrent").innerHTML = play.current;
    document.getElementById("studyCurrent").innerHTML = study.current;
    document.getElementById("exerciseCurrent").innerHTML = exercise.current;
    document.getElementById("socialCurrent").innerHTML = social.current;
    document.getElementById("selfCareCurrent").innerHTML = selfCare.current;

    document.getElementById("workPrevious").innerHTML= work.previous;
    document.getElementById("playPrevious").innerHTML = play.previous;
    document.getElementById("studyPrevious").innerHTML = study.previous;
    document.getElementById("exercisePrevious").innerHTML = exercise.previous;
    document.getElementById("socialPrevious").innerHTML = social.previous;
    document.getElementById("selfCarePrevious").innerHTML = selfCare.previous;

    document.getElementById("daily").classList.remove('active');
    document.getElementById("weekly").classList.remove('active');
    document.getElementById("monthly").classList.add('active');
}

data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]