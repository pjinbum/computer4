# computer4

### State란?

- 영단어 state = 상태
- 리액트에서 state = 현재 컴포넌트의 상태를 의미한다.
- React에서 상태를 관리하기 위한 Hook중 하나
- 해당 Component에서 상태를 생성하고, 해당 상태를 변경하는 함수를 같이 반환받을 수 있다.
- State를 사용해 상태를 변경하면 React가 변경된 상태를 감지해서 자동으로 컴포넌트를 다시 렌더링 한다.

함수 컴포넌트에서는 state를 useState( )라는 훅을 사용해서 정의한다. 이렇게 정의한 state는 정의된 이후 자바스크립트 변수를 다루듯이 직접 수정할 수 없다. 엄밀히 말하면 수정이 가능하긴 하지만 그렇게 해선 안된다. ⇒ **state를 변경할 때는 꼭 setState( ) 라는 함수를 이용해야 한다.**

1. 클릭시 뭔가 실행하고 싶으면 onclick 이벤트 핸들러 사용
2. state를 변경하려면 꼭 state변경 함수를 이용해야 한다
3. state 변경 함수는 ( ) 안에 입력한걸로 기존 state를 갈아치워준다

### State 사용법

1. import {useState} from 'react';
2. useState(보관할 자료)
3. let(작명, set작명)

```jsx
let [a, b] = useState('안녕?');
```

**a** : state에 보관한 자료 (변수랑 동일하게 자료 보관)

**b** : state 변경을 도와주는 함수

- useState 예제
    - count :  해당 상태값을 의미하는 변수
    - setCount : 해당 상태값을 변경하는 함수 / 이 함수를 호출할 때 변경된 값을 인수로 전달한다.
    - (0) :  초기 상태 값 / 컴포넌트가 처음 랜더링 될 때 사용
    - useState함수를 호출하면 배열 형태로 ‘count’와 ‘setCount’를 반환한다.
    
    ```jsx
    const [count, setCount] = useState(0);
    
    <div>
      <p>클릭시 + {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
    ```
    
    1.  useState(0) 함수를 호출해 초기값을 0으로 설정
    2. ‘count’와 ‘setCount’를 반환
    3. count : 현재 상태 값
    4. setCount : 상태값을 변경하는 함수
    5. button 클릭시 setCount 함수를 호출해서 count값을 변경하고 변경된 count값을 다시 화면에 랜더링

**JavaScript Destructuring 문법**

- Array 자료 : 여러가지 자료를 한 곳에 보관하고 싶을 때 사용
- 1과 2를 따로 변수로 빼고싶을 때 Array에서 원하는 자료를 뽑아서 변수에 담는 방법

```jsx
let num = [1,2];

let a = num[0]
let b = num[1]

// **Destructuring 문법
// Array 안에 있는 자료를 각각 변수로 빼주는 문법**
let [a, b] = [1,2]
```

### onClick

- 내가 선택한 html 요소를 클릭 했을 때 작성된 자바스크립트 코드를 실행한다. (온클릭 이벤트 핸들러)
- onClick 안에는 아무렇게나 코드를 작성할 수 있는게 아니라, 실행할 코드를 함수에 담아서 그 함수의 이름을 작성 해야한다. (onclick 사용법)

**함수 만드는 법**

함수란? 긴 자바스크립트 코드를 기능별로 묶어주는 기능

```jsx
function 함수(){
  console.log('hahaha');
}
```

따로 함수 선언없이 바로 onClick={console.log('hahaha'); } 이런식으로 작성되면 좋겠지만, 저런식으로 작성하면 바로 에러가 발생한다. 따로 함수 만들기 싫다면 함수 정의 부분을 onClick 안에 담으면 된다.

```jsx
<span onClick={function(){console.log('hahaha');}}>👍</span>
```

더 간단하게 사용하고 싶다면 화살표 함수(Arrow Function)를 사용하면 된다. onClick 안에다가 함수를 선언하기 보다 대개 화살표 함수를 사용한다!

```jsx
<span onClick={()=>{console.log('hahaha')}}>👍</span>
```

### State 변경하는 법

- state는 등호로 변경 할 수 없다.
- state 변경용 함수의 이름은 앞에 set을 붙여준다 ⇒ state변경 함수를 사용해서 값을 변경해야 우리가 원하는대로 html 재렌더링이 이루어진다.

