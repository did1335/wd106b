# 憤怒鳥抓豬遊戲解答
1.
```js
moveForward();
moveForward();
```
2.
```js
moveForward();
moveForward();
moveForward();
```
3.
```js
moveForward();
moveForward();
turnRight();
moveForward();
```
4.
```js
moveForward();
turnLeft();
moveForward();
turnRight();
moveForward();
```
5.
```js
turnRight();
moveForward();
turnLeft();
moveForward();
moveForward();
moveForward();
turnLeft();
moveForward();
```
6.
```js
for (var count = 0; count < 5; count++) {
  moveForward();
}
```
7.
```js
turnRight();
for (var count = 0; count < 5; count++) {
  moveForward();
}
```
8.
```js
for (var count = 0; count < 4; count++) {
  moveForward();
}
turnLeft();
for (var count2 = 0; count2 < 5; count2++) {
  moveForward();
}
```
9.
```js
for (var count2 = 0; count2 < 3; count2++) {
  for (var count = 0; count < 2; count++) {
      moveForward();
  }
  turnRight();
}
```
10.
```js
while (notFinished()) {
  moveForward();
}
```
11.
```js
while (notFinished()) {
  moveForward();
  moveForward();
  turnLeft();
}
```
12.
```js
while (notFinished()) {
  moveForward();
  turnLeft();
  moveForward();
  turnRight();
}
```
13.
```js
while (notFinished()) {
  turnRight();
  moveForward();
  turnLeft();
  moveForward();
}
```
14.
```js
while (notFinished()) {
  moveForward();
  if (isPathLeft()) {
    turnLeft();
  }
}
```
15.
```js
while (notFinished()) {
  moveForward();
  if (isPathRight()) {
    turnRight();
  }
}
```
16.
```js
while (notFinished()) {
  moveForward();
  if (isPathLeft()) {
    turnLeft();
  }
}
```
17.
```js
while (notFinished()) {
  moveForward();
  if (isPathRight()) {
    turnRight();
  }
}
```
18.
```js
while (notFinished()) {
  if (isPathForward()) {
    moveForward();
  } else {
    turnLeft();
  }
}
```
19.
```js
while (notFinished()) {
  if (isPathForward()) {
    moveForward();
  } else {
    turnRight();
  }
}
```
20.
```js
while (notFinished()) {
  if (isPathForward()) {
    moveForward();
  } else {
    if (isPathRight()) {
      turnRight();
    } else {
      turnLeft();
    }
  }
}
```


