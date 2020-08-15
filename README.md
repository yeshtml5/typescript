#setup

- prettier <https://prettier.io/docs/en/options.html>

#github connect

```
git remote add origin https://github.com/yeshtml5/typescript.git
git push -u origin master
git status
git add .
git commit -m "your message"
git push -f origin master
```

### Container Presenter Pattern + Index Pattern

- _props_ 는 부모 컴포넌트가 자식 컴포넌트에게 주는 값, 자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 불가능
- _state_ 컴포넌트 내부에서 선언하며 내부에서 값을 변경 가능
- index.js 에서 Container.js Import
- Container.js : prop, state 를 통해 받은 데이터를 Presenter.js
- Presenter.js : 넘겨 받은 데이터를 출력

### 플러그인

- TypeScript React Code Snippets

### 강좌페이지

- <https://eunajjing.github.io/2019/05/15/woowahan01/>
- <https://react-etc.vlpt.us/06.typescript-basic.html>
- <https://www.youtube.com/watch?v=nViEqpgwxHE>

### Package.json

- moment
- lodash
- chalk
- <https://react-hook-form.com>

---

### Error || Problems

#### 타입스크립트 코드수정해도 Reload가 되지않을때

```
//tsconfig.json 에서
{
    "compilerOptions": {
        "watch": true
    }
}


```

---

### Article

#### GET SOME DATA

- <https://jsonplaceholder.typicode.com/>

  ```
  /posts 100 posts
  /comments 500 comments
  /albums 100 albums
  /photos 5000 photos
  /todos 200 todos
  /users 10 users
  ```

- <https://m.blog.naver.com/PostView.nhn?blogId=gomland&logNo=221553974338&categoryNo=1&proxyReferer=https%3A%2F%2Fwww.google.com%2F>

###

- <https://marketplace.visualstudio.com/items?itemName=humao.rest-client>

---

### Plugin

#### [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

RESTFUL 미리보기 가능

```
GET https://devapi.monpass.im/api/crm/sms/log/?start_date=2019.11.01&end_date=2019.11.30
Content-Type: application/json
token: d4c51ea4c51c8569eff087c637e338194a233085fc711b8ed76a288b2714375c
```
