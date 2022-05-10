/*
 * 迷路の最短距離を求める
 * 
 * input
 * 配列に各行が入っている。
 * 0: 道, 1: 壁, s: スタート, g: ゴール
 * 
 * output
 * sからgまでの最短ルートを出力。
 * ゴール不可能な場合は、-1を返却。
 */

const input = [
  "1s01",
  "0010",
  "0110",
  "001g",
  "0010",
  "0000"
];

function bfs(table) {
  let d = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  let h = table.length;
  let w = table[0].length;

  // スタートとゴールをみつける。
  let start = [];
  let goal = [];
  for(let i = 0; i < table.length; i++) {
    for(let k = 0; k < table[i].length; k++) {
      if(table[i][k] == "s") start = [i, k];
      if(table[i][k] == "g") goal = [i, k];
    }
  }

  let queue = [];
  let min = [...Array(h)].map(n => [...Array(w)].fill("*"));
  queue.push(start);
  min[start[0]][start[1]] = 0;
  while(queue.length > 0) {
    let point = queue.shift();
    if(point[0] == goal[0] && point[1] == goal[1]) {
      break;
    }
    
    for(let i = 0; i < d.length; i++) {
      let next_y = point[0] + d[i][0];
      let next_x = point[1] + d[i][1];
      
      if(next_y < 0 || w <= next_x) continue;
      if(next_x < 0 || h <= next_y) continue;
      if (table[next_y][next_x] === '1') continue;
      if (min[next_y][next_x] !== '*') continue;

      queue.push([next_y, next_x]);
      min[next_y][next_x] = min[point[0]][point[1]] + 1;
    }
  }

  let result = min[goal[0]][goal[1]];

  return result != "*" ? result : -1;
}

console.log(bfs(input));