import EDCryptionShareInstance from "./edcryption.js"

const saltRounds = 10
const myPlaintextPassword = 's0/\/\P4$$w0rD'
const someOtherPlaintextPassword = 'not_bacon'

let result = EDCryptionShareInstance.bcryptHashSync(myPlaintextPassword, saltRounds)
console.log(EDCryptionShareInstance.bcryptCompareSync(myPlaintextPassword, result))
console.log(EDCryptionShareInstance.bcryptCompareSync(someOtherPlaintextPassword, result))