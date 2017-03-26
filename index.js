var pinyin = require('pinyin')
var pinyinlite = require('pinyinlite')
let a_name = "艾老师"
let b_name = "周老师"

let aNamePinyin = pinyin(a_name, { style: pinyin.STYLE_NORMAL }).map( arr => arr[0] ).join('_')
let bNamePinyin = pinyin(b_name, { style: pinyin.STYLE_NORMAL }).map( arr => arr[0] ).join('_')
console.log(aNamePinyin.localeCompare(bNamePinyin));

let aNamePinyinlite = pinyinlite(a_name).map( arr => arr[0]).join('_')
let bNamePinyinlite = pinyinlite(b_name).map( arr => arr[0]).join('_')
console.log(aNamePinyinlite)
console.log(bNamePinyinlite)
console.log(aNamePinyinlite.localeCompare(bNamePinyin));
