//DFS 각 노드를 맹목적으로 탐색할 때 사용
// 스택 자료구조를 활용
//1. 연결 관계를 알수 있는 배열 -> 트리구조나 그래프의 연결 관계
//2. 탐색해야 할 인접노드를 저장할 장소

let number = 7
let c = new Array(8).fill(false)
let a = new Array(8).fill().map(_ => new Array().fill())

a[1].push(2)
a[2].push(1)

a[1].push(3)
a[3].push(1)

a[2].push(3)
a[3].push(2)

a[2].push(4)
a[4].push(2)

a[2].push(5)
a[5].push(2)

a[3].push(6)
a[6].push(3)

a[3].push(7)
a[7].push(3)

a[4].push(5)
a[5].push(4)

a[6].push(7)
a[7].push(6)

dfs(1)


function dfs(x){
  if(c[x]) return;
  c[x] = true
  console.log(x);
  for(let i=0; i<a[x].length; i++){
    let y = a[x][i];
    dfs(y)
  }
}