/**
 * 声明，本项目仅帮助大家学习技术及娱乐，切勿将修改后的网站大规模传播及商用，以避免侵权！
 */

// 额外分数：修改数字
let extraScore = 1;

// 无敌模式：true 改为 false
let wuDi = true;

// 게임을 시작할 떄 가장 먼저 떨어지는 과일을 지정할 수 있음 (기본: 0번과일)
let firstFruit = 0;

// 리버스 옵션 설정 가능 (true: 큰 과일 -> 작은과일 / false: 작은과일 -> 큰과일)
let reverseLevelUp = false;

// 떨어지는 과일의 범위를 지정
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 生成随机水果最小值（0-10）0 为葡萄，9 为半个西瓜
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 生成随机水果最大值（1-11）0 为葡萄，9 为半个西瓜
let setFruits = {
  // 게임 시작 후 7회까지 떨어지는 과일의 조정 가능
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 떨어지는 과일의 물리법칙을 설정할 수 있음 ( 0~1까지 조절 가능)
// 0.9 등 소숫점 포함
let fruitQTan = false;

// 떨어지는 고일의 속도를 조절할 수 있음 ( 0~5까지)
let fruitSlowDown = false;

// 오른쪽 버튼을 클릭할 때 과일을 바꿀 수 있는지 여부를 설정(false: 교체불가 / true: 교체가능)
let clickChangeFruit = true;

// 게임 사이트의 홈페이지 제목을 지정할 수 있음
document.getElementsByTagName("title")[0].innerText = 'seonyoung bano';

// 开启选分弹窗：将 false 改为 true
let selectModal = false;

