const EDCryptionShareInstance = require("./edcryption")
const saltRounds = 10
const myPlaintextPassword = 's0/\/\P4$$w0rD'
const someOtherPlaintextPassword = 'not_bacon'

const source = '123456'
let result = EDCryptionShareInstance.md5HashSync(source)
console.log(result)
console.log(EDCryptionShareInstance.bcryptHashSync(result, saltRounds))
console.log(EDCryptionShareInstance.bcryptCompareSync(result, EDCryptionShareInstance.bcryptHashSync(result, saltRounds)))