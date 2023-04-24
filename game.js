// section1 - 숫자범위 설정하기
const $generateNumber = document.querySelector('#generate-number');
const $generateNumberBtn = document.querySelector('#generate-number-btn');
const $section1 = document.querySelector('#section1');
const $section1Div = document.querySelector('.section1-div');

$generateNumberBtn.addEventListener('click', () => {
  if (Number($generateNumber.value) < 2 || isNaN(Number($generateNumber.value)) === true) {
    alert('2 이상의 숫자를 입력하세요!');
  } else {
    $section1Div.classList.add('hidden');
    const newDiv = document.createElement('div');
    $section1.appendChild(newDiv);
    newDiv.classList.add('newdiv');
    newDiv.textContent = `0~${$generateNumber.value}`;
  }
});

// section2 - 당신의 숫자는?
const $yourNumber = document.querySelector('#your-number');
const $yourNumberBtn = document.querySelector('#your-number-btn');
const $section2 = document.querySelector('#section2');
const $section2Div = document.querySelector('.section2-div');

$yourNumberBtn.addEventListener('click', () => {
  if ($generateNumber.value === "") {
    alert('숫자범위를 설정하세요!');
  } else {
    if ($yourNumber.value === "" || Number($yourNumber.value) > Number($generateNumber.value) || isNaN(Number($yourNumber.value)) === true) {
      alert('숫자범위 안의 숫자를 입력하세요!');
    } else {
      $section2Div.classList.add('hidden');
      const newDiv = document.createElement('div');
      $section2.appendChild(newDiv);
      newDiv.classList.add('newdiv');
      newDiv.textContent = $yourNumber.value;
    }
  }
});

//section3 - 컴터의 선택은?
const $section3 = document.querySelector('#section3');
const $playBtn = document.querySelector('#play-btn');
const $machineNumber = document.querySelector('#machine-number');
const $winOrLost = document.querySelector('#win-or-lost');

$playBtn.addEventListener('click', () => {
  if ($generateNumber.value === "") {
    alert('숫자범위를 설정하세요!');
  } else {
    if ($yourNumber.value === "") {
      alert('당신의 숫자를 입력하세요!');
  } else {
    const randomNumber = Math.floor(Math.random(1) * (Number($generateNumber.value) + 1));
    $machineNumber.textContent = randomNumber;
    if (parseInt($yourNumber.value) === randomNumber) {
      $winOrLost.textContent = '이겼습니다🥳';
    } else {
      $winOrLost.textContent = '졌습니다🥲';
    }
  }
}
});