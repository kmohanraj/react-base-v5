# React + TypeScript + Vite

#### Create React Application 
```shell
npm create vite@latest create-react -- --template react-ts
```

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@": ["./src"],
      "@/*": ["./src/*"],
      "@components": ["./src/components"]
    }
  }
}
```
