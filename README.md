# 🃏 React memory card game

###### This is just an \[🔬 experiment\].

#### Description:
 A React based version of the memory card game, flip the cards over and match the pairs with the fewer attempts as possible!

 You have 10 couples of cards in different colors, you will see all them for a second and then they will be covered. You have to find the matches unveiling the cards with the same colors by recalling your memory.

#### How are the colors generated? 🎨
The color of each couple is equally spaced in the HUE space (every couple of cards has a maximum difference from the closest color of `360 / numberOfCouples` degree in the HUE space).

The more couples you play with (the number of couples is a configurable field), the more the difference between colors became tiny and the more the game become difficult.

```javascript
//old
generateColor( coupleIndex ){

    let step = 360 / this.props.couples;
    let hue = step * coupleIndex;
    return `hsl(${hue}, 70%, 50%)`;

}
```
**update:** to add a more differentiation in the colors generated yet keeping them equally spaced in the HUE space, I have added a `colorSalt` random number to shift them all and make the colors slightly different in any new game.
```javascript
//latest
generateColor( coupleIndex  ){

    let step = 360 / this.props.couples;
    let h = (step * coupleIndex + this.state.colorSalt) % 360;
    return `hsl(${h}, 70%, 50%)`;

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
