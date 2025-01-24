import { ajv } from "../ajv_instance"

const schema = {
    type: 'object',
    properties: {
        TeamName: { type: 'string' },
        Country: { type: 'string' },
        About: { type: 'string' },
        PathImage: { type: 'string' },
    },
    required: [ 'TeamName', 'Country', 'About', 'PathImage' ]
    
}

const validate = ajv.compile(schema)
export default validate

