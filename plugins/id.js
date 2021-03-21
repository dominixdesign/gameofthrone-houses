export default ({ app }, inject) => {
  inject('id', url => url.replace('https://www.anapioficeandfire.com/api', ''))
}
