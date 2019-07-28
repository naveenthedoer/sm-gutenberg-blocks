/**
 * External dependencies
 */
import React from 'react';
import { element, i18n, components, editor } from 'wp';

/**
 * Internal dependencies
 */
import './editor.scss';
import './style.scss';
import {BLOCK_ATTRIBUTES} from './hero';


const { Fragment } = element;
const { __ } = i18n;

// TODO: Chooose components for the sidebar settings
const { PanelBody, FontSizePicker } = components;
const { InspectorControls, PanelColorSettings, RichText } = editor;

const FONT_SIZES = [
  { name: 'small', shortName: 'S', size: 28 },
  { name: 'regular', shortName: 'M', size: 40 },
  { name: 'large', shortName: 'L', size: 56 },
  { name: 'larger', shortName: 'XL', size: 72 }
];

export const name = 'sm-hero';

export const settings = {
  title: __('SM Hero Block'),

  description: __('A custom block for Gutenberg Cloud'),

  icon: 'cover-image',

  attributes: BLOCK_ATTRIBUTES,

  edit({ attributes, className, setAttributes }) {
    const { title, fontSize, fontColor, backgroundColor, subTitlefontSize, subTitlefontColor, subTitle, buttonfontSize, buttonfontColor, buttonBackgroundColor, bannerButtonText } = attributes;
    const containerStyle = {
      backgroundColor
    };
    const titleStyle = {
      fontSize: fontSize && `${fontSize}px`,
      color: fontColor,
    };
    const subTitleStyle = {
      fontSize: subTitlefontSize && `${subTitlefontSize}px`,
      color: subTitlefontColor,
    };

    const buttonStyle = {
      fontSize: buttonfontSize && `${buttonfontSize}px`,
      color: buttonfontColor,
      backgroundColor: buttonBackgroundColor
    }

    return (
      <Fragment>
        {/* Block markup (main editor) */}
        <div className={className} style={containerStyle}>
          <div class="hero-content-container">
            <div class="hero-title-container">
              <RichText
                tagName="h1" value={title} style={titleStyle}
                placeholder="Title"
                onChange={value => setAttributes({ title: value })}
                inlineToolbar
              />
              <RichText
                tagName="h4" value={subTitle} style={subTitleStyle}
                placeholder="Sub Title"
                onChange={value => setAttributes({ subTitle: value })}
                inlineToolbar
              />
              <RichText
                tagName="button" value={bannerButtonText} style={buttonStyle}
                placeholder="Button Text" class="banner-button"
                onChange={value => setAttributes({ bannerButtonText: value })}
                inlineToolbar
              />
            </div>
          </div>
        </div>

        <InspectorControls>
          {/* Block settings (sidebar) */}
          <PanelBody title={__('Title Settings')} initialOpen={true}>
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
              fontSizes={FONT_SIZES} fallbackFontSize={40} value={subTitlefontSize}
              onChange={value => setAttributes({ subTitlefontSize: value })}
            />
          </PanelBody>
          <PanelColorSettings
            title={__('Sub Title Color Settings')} initialOpen={false}
            colorSettings={[
              {
                value: subTitlefontColor,
                onChange: value => setAttributes({ subTitlefontColor: value }),
                label: __('Sub Title Font Color'),
              }
            ]} />
          <PanelBody title={__('Button Settings')} initialOpen={true}>
            <FontSizePicker
              fontSizes={FONT_SIZES} fallbackFontSize={20} value={buttonfontSize}
              onChange={value => setAttributes({ buttonfontSize: value })}
            />
          </PanelBody>
          <PanelColorSettings
            title={__('Button Color Settings')} initialOpen={false}
            colorSettings={[
              {
                value: buttonfontColor,
                onChange: value => setAttributes({ buttonfontColor: value }),
                label: __('Button Font Color'),
              },{
                value: buttonBackgroundColor,
                onChange: value => setAttributes({ buttonBackgroundColor: value }),
                label: __('Button Background Color'),
              }
            ]} />
        </InspectorControls>
      </Fragment>
    );
  },

  save({ attributes, className }) {
    const { title, fontSize, fontColor, backgroundColor, subTitlefontSize, subTitlefontColor, subTitle, buttonfontSize, buttonfontColor, buttonBackgroundColor, bannerButtonText } = attributes;
    const containerStyle = {
      backgroundColor
    };
    const titleStyle = {
      fontSize: fontSize && `${fontSize}px`,
      color: fontColor,
    };
    const subTitleStyle = {
      fontSize: subTitlefontSize && `${subTitlefontSize}px`,
      color: subTitlefontColor,
    };
    const buttonStyle = {
      fontSize: buttonfontSize && `${buttonfontSize}px`,
      color: buttonfontColor,
      backgroundColor: buttonBackgroundColor
    };

    return (
      <div className={className} style={containerStyle}>
        <div class="hero-content-container">
          <div class="hero-title-container">
            <RichText.Content tagName="h1" style={titleStyle} value={title} />
            <RichText.Content tagName="h4" style={subTitleStyle} value={subTitle} />
            <RichText.Content tagName="button" class="banner-button" style={buttonStyle} value={bannerButtonText} />
          </div>
        </div>
      </div>
    );
  },
};
