/**
 * @type {import('tinacms').TinaField}
 */
export default {
    type: "object",
    name: "facets",
    label: "Categories",
    list: true,
    fields: [
        {
            type: "string",
            name: "value",
            label: "Value",
            required: true,
            description: "With the group name value as prefix (i.e. method_deeplearning)"
        },
        {
            type: "string",
            name: "label",
            label: "Label",
            required: true,
        },
        {
            type: "boolean",
            name: "hide",
            label: "Hide",
        }
    ]
}