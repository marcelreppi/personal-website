// https://www.math.uni-hamburg.de/it/dienste/encryptma.html

function uncryptMailTo(s) {
  let n = 0
  let r = ""
  for (let i = 0; i < s.length; i++) {
    n = s.charCodeAt(i)
    if (n >= 8364) {
      n = 128
    }
    r += String.fromCharCode(n - 1)
  }
  return r
}

const encryptedMail = "nbjmup;nbsdfmsfqqjAhnbjm/dpn"

export function linkToUncryptMailTo() {
  location.href = uncryptMailTo(encryptedMail)
}