- **버튼 클릭시 리스트 타이틀 변경**
    - 버튼 하나 만들고 그 버튼을 클릭 했을 때 첫번째 리스트 제목 “리액트 재밌어요!” 로 변경하기.
    - state를 수정하고 싶으니까 state변경 함수를 사용
    - state변경 함수는 값이 변경 됐을 때, 자동으로 html을 재렌더링 해서 기존 state값을 변경된 값으로 바꿔준다.
    
    **01**
    
    ```jsx
    <button onClick={()=>{setTitle(['리액트 너무 재밌어요!', 'DW아카데미 503호', 'DW아카데미 201호'])}}>Click</button>
    ```
    
    State값에서 원하는 값만 변경해서 배열을 넣어주면 원하는대로 변경은 되자만,  값이 몇 백개 있을 경우 굉장히 비효율적인 코드가 된다.
    
    **02**
    
    ```jsx
    <button onClick={()=>{
      let titleCopy = [...title];
      titleCopy[0] = '리액트 너무 재밌어요!';
      setTitle(titleCopy);
    }}>Click</button>
    ```
    
    1. array나 object를 다룰 때는 원본을 수정하지 말고, 원본은 보존하는게 좋다. (나중에 원본 데이터가 필요할 때를 위해서)
    2. 변수에다가 원본 자료를 담아준다 (Deep copy)
    3. 원본 자료가 담긴 변수에서 원하는 값을 수정한다.
    4. state 변경 함수에 변경된 변수를 넣어준다

### state 변경 함수 특징 (동작원리)

- state변경 함수는 기존 state와 등호로 비교해서 같은 값이면 변경하지 않는다.

```jsx
<button onClick={()=>{
  let titleCopy = title;
  titleCopy[0] = '리액트 너무 재밌어요!';
  console.log(title == titleCopy)
  setTitle(titleCopy);
}}>Click</button>
```

- Array 데이터 수정하는 문법은 맞는데, 수정이 안되는 이유는 state 변경 함수의 특징인 기존 state와 등호로 비교해서 같은 값이면 변경이 되지 않는다는 게 클릭해도 값이 바뀌지 않는 원인!
- titleCopy 라는 변수에 title값을 담고, array의 0번째 값을 변경 후 console.log로 titleCopy와 title이 같냐고 물어봤을 때 true가 나온다. 값이 변경 됐어도 true가 나오는 이유는 자바스크립트 array 데이터가 동작하는 방식 때문이다.
    
    ![제목 없음.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fb765d45-885c-444d-a56e-213256f5b5d6/%EC%A0%9C%EB%AA%A9_%EC%97%86%EC%9D%8C.png)
    

```jsx
let arr = [1,2,3]

let arrCopy = arr;
arrCopy[0] = 3;

console.log(arr == arrCopy);
```

1. arr이라는 Array에 1,2,3이라는 값이 있을 때 자바스크립트는 이 값을 RAM에 저장한다. 
2. arr이라는 변수는 RAM에 저장된 1,2,3 이라는 값이 어디에 있는지 가르키는 화살표다. 
3. array 안에 있는 데이터 값이 변경 되어도 변수 자체를 변경하지 않았기 때문에 변수가 가르키는 화살표는 바뀌지 않는다.
4. 기존 state arr과 변경된 state를 담은 arrCopy 두 개의 변수를 등호로 비교 했을 때 바뀐 값이 없으므로 true가 나오고, state 변경이 일어나지 않는다. 

😫 Array, Object가 **Reference data type** 타입이라 이런 상황 발생

더 깊게 공부하고 싶다면 **Reference data type**을 공부하자 

**해결방법** ⇒ 변수가 가르키는 화살표를 바꿔주면 된다.

**어떻게? […title] - Deep Copy**

- title이라는 Array의 괄호를 벗겼다가 다시 씌우면서 완전히 독립적인 array 사본이 생성 되면서 변수가 가르키는 화살표가 바뀐다.
- 화살표가 바뀌면 state 변경 함수가 실행 되면서 state가 변경된다.
- 이 때 console.log로 titleCopy와 title이 같냐고 물어보면 false가 나온다. (화살표가 변경 됐기 때문에)

```jsx
<button onClick={()=>{
  let titleCopy = [...title];
  titleCopy[0] = '리액트 너무 재밌어요!';
  console.log(title == titleCopy)
  setTitle(titleCopy);
}}>Click</button>
```

⭐기존 state의 데이터가 Array나 object일 경우, **satate를 수정할 때 항상 […]로 독립적 카피본을 만들어서 수정**한다. (Deep copy로 복사본 생성)⭐
