/**
 * External dependencies
 */
import React from 'react';
import { element, i18n, components, editor } from 'wp';

/**
 * Internal dependencies
 */
import './style.scss';
import {BLOCK_ATTRIBUTES} from './hire-us';


const { Fragment } = element;
const { __ } = i18n;

// TODO: Chooose components for the sidebar settings
const { PanelBody, FontSizePicker, Button } = components;
const { InspectorControls, PanelColorSettings, RichText, MediaUploadCheck, MediaUpload } = editor;

const FONT_SIZES = [
  { name: 'small', shortName: 'S', size: 28 },
  { name: 'regular', shortName: 'M', size: 40 },
  { name: 'large', shortName: 'L', size: 56 },
  { name: 'larger', shortName: 'XL', size: 72 },
];


export const name = 'sm-hire-us';

export const settings = {
  title: __('SM Hire Us'),

  description: __('A custom block for Gutenberg Cloud'),

  icon: 'cover-image',

  attributes: BLOCK_ATTRIBUTES,

  edit({ attributes, className, setAttributes }) {
    const { title, fontSize, fontColor, backgroundColor, subTitleFontSize, subTitleFontColor, subTitle, subTagTexFontSize, subTagTexFontColor, subTagTextBgColor, subTagText } = attributes;
    const containerStyle = {
      backgroundColor,
    };
    const titleStyle = {
      fontSize: fontSize && `${fontSize}px`,
      color: fontColor,
    };
    const subTitleStyle = {
      fontSize: subTitleFontSize && `${subTitleFontSize}px`,
      color: subTitleFontColor,
    };
    const subTagTextStyle = {
      fontSize: subTagTexFontSize && `${subTagTexFontSize}px`,
      color: subTagTexFontColor,
      backgroundColor: subTagTextBgColor
    };

    const onFileSelect = (image) => {
      setAttributes({
        imgURL: image.url,
        imgId: image.id,
        imgAlt: image.alt
      })
    }

    const onRemoveImage = () => {
      setAttributes({
        imgURL: null,
        imgId: null,
        imgAlt: null
      })
    }

    return (
      <Fragment>
        {/* Block markup (main editor) */}
        <div className={className} style={containerStyle}>
          <section class="sm-hire-us valign-wrapper">
            <div class="container">
              <div class="hire-us-container">
                <div class="inner-content-wrapper center-align">
                  {
                    (attributes.imgURL) ? (
                      <span class="bg-circle">
                        <img class="sm-svg-bg" src={attributes.imgURL}
                          alt={attributes.imgAlt}
                        />
                        <Button
                          onClick={onRemoveImage}>
                          Remove
                        </Button>
                      </span>
                    ) : (
                        <MediaUploadCheck>
                          <MediaUpload
                            onSelect={onFileSelect}
                            value={attributes.imgId}
                            type="image"
                            render={({ open }) =>
                              <Button onClick={open}>
                                upload Background Image
                        </Button>
                            }
                          />
                        </MediaUploadCheck>
                      )
                  }
                  <RichText
                    tagName="h2" value={title} style={titleStyle}
                    placeholder="Title"
                    onChange={value => setAttributes({ title: value })}
                    inlineToolbar
                  />
                  <RichText
                    tagName="p" value={subTitle} style={subTitleStyle}
                    placeholder="Title"
                    onChange={value => setAttributes({ subTitle: value })}
                    inlineToolbar
                  />
                  <RichText
                    tagName="button" value={subTagText} style={subTagTextStyle}
                    placeholder="Title"
                    onChange={value => setAttributes({ subTagText: value })}
                    inlineToolbar
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <InspectorControls>
          {/* Block settings (sidebar) */}
          <PanelBody title={__('Settings')} initialOpen={true}>
            <FontSizePicker
              fontSizes={FONT_SIZES} fallbackFontSize={56} value={fontSize}
              onChange={value => setAttributes({ fontSize: value })}
            />
          </PanelBody>

          <PanelColorSettings
            title={__('Color Settings')} initialOpen={false}
            colorSettings={[
              {
                value: fontColor,
                onChange: value => setAttributes({ fontColor: value }),
                label: __('Font Color'),
              }, {
                value: backgroundColor,
                onChange: value => setAttributes({ backgroundColor: value }),
                label: __('Background Color'),
              },
            ]} />
          <PanelBody title={__('Sub Title Settings')} initialOpen={true}>
            <FontSizePicker
              fontSizes={FONT_SIZES} fallbackFontSize={56} value={fontSize}
              onChange={value => setAttributes({ fontSize: value })}
            />
          </PanelBody>

          <PanelColorSettings
            title={__('Sub Title Color Settings')} initialOpen={false}
            colorSettings={[
              {
                value: subTitleFontColor,
                onChange: value => setAttributes({ subTitleFontColor: value }),
                label: __('Font Color'),
              }
            ]} />

          <PanelBody title={__('Sub Tag Text Settings')} initialOpen={true}>
            <FontSizePicker
              fontSizes={FONT_SIZES} fallbackFontSize={30} value={subTagTexFontSize}
              onChange={value => setAttributes({ subTagTexFontSize: value })}
            />
          </PanelBody>

          <PanelColorSettings
            title={__('Sub Tag Text Color Settings')} initialOpen={false}
            colorSettings={[
              {
                value: subTagTexFontColor,
                onChange: value => setAttributes({ subTagTexFontColor: value }),
                label: __('Sub Tag Font Color'),
              }, {
                value: subTagTextBgColor,
                onChange: value => setAttributes({ subTagTextBgColor: value }),
                label: __('Sub Tag Background Color'),
              },
            ]} />
        </InspectorControls>
      </Fragment>
    );
  },

  save({ attributes, className }) {
    const { title, fontSize, fontColor, backgroundColor, subTitleFontSize, subTitleFontColor, subTitle, subTagTexFontSize, subTagTexFontColor, subTagTextBgColor, subTagText } = attributes;
    const containerStyle = {
      backgroundColor,
    };
    const titleStyle = {
      fontSize: fontSize && `${fontSize}px`,
      color: fontColor,
    };
    const subTitleStyle = {
      fontSize: subTitleFontSize && `${subTitleFontSize}px`,
      color: subTitleFontColor,
    };
    const subTagTextStyle = {
      fontSize: subTagTexFontSize && `${subTagTexFontSize}px`,
      color: subTagTexFontColor,
      backgroundColor: subTagTextBgColor
    };

    return (
      <div className={className} style={containerStyle}>
        <section class="sm-hire-us valign-wrapper">
          <div class="container">
            <div class="hire-us-container">
              <div class="inner-content-wrapper center-align">
                <span class="bg-circle">
                  <img class="sm-svg-bg" src={attributes.imgURL} alt={attributes.imgAlt} />
                </span>
                <RichText.Content tagName="h2" style={titleStyle} value={title} />
                <RichText.Content tagName="p" style={subTitleStyle} value={subTitle} />
                <RichText.Content tagName="button" style={subTagTextStyle} value={subTagText} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  },
};
