import { ajv } from "../ajv_instance"

const schema = {
    type: 'object',
    properties: {
        DriverName: { type: 'string' },
        Birthday: { type: 'string' },
        PathImageDriver: { type: 'string' },
        TitleCount: { type: 'number' },
        Nationalitty: { type: 'string' },
        IdTeam: { type: 'number' },
    },
    required: ['DriverName', 'Birthday', 'PathImageDriver', 'Nationalitty' ]
}

const validate = ajv.compile(schema)
export default validate