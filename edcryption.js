const bcrypt = require('bcryptjs');
const crypto = require('crypto')
const md5 = crypto.createHash('md5')

class EDCryption {

    constructor() {
        
    }

    md5HashSync(rawString) {
        return md5.update(rawString, 'utf8').digest('hex')
    }

    bcryptHashSync(rawString, saltRounds = 10) {
        return bcrypt.hashSync(rawString, saltRounds)
    }
    
    bcryptCompareSync(rawString, hashString) {
        return bcrypt.compareSync(rawString, hashString)
    }

    async bcryptHashAsync(rawString, saltRounds = 10, callback) {
        if(callback && typeof callback === "function") {
            bcrypt.hash(rawString, saltRounds, (error, data) => {
                callback(error, data);
            })
        } else {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await bcrypt.hash(rawString, saltRounds)
                    return resolve(data)
                } catch (error) {
                    return reject(error)
                }
            })
        }
    }

    async bcryptCompareAsync(rawString, hashString, callback) {
        if(callback && typeof callback === "function") {
            bcrypt.compare(rawString, hashString, (error, result) => {
                callback(error, result)
            })
        } else {
            return new Promise(async (resolve, reject) => {
                try {
                    const result = await bcrypt.compare(rawString, hashString)
                    return resolve(result)
                } catch (error) {
                    return reject(error)
                }
            })
        }
    }

}

const EDCryptionShareInstance = new EDCryption()

module.exports = EDCryptionShareInstance