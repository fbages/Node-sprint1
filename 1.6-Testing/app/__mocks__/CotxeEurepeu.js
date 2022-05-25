const Cotxe = require('./Cotxe')
class CotxeEuropeu extends Cotxe.Cotxe {

    getmodel() {
        return this.model = "Model europeu";
    }
}

module.exports = {
    CotxeEuropeu
}