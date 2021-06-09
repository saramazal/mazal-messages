const onClick = document.querySelector(".button");

const mazalMess = [
    "A righteous man falls down seven times and gets up. <br>~ King Solomon",
    "There are two things that are infinite, the universe and man&apos;s stupidity. And I am not sure about the universe. <br>~ Albert Einstein",
    "One cannot and must not try to erase the past merely because it does not fit the present. <br>~ Golda Meir",
    "Our lives are fashioned by our choices. First we make our choices. Then our choices make us. <br>~ Anne Frank",
    "Whoever does not see God everywhere does not see Him anywhere. <br>~ Kotzker Rebbe",
    "There are two ways to live. You can live as if nothing is a miracle. You can live as if everything is a miracle. <br>~ Albert Einstein",
    " When we are no longer able to change a situation, we are challenged to change ourselves. <br>~ Viktor Frankl",
    "Life is like riding a bicycle: to keep your balance you must keep moving. <br>~  Albert Einstein",
    "In our life there is a single color, as on an artist&apos;s palette, which provides the meaning of life and art. It is the color of love. <br>~ Marck Shagal",
    "I keep my ideals, because in spite of everything I still believe that people are really good at heart. <br>~ Anne Frank",
    "This will be our reply to violence: to make music more intensely, more beautifully, more devotedly than ever before. <br>~ Leonard Bernstein",
    "Think good and it will be good. <br>~ Menachem Mendel"
  ];



function getmazalMess() {
    let randomNumber = Math.floor(Math.random() * (mazalMess.length));
    document.getElementById('mazalMess').innerHTML = mazalMess[randomNumber];
}

onClick.addEventListener("click", getmazalMess);