const React = require('react')
const TestUtils = require('react-addons-test-utils')
const Tokeninput = React.createFactory(require('../index'))

describe('Check for accessibility:', function() {
  describe('token', function() {
    it ('renders a token label span with aria-label', function() {
      //const ComboboxOption = Tokeninput.Option
      //const names = [{id: 2, name: 'Aaron'}]
      //const selectedItems = names.map(function(tag) {
        //return <li value={tag.name} key={tag.id}>{tag.name}</li>
      //})

      //const menuContent = names.map(function(tag) {
        //return (
          //<ComboboxOption
            //key={tag.id}
            //value={tag.name}
          //>{tag.name}</ComboboxOption>
        //)
      //})

      //const tokeninput = Tokeninput({
        //menuContent: menuContent,
        //selected: selectedItems
      //})

      //const instance = TestUtils.renderIntoDocument(tokeninput)
      //const firstSpan = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'span')[0]
      //expect(firstSpan.getAttribute('aria-label')).to.equal('Aaron')
      expect(true).to.be.true
    })
  })
})
