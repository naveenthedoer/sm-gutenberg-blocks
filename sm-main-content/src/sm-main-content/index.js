/**
 * External dependencies
 */
import React from 'react';
import { element, i18n, components, editor } from 'wp';
/**
 * Internal dependencies
 */
import './style.scss';
import { BLOCK_ATTRIBUTES } from './main-content';


const { Fragment } = element;
const { __ } = i18n;

// TODO: Chooose components for the sidebar settings
const { PanelBody, FontSizePicker, Button } = components;
const { InspectorControls, PanelColorSettings, RichText, MediaUpload, MediaUploadCheck } = editor;

const FONT_SIZES = [
  { name: 'small', shortName: 'S', size: 28 },
  { name: 'regular', shortName: 'M', size: 40 },
  { name: 'large', shortName: 'L', size: 56 },
  { name: 'larger', shortName: 'XL', size: 72 },
];


export const name = 'sm-main-content';

export const settings = {
  title: __('SM Main Content'),

  description: __('A custom block for Gutenberg Cloud'),

  icon: 'cover-image',

  attributes: BLOCK_ATTRIBUTES,

  edit({ attributes, className, setAttributes }) {
    const { title, fontSize, fontColor, backgroundColor, smallTitleFontSize, smallTitleFontColor, smallTitleText, smallTitleBackgroundColor } = attributes;
    const containerStyle = {
      backgroundColor,
    };
    const titleStyle = {
      fontSize: fontSize && `${fontSize}px`,
      color: fontColor,
    };
    const smallTitleStyle = {
      fontSize: smallTitleFontSize && `${smallTitleFontSize}px`,
      color: smallTitleFontColor,
      backgroundColor: smallTitleBackgroundColor
    };

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

    const onAnalyticsFileSelect = (image) => {
      setAttributes({
        analyticsImgURL: image.url,
        analyticsImgId: image.id,
        analyticsImgAlt: image.alt
      })
    }

    const onRemoveAnalyticsImage = (image) => {
      setAttributes({
        analyticsImgURL: null,
        analyticsImgId: null,
        analyticsImgAlt: null
      })
    }

    const onInteractiveFileSelect = (image) => {
      setAttributes({
        interactiveImgURL: image.url,
        interactiveImgId: image.id,
        interactiveImgAlt: image.alt
      })
    }

    const onRemoveInteractiveImage = () => {
      setAttributes({
        interactiveImgURL: null,
        interactiveImgId: null,
        interactiveImgAlt: null
      })
    }

    const onDashboardFileSelect = (image) => {
      setAttributes({
        dashBoardImgURL: image.url,
        dashBoardImgId: image.id,
        dashBoardImgAlt: image.alt
      })
    }

    const onRemoveDashboardImage = () => {
      setAttributes({
        dashBoardImgURL: null,
        dashBoardImgId: null,
        dashBoardImgAlt: null
      })
    }

    const onMonitoringFileSelect = (image) => {
      setAttributes({
        montioringImgURL: image.url,
        montioringImgId: image.id,
        montioringImgAlt: image.alt
      })
    }

    const onRemoveMonitoringImage = () => {
      setAttributes({
        montioringImgURL: null,
        montioringImgId: null,
        montioringImgAlt: null
      })
    }
    

    return (
      <Fragment>
        {/* Block markup (main editor) */}
        <div className={className} style={containerStyle}>
          <section class="section sm-what-we-do valign-wrapper">
            <div class="container">
              <div class="inner-content-wrapper center-align">
                <RichText
                  tagName="div" value={smallTitleText} style={smallTitleStyle}
                  placeholder="Small Title" class="sm-section-small-title"
                  onChange={value => setAttributes({ smallTitleText: value })}
                  inlineToolbar
                />
                <RichText
                  tagName="h2" value={title} style={titleStyle}
                  placeholder="Title"
                  onChange={value => setAttributes({ title: value })}
                  inlineToolbar
                />
                <div class="cards-container">
                  <div class="card-container">
                    <div class="card">
                      <div class="card-image sm-card-image">
                        {
                          (attributes.interactiveImgURL) ? (
                            <span class="sm-icon-bg sm-red">
                              <img src={attributes.interactiveImgURL}
                                alt={attributes.interactiveImgAlt}
                              />
                              <Button
                                onClick={onRemoveInteractiveImage}>
                                Remove
                              </Button>
                            </span>
                          ) : (
                              <MediaUploadCheck>
                                <MediaUpload
                                  onSelect={onInteractiveFileSelect}
                                  value={attributes.interactiveImgId}
                                  type="image"
                                  render={({ open }) =>
                                    <Button onClick={open}>
                                      Upload Interactive icon
                                    </Button>
                                  }
                                />
                              </MediaUploadCheck>
                            )
                        }
                      </div>
                      <div class="card-content sm-card-content center-align">
                        <h5 class="sm-card-title">Interactive Agent</h5>
                        <p>Readily works with Apigee, Integrates with Slack, Voice ready</p>
                      </div>
                    </div>
                  </div>
                  <div class="card-container">
                    <div class="card">
                      <div class="card-image sm-card-image">
                        {
                          (attributes.dashBoardImgURL) ? (
                            <span class="sm-icon-bg sm-blue">
                              <img src={attributes.dashBoardImgURL}
                                alt={attributes.dashBoardImgAlt}
                              />
                              <Button
                                onClick={onRemoveDashboardImage}>
                                Remove
                              </Button>
                            </span>
                          ) : (
                              <MediaUploadCheck>
                                <MediaUpload
                                  onSelect={onDashboardFileSelect}
                                  value={attributes.dashBoardImgId}
                                  type="image"
                                  render={({ open }) =>
                                    <Button onClick={open}>
                                      Upload icon
                                    </Button>
                                  }
                                />
                              </MediaUploadCheck>
                            )
                        }
                      </div>
                      <div class="card-content sm-card-content center-align">
                        <h5 class="sm-card-title">Apigee Dashboard</h5>
                        <p>Combine analytics, reports for all your organizations or ?lter by each</p>
                      </div>
                    </div>
                  </div>
                  <div class="card-container">
                    <div class="card">
                      <div class="card-image sm-card-image">
                        {
                          (attributes.montioringImgURL) ? (
                            <span class="sm-icon-bg sm-green">
                              <img src={attributes.montioringImgURL}
                                alt={attributes.montioringImgURL}
                              />
                              <Button
                                onClick={onRemoveMonitoringImage}>
                                Remove
                              </Button>
                            </span>
                          ) : (
                              <MediaUploadCheck>
                                <MediaUpload
                                  onSelect={onMonitoringFileSelect}
                                  value={attributes.montioringImgId}
                                  type="image"
                                  render={({ open }) =>
                                    <Button onClick={open}>
                                      Upload icon
                                    </Button>
                                  }
                                />
                              </MediaUploadCheck>
                            )
                        }
                      </div>
                      <div class="card-content sm-card-content center-align">
                        <h5 class="sm-card-title">Monitoring and Alerting</h5>
                        <p>Monitor your APIs performance, Simple 3 step integration.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {
                  (attributes.imgURL) ? (
                    <div>
                      <img src={attributes.imgURL}
                        alt={attributes.imgAlt}
                      />
                      <Button
                        onClick={onRemoveImage}>
                        Remove
                      </Button>
                    </div>
                  ) : (
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={onFileSelect}
                          value={attributes.imgId}
                          type="image"
                          render={({ open }) =>
                            <Button onClick={open}>
                              Upload Image
                          </Button>
                          }
                        />
                      </MediaUploadCheck>
                    )
                }
              </div>
              <div class="sm-what-we-do-header-container">
                <h5 class="sm-what-we-do-header-text">
                  <strong>Its fast and easy.</strong>Create your first and ongoing website with Front.
                </h5>
              </div>
              {
                (attributes.analyticsImgURL) ? (
                  <div>
                    <img src={attributes.analyticsImgURL}
                      alt={attributes.analyticsImgAlt}
                    />
                    <Button
                      onClick={onRemoveAnalyticsImage}>
                      Remove
                      </Button>
                  </div>
                ) : (
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={onAnalyticsFileSelect}
                        value={attributes.analyticsImgId}
                        type="image"
                        render={({ open }) =>
                          <Button onClick={open}>
                            Upload Image
                          </Button>
                        }
                      />
                    </MediaUploadCheck>
                  )
              }
              <p>We are launching soon. Join the priority list for information and early access.</p>
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
          <PanelBody title={__('Small Title Settings')} initialOpen={true}>
            <FontSizePicker
              fontSizes={FONT_SIZES} fallbackFontSize={20} value={smallTitleFontSize}
              onChange={value => setAttributes({ smallTitleFontSize: value })}
            />
            <PanelColorSettings
              title={__('Color Settings')} initialOpen={false}
              colorSettings={[
                {
                  value: smallTitleFontColor,
                  onChange: value => setAttributes({ smallTitleFontColor: value }),
                  label: __('Small Title Font Color'),
                },
                {
                  value: smallTitleBackgroundColor,
                  onChange: value => setAttributes({ smallTitleBackgroundColor: value }),
                  label: __('Small Title Background Color'),
                },
              ]} />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  },

  save({ attributes, className }) {
    const { title, fontSize, fontColor, backgroundColor, smallTitleFontSize, smallTitleFontColor, smallTitleText, smallTitleBackgroundColor } = attributes;
    const containerStyle = {
      backgroundColor,
    };
    const titleStyle = {
      fontSize: fontSize && `${fontSize}px`,
      color: fontColor,
    };
    const smallTitleStyle = {
      fontSize: smallTitleFontSize && `${smallTitleFontSize}px`,
      color: smallTitleFontColor,
      backgroundColor: smallTitleBackgroundColor
    };

    return (
      <div className={className} style={containerStyle}>
        <section class="section sm-what-we-do valign-wrapper">
          <div class="container">
            <div class="inner-content-wrapper center-align">
              <RichText.Content tagName="div" style={smallTitleStyle} class="sm-section-small-title" value={smallTitleText} />
              <RichText.Content tagName="h2" style={titleStyle} value={title} />
              <div class="cards-container">
                <div class="card-container">
                  <div class="card">
                    <div class="card-image sm-card-image">
                      <span class="sm-icon-bg sm-red">
                        <img src={attributes.interactiveImgURL} alt={attributes.interactiveImgAlt} />
                      </span>
                    </div>
                    <div class="card-content sm-card-content center-align">
                      <h5 class="sm-card-title">Interactive Agent</h5>
                      <p>Readily works with Apigee, Integrates with Slack, Voice ready</p>
                    </div>
                  </div>
                </div>
                <div class="card-container">
                  <div class="card">
                    <div class="card-image sm-card-image">
                      <span class="sm-icon-bg sm-blue">
                        <img src={attributes.dashBoardImgURL} alt={attributes.dashBoardImgAlt} />
                      </span>
                    </div>
                    <div class="card-content sm-card-content center-align">
                      <h5 class="sm-card-title">Apigee Dashboard</h5>
                      <p>Combine analytics, reports for all your organizations or ?lter by each</p>
                    </div>
                  </div>
                </div>
                <div class="card-container">
                  <div class="card">
                    <div class="card-image sm-card-image">
                      <span class="sm-icon-bg sm-green">
                        <img src={attributes.montioringImgURL} alt={attributes.montioringImgAlt} />
                      </span>
                    </div>
                    <div class="card-content sm-card-content center-align">
                      <h5 class="sm-card-title">Monitoring and Alerting</h5>
                      <p>Monitor your APIs performance, Simple 3 step integration.</p>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <img class="responsive-img sm-img-design" src={attributes.imgURL} alt={attributes.imgAlt} />
                </div>
              </div>
            </div>
            <div class="sm-what-we-do-header-container">
              <h5 class="sm-what-we-do-header-text">
                <strong>Its fast and easy.</strong>Create your first and ongoing website with Front.
                </h5>
            </div>
          </div>
        </section>
        <section class="section sm-what-we-do valign-wrapper">
          <div class="container">
            <div class="inner-content-wrapper center-align">
              <img class="responsive-img sm-img-design" src={attributes.analyticsImgURL} alt={attributes.analyticsImgAlt} />
              <p>We are launching soon. Join the priority list for information and early access.</p>
            </div>
          </div>
        </section>
      </div >
    );
  },
};
