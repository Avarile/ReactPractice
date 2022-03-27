27/march/2022

#### constants.tx

1. why the password cached key is "IS_SIMPLE" ???

#### utils/tools.tsx

1. escape / unescape is deprecated use encodeURI / decodeURI instead
2. minor bug

```
  export const getUrlParam = (url: string, name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const search = url.split('?')[1]
  if (search) {
    const r = search.substr(0).match(reg)
    if (r !== null) return unescape(r[2])
    return ''  // unnessary minor bug
  } else {
    return ''
  }
}

```

3. handwriting uuid... replaced it with nanoid

```
import { customAlphabet } from 'nanoid'
export const generateNanoid = async () => {
  const nanoid = customAlphabet('1234567890abcdef', 10)
  return await nanoid()
}

```

4. use dayjs replace entire current time generation and format

```
import dayjs from 'dayjs';

dayjs().format() will do the trick // :) trust me it works very good

```

5. rewrote /_ 剔除对象的空属性 _/

```
export const refineArray = (array: []) => {
  return array.filter((a) => a)
}

```

#### completely rewrote the Storage.ts



about the Front end archtect
