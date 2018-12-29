# React Click Outside (again with ts and renderprop pattern)

### Usage

```bash
git clone https://github.com/tclain/click-outside-render-prop 
cd click-outside-render-prop

# Run npm install and write your library name when asked. That's all!
npm install
```


### Features

Basically the same as tj/click-outside, but with a render prop flavour and written in typescript !

### Importing the library

```javascript
import ClickOutside from 'click-outside-render-prop'


export const App = () => {
    return <ClickOutside onClickOutside={console.log}>
        {({ref}) => (
            <MyComponentWrapper ref={ref} />
        )}
    </ClickOutside>
}
```


### NPM scripts

 - `npm t`: Run test suite
 - `npm start`: Run `npm run build` in watch mode
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run build`: Generate bundles and typings, create docs
 - `npm run lint`: Lints code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)



