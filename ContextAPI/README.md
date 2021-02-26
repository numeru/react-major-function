# Context API

- context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있다.
- context를 사용하면 컴포넌트를 재사용하기가 어려워지므로 꼭 필요할 때만 써야한다.

---

## 예제 코드

- store.jsx
- app.jsx
  - counter.jsx

1. store
   Context API 생성.

```
// Context Instance
const AppContext = createContext();

// Provider (useReducer)
export const AppProvider = ({ children }) => {
  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Consumer (useContext)
export const useAppContext = () => useContext(AppContext);
```

2. app
   Context API가 사용되어질 곳을 Provider로 감싼다.

```
const App = () => {
  return (
    <AppProvider>
      <Counter />
    </AppProvider>
  );
};

export default App;
```

3. counter
   Context API를사용하는 곳에서 Consumer를 호출한다.

```
const Counter = () => {
  const { state, dispatch } = useAppContext();
  ...
};

export default Counter;
```
