/**
 * External dependencies
 */
import React from 'react';
import { element, i18n, components, editor } from 'wp';

/**
 * Internal dependencies
 */
import './style.scss';
import { BLOCK_ATTRIBUTES } from './stay-in-the-know';


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


export const name = 'sm-stay-in-the-know';

export const settings = {
  title: __('SM Stay in the know'),

  description: __('A custom block for Gutenberg Cloud'),

  icon: 'cover-image',

  attributes: BLOCK_ATTRIBUTES,

  edit({ attributes, className, setAttributes }) {
    const { title, fontSize, fontColor, backgroundColor, subTextFontSize, subText, subTextFontColor } = attributes;
    const containerStyle = {
      backgroundColor,
    };
    const titleStyle = {
      fontSize: fontSize && `${fontSize}px`,
      color: fontColor,
    };

    const subTextStyle = {
      fontSize: subTextFontSize && `${subTextFontSize}px`,
      color: subTextFontColor,
    }

    const onFileSelect = (image) => {
      setAttributes({
        imgURL: image.url,
        imgId: image.id,
        imgAlt: image.alt
      })
    }

    const onRemoveImage = (image) => {
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
          <section class="section sm-stay-in-the-know valign-wrapper">
            <div class="container">
              <div class="inner-content-wrapper center-align">
                <RichText
                  tagName="h2" value={title} style={titleStyle}
                  placeholder="Title"
                  onChange={value => setAttributes({ title: value })}
                  inlineToolbar
                />
                <RichText
                  tagName="p" value={subText} style={subTextStyle}
                  placeholder="sub text"
                  onChange={value => setAttributes({ subText: value })}
                  inlineToolbar
                />
              </div>
              <div class="sm-input-container">
                <form>
                  <input class="sm-input-box z-depth-0" type="email" placeholder="Enter your Email Address" />
                </form>
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

          <PanelBody title={__('Sub Text Settings')} initialOpen={true}>
            <FontSizePicker
              fontSizes={FONT_SIZES} fallbackFontSize={40} value={subTextFontSize}
              onChange={value => setAttributes({ subTextFontSize: value })}
            />
          </PanelBody>

          <PanelColorSettings
            title={__('SUb Text Color Settings')} initialOpen={false}
            colorSettings={[
              {
                value: subTextFontColor,
                onChange: value => setAttributes({ subTextFontColor: value }),
                label: __('Sub Text Font Color'),
              },
            ]} />
        </InspectorControls>
      </Fragment>
    );
  },

  save({ attributes, className }) {
    const { title, fontSize, fontColor, backgroundColor, subTextFontSize, subTextColor, subText } = attributes;
    const containerStyle = {
      backgroundColor,
    };
    const titleStyle = {
      fontSize: fontSize && `${fontSize}px`,
      color: fontColor,
    };

    const subTextStyle = {
      fontSize: subTextFontSize && `${subTextFontSize}px`,
      color: subTextColor,
    }

    return (
      <div className={className} style={containerStyle}>
        <section class="section sm-stay-in-the-know valign-wrapper">
          <div class="container">
            <div class="inner-content-wrapper center-align">
              <RichText.Content tagName="h2" style={titleStyle} value={title} />
              <RichText.Content tagName="p" style={subTextStyle} value={subText} />
            </div>
            <div class="sm-input-container">
              <form>
                <input class="sm-input-box z-depth-0" type="email" placeholder="Enter your Email Address" />
              </form>
            </div>
          </div>
        </section>
      </div >
    );
  },
};
