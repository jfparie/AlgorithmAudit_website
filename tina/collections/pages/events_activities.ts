/**
 * @type {import('tinacms').Collection}
 */
import facet_groups from "../shared/facets/facet_groups";
import facets from "../shared/facets/facets";
import { TinaField } from "tinacms";
import building_blocks from "../shared/page/building_blocks";
import pdf_frame from "../shared/templates/pdf_frame";

let specific_fields : TinaField[] = [
    facet_groups,
    {
        type: "object",
        name: "events",
        label: "Events",
        list: true,
        fields:
            [
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                    required: true,
                },
                {
                    type: "rich-text",
                    name: "description",
                    label: "Description",
                    templates: [
                        pdf_frame
                    ]
                },
                {
                    type: "image",
                    name: "image",
                    label: "Image",
                    required: true,
                },
                {
                    type: "string",
                    name: "date",
                    label: "Date",
                    required: true,
                    description: "dd-MM-yyyy (e.g. 13-06-2024)"
                },
                facets
            ]
    }
];

export default {
    name: "events_activities",
    label: "Events (activities)",
    path: "content/",
    match: {
        include: '**/events/activities',
    },
    fields: specific_fields.concat(building_blocks)
};