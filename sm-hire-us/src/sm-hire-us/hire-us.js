// TODO: Add here the editable block attributes
export const BLOCK_ATTRIBUTES = {
    title: {
        type: 'string',
        selector: 'h2',
        default: 'Hire us?',
    },
    fontSize: {
        type: 'number',
        default: 40,
    },
    fontColor: {
        type: 'string',
    },
    backgroundColor: {
        type: 'string',
    },
    subTitle: {
        type: 'string',
        selector: 'p',
        default: 'Stratus Meridian will help you manage your API program and take you the micro-service route.',
    },
    subTitleFontSize: {
        type: 'number',
        default: 20,
    },
    subTitleFontColor: {
        type: 'string',
    },
    subTagText: {
        type: 'string',
        selector: 'a',
        default: 'Hire Us',
    },
    subTagTexFontSize: {
        type: 'number',
        default: 20,
    },
    subTagTexFontColor: {
        type: 'string',
    },
    subTagTextBgColor: {
        typr: 'string'
    },
    imgURL: {
        type: 'string',
        source: 'attribute',
        attribute: 'src',
        selector: 'img'
    },
    imgId: {
        type: 'number'
    },
    imgAlt: {
        type: 'string',
        source: 'attribute',
        attribute: 'alt',
        selector: 'img'
    }
};