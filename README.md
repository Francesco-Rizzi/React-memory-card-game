# 🃏 React memory card game

###### \[this is just an exercise\]

#### Description:
 A React based version of the memory card game, flip the cards over and match the pairs with the fewer attempts as possible! [try it live](http://francescorizzi.info/experiments/react-memory-card-game)

 You have 10 couples of cards in different colors, you will see all them for a second and then they will be covered. You have to find the matches unveiling the cards with the same colors by recalling your memory.

#### How are the colors generated? 🎨
The color of each couple is equally spaced in the HUE space (every couple of cards has a maximum difference from the closest color of `360 / numberOfCouples` degree in the HUE space).

The more couples you play with (the number of couples is a configurable prop), the more the difference between colors became tiny and the more the game become difficult.

```javascript
generateColor( coupleIndex ){

    let step = 360 / this.props.couples;
    let hue = step * coupleIndex;
    return `hsl(${hue}, 70%, 50%)`;

}
```


#### Tech stuff 👾:
- React ⚛️
- Lodash
- Bootstrap
- SASS
- CSS
- Babel
- Webpack
- NPM 📦
- Mocha
- Chai