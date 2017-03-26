var pinyin = require('pinyin')
let a_name = "周爱请"
let b_name = "的人"

let aNamePinyin = pinyin(a_name, { style: pinyin.STYLE_NORMAL }).map( arr => arr[0] ).join('_')
let bNamePinyin = pinyin(b_name, { style: pinyin.STYLE_NORMAL }).map( arr => arr[0] ).join('_')
console.log(aNamePinyin.localeCompare(bNamePinyin));
