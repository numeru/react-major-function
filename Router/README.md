# Router

SPA에서 다른 주소에 다른 화면이 보이도록 만들어준다.

---

## 예제 코드

- index.js
  - app.jsx
    - home.jsx
    - page.jsx
    - setting.jsx

1. index.js
   Router를 사용하고 싶은 컴포넌트를 BrowserRouter로 감싼다.

```
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

2. app.js
   Route로 경로를 지정하여 준다.

- component

```
<Route exact path="/" component={Home} />
```

- children

```
<Route exact path="/page">
  <Page/>
</Route>
```

---

## props를 전달하는 방법

- component

```
<Route
  exact
  path="/setting"
  render={(props) => <Setting {...props} data={data} />}
/>
```

- children

```
<Route exact path="/page">
  <Page data={data} />
</Route>
```

---

## Switch

- 자식 컴포넌트 Route또는 Redirect중 매치되는 첫 번째 요소를 렌더링한다.
- Switch를 사용하면 매치되는 요소 하나를 **무조건** 렌더링하므로,  
  이를 통해 잘못된 주소로 갔을 때 원하는 화면을 보여줄 수 있다.

```
<Switch>
  <Route exact path="/" component={Home} />

  <Route exact path="/setting" component={Setting} />

  <Route exact path="/page" component={Page} />

  <Route
    render={({ location }) => (
      <div>
        <h3>이 페이지는 존재하지 않습니다.</h3>
        {location.pathname}
      </div>
    )}
  />
</Switch>
```

---

## Link

- to속성에 설정된 링크로 이동합니다.
- 기록이 history스택에 저장됩니다.

```
<Link to="/">home</Link>
<Link to="/setting">setting</Link>
<Link to="/page">page</Link>
```

---

## Redirect

조건을 만족하지 못했을 때 임의의 페이지로 되돌아가게 할 수 있다.

- component

```
<Route
  exact
  path="/setting"
  render={(props) => {
    if (loggedIn) return <Setting {...props} />;
    else
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      );
  }}
/>

```

- children

```
<Route exact path="/page">
  {loggedIn ? <Page /> : <Redirect to="/" />}
</Route>
```

---

## Match, Location, History

Route와 연결된 컴포넌트에는 props로 match, location, history라는 객체를 전달된다.

```
const Home = ({match, location, history}) => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
```

1. match
   path와 URL이 매칭된 대한 정보가 담겨져있다.

- path : 라우터에 정의된 path
- url : 실제 클라이언트로부터 요청된 url path
- isExact : true일 경우, 전체 경로가 완전히 매칭될 경우에만 요청을 수행
- params : url path로 전달된 파라미터 객체

2. location
   location 객체에는 현재 페이지의 정보를 가지고 있다.

- pathname : 현재 페이지의 경로명
- search : 현재 페이지의 query
- hash : 현재 페이지의 hash

3. history
   현재까지 이동한 url 경로들이 담겨있는 형태로, 주소를 임의로 변경하거나 되돌아갈 수 있도록 해준다.

- length : 전체 history 스택의 길이
- action : 최근에 수행된 action
- location : 최근 경로 정보
- push(f) : 새로운 경로를 history 스택으로 푸시하여 페이지를 이동
- replace(f) : 최근 경로를 history 스택에서 교체하여 페이지를 이동
- go(f) : : history 스택의 포인터를 n번째로 이동
- goBack(f) : 이전 페이지로 이동
- goForward(f) : 앞 페이지로 이동
