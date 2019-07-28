// TODO: Add here the editable block attributes
export const BLOCK_ATTRIBUTES = {
    title: {
      type: 'string',
      selector: 'h2',
      default: 'Stay in the know',
    },
    fontSize: {
      type: 'number',
      default: 40,
    },
    fontColor: {
      type: 'string',
    },
    subText: {
      type: 'string',
      selector: 'p',
      default: 'Get special offers on the latest developments from Stratus Meridian',
    },
    subTextFontSize: {
      type: 'number',
      default: 30,
    },
    subTextFontColor: {
      type: 'string',
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