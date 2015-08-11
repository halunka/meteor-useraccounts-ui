getFormData = function getFormData (form) {
  return _.object(
    _.map(
      [].slice.call(
        form.querySelectorAll('input, textarea')
      ),
      function (element) {
        return [element.name, element.value]
      }
    )
  )
}

getForm = function getForm (element) {
  if(element.tagName === 'FORM') return element
  return getForm(element.parentNode)
}
