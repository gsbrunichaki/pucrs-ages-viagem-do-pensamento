export default class Schema {
    constructor(schema) {
        return class {
            constructor(body) {
                this.body = body
            }

            getBody(params = { setter: true }) {
                return populateFields(schema, this.body, params)
            }

            set(key, value) {
                this.body[key] = value
            }
        }
    }
}

function populateFields(schema, body, params) {
    let content = {}

    //iterate all over body
    for (let key in schema) {
        let field = schema[key]
        
        //firstly, get what the user sent
        if (body[key] !== undefined)
            content[key] = _forceCastBasedOnType(field.type, body[key])
        
        //otherwise, try to get the default value
        else if (field.default !== undefined)
            content[key] = field.default

        //otherwise, check if the field is mandatory
        else if (field.required)
            throw Error(`Missing mandatory field '${key}'.`)

        //now, check if the user did send a function to overwrite current data
        if (field.set && params.setter)
            content[key] = field.set(content[key])
    }

    return content
}

function _forceCastBasedOnType(type, value) {
    switch (type) {
        case Boolean:
            return String(value) === "true"
        
        case Date:
            return new Date(value)

        case Number:
            return Number(value)

        case Object:
            return value || null

        default:
            return value
    }
}