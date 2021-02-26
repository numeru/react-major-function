# Hooks

## useState

- 함수형 컴포넌트에서 state를 가질 수 있게 한다.
- 첫 번째 요소는 state이고 두 번째 요소는 state의 상태를 설정할 수 있는 함수이다.

```
const [count, setCount] = useState(0);
```

---

## useEffect

- 임의의 상황에서 특정 작업을 수행하도록 설정한다.

1. 마운트될 때만

```
useEffect(() => {
  console.log("mount");
}, []);
```

2. 특정 값이 업데이트될 때만

```
useEffect(() => {
  console.log(num);
}, [num]);
```

3. 언마운트되기 전에만

```
useEffect(() => {
  console.log("effect");
  return () => {
    console.log("unmount");
  }
}, []);
```

4. 특정 값이 업데이트되기 전에만

```
useEffect(() => {
  console.log("effect");
  console.log(num);
  return () => {
    console.log("update");
  }
}, [num]);
```

---

## useRef

1. 값이 바뀌어도 렌더링이 되지 않는 로컬 변수를 만든다.

```
const name = useRef("");
```

2. Dom을 참조하기 위한 방법으로도 사용될 수 있다.

```
const inputEl = useRef(null);
return (
  <>
    <input ref={inputEl} type="text" />
  </>
);
```

---

## useCallback

- dependency가 바뀌지 않으면 재선언 되지 않는 함수를 만든다.
- 불필요한 렌더링을 방지할 수 있다.
- 다른 컴포넌트에 prop으로 전달되는 함수에 사용하여 주는 것이 좋다.

```
const callbackFunc = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

---

## useMemo

- dependency가 바뀌지 않으면 재계산 되지 않는 값을 만든다.
- 어떠한 값을 return하는 함수에 사용한다.

1. 함수 실행이 오래 걸리는 경우

```
const result = useMemo(() => {
  return slowFunction(num);
}, [num]);
```

2. 객체를 dependency로 갖는 useEffect의 경우

- 객체대신 객체를 return하는 함수를 useMemo로 감싸서 사용한다.
- 이 경우 객체 내부가 바뀌지 않는한 객체가 재선언되지 않는다.
- 따라서 객체내부가 바뀔 때만 useEffect가 작동한다.

```
const [dark, setDark] = useState(false);

const themeStyle = useMemo(() => {
  return {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
}, [dark]);

useEffect(() => {
  console.log("Theme Changed");
}, [themeStyle]);
```

---

## useReducer

- 상태 관련 로직이 복잡할 경우에 사용할 수 있다.

```
const [state, dispatch] = useReducer(reducer, initialState);
```

1. dispatch에는 type이 담긴 객체가 들어간다.

```
dispatch({ type: "INCREMENT" }
```

2. reducer함수에서 type에 따라 state를 업데이트 한다.

```
const reducer = (prev, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...prev,
        count: prev.count + 1,
      };
    case DECREMENT:
      return {
        ...prev,
        count: prev.count - 1,
      };
    default:
      return prev;
  }
};
```
