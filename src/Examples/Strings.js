const Thousands = (num) => {
  num = num.toFixed(2) // Round to 2 decimal places
  var str = num.toString()
  var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
  return str.replace(reg, "$1,")
}


