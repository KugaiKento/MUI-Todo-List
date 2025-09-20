## Material UI を使って ToDo リストを作る取っ掛かり

MUI のインストール方法

[公式ドキュメントを参照
](https://mui.com/material-ui/getting-started/installation/)

```bash
npm install @mui/material @emotion/react @emotion/styled
```

これでインストールは完了

App.tsx に追加してみる。

```tsx
import { Button } from "@mui/material";

function App() {
  return (
    <>
      <Button variant="contained">Hello World</Button>
    </>
  );
}

export default App;
```

![alt text](readmeimage/image.png)
