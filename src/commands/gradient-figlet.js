const gradient = require('gradient-string')
const figlet = require('figlet')

const command = {
  name: 'gradient-figlet',
  description: 'Prints large text with colorful gradients using figlet',
  run: async toolbox => {
    const { parameters, print } = toolbox

    const {
      options: {
        from,
        to,
        l,
        t,
        m
      },
      first
    } = parameters

    function parseColor (c) {
      if (RegExp('[0-9a-fA-F]{6}').test(c)) {
        return '#' + c
      } else {
        return c
      }
    }

    const text = first || 'gradient-figlet'

    figlet(text, function (err, data) {
      if (err) {
        console.log('Something went wrong...')
        console.dir(err)
        return
      }

      let gf

      if (from && to) {
        gf = gradient(parseColor(from), parseColor(to))
      } else if (from || to) {
        print.warning(`Usage: gradient-figlet ${text} --from color --to color`)
        return
      } else if (t) {
        if (t === true) {
          print.warning(`Usage: gradient-figlet ${text} -${l ? 'l' : ''}${m ? 'm' : ''}t theme\n`)

          console.log(`Themes: ${gradient.atlas('atlas')}`)
          console.log(`        ${gradient.cristal('cristal')}`)
          console.log(`        ${gradient.fruit('fruit')}`)
          console.log(`        ${gradient.instagram('instagram')}`)
          console.log(`        ${gradient.mind('mind')}`)
          console.log(`        ${gradient.morning('morning')}`)
          console.log(`        ${gradient.passion('passion')}`)
          console.log(`        ${gradient.pastel('pastel')}`)
          console.log(`        ${gradient.rainbow('rainbow')}`)
          console.log(`        ${gradient.retro('retro')}`)
          console.log(`        ${gradient.summer('summer')}`)
          console.log(`        ${gradient.teen('teen')}`)
          console.log(`        ${gradient.vice('vice')}`)
          return
        }

        switch (t) {
          case 'atlas':
            gf = gradient.atlas
            break
          case 'cristal':
            gf = gradient.cristal
            break
          case 'fruit':
            gf = gradient.fruit
            break
          case 'instagram':
            gf = gradient.instagram
            break
          case 'mind':
            gf = gradient.mind
            break
          case 'morning':
            gf = gradient.morning
            break
          case 'passion':
            gf = gradient.passion
            break
          case 'pastel':
            gf = gradient.pastel
            break
          case 'rainbow':
            gf = gradient.rainbow
            break
          case 'retro':
            gf = gradient.retro
            break
          case 'summer':
            gf = gradient.summer
            break
          case 'teen':
            gf = gradient.teen
            break
          case 'vice':
            gf = gradient.vice
            break
        }
      } else {
        gf = gradient.rainbow
      }

      if (m) {
        console.log(gf.multiline(data))
      } else {
        console.log(gf(data))
      }

      if (l) {
        console.log('')
      }
    })
  }
}

module.exports = command
